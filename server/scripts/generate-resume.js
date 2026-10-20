// Builds assets/resume/Adhya_Mittal_Resume.docx from resumeData.js.
// The PDF in assets/resume is Adhya's original resume and is served as-is.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, AlignmentType, BorderStyle, TabStopType
} from 'docx';
import cv from './resumeData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'assets', 'resume');
const FONT = 'Cambria';
const LINK_BLUE = '1F4FBF';
const RIGHT_TAB = 9638; // twips — right edge of an A4 page with 2cm margins
const DATE_TAB = 1600; // twips — column for education years

fs.mkdirSync(OUT_DIR, { recursive: true });

const heading = (text) => new Paragraph({
  spacing: { before: 260, after: 100 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000', space: 2 } },
  children: [new TextRun({ text, smallCaps: true, size: 30 })]
});

const rightTabbed = (left, right) => new Paragraph({
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  spacing: { before: 120 },
  children: [...left, new TextRun({ text: `\t${right}` })]
});

const contactRuns = cv.contact.flatMap((c, i) => {
  const run = c.link
    ? new ExternalHyperlink({ link: c.link, children: [new TextRun({ text: c.label, color: LINK_BLUE })] })
    : new TextRun({ text: c.label, color: LINK_BLUE });
  return i === 0 ? [run] : [new TextRun('   |   '), run];
});

const doc = new Document({
  creator: cv.name,
  title: `${cv.name} — Resume`,
  styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 900, bottom: 900, left: 1134, right: 1134 } }
    },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cv.name, size: 48 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: contactRuns }),

      heading('Summary'),
      new Paragraph({ alignment: AlignmentType.JUSTIFIED, text: cv.summary }),

      heading('Projects'),
      ...cv.projects.flatMap((p) => [
        rightTabbed([new TextRun({ text: p.heading, bold: true })], p.date),
        new Paragraph({ alignment: AlignmentType.JUSTIFIED, text: p.text }),
        new Paragraph({ children: [new TextRun({ text: `${p.techLabel}: `, bold: true }), new TextRun(p.tech)] })
      ]),

      heading('Education'),
      ...cv.education.map((e) => new Paragraph({
        tabStops: [{ type: TabStopType.LEFT, position: DATE_TAB }, { type: TabStopType.RIGHT, position: RIGHT_TAB }],
        children: [
          new TextRun(`${e.period}\t${e.text}`),
          ...(e.bold ? [new TextRun({ text: e.bold, bold: true })] : []),
          new TextRun(`\t${e.score}`)
        ]
      })),

      heading('Skills'),
      ...cv.skills.map((s) => new Paragraph({
        tabStops: [{ type: TabStopType.LEFT, position: DATE_TAB }],
        children: [new TextRun(`${s.group}\t${s.items}`)]
      })),

      heading('Position of Responsibility'),
      ...cv.positions.flatMap((p) => [
        new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: p.heading, bold: true }), new TextRun(p.note)] }),
        new Paragraph({ text: p.text })
      ]),

      heading('ACHIEVEMENTS'),
      ...cv.achievements.map((a) => new Paragraph({ text: a })),

      heading('LANGUAGES'),
      new Paragraph({ text: cv.languages }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 240 },
        children: [new TextRun({ text: cv.updated, size: 17 })]
      })
    ]
  }]
});

const out = path.join(OUT_DIR, 'Adhya_Mittal_Resume.docx');
fs.writeFileSync(out, await Packer.toBuffer(doc));
console.log(`✅ Generated ${out}`);
