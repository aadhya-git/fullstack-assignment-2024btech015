import Reveal from './Reveal';
import { RESUME_PDF_URL, RESUME_DOCX_URL } from '../config';

export default function ResumeSection() {
  return (
    <section id="resume" style={{ padding: '4rem 0' }}>
      <div className="container">
        <Reveal className="resume-band bg-wine-checks">
          <div>
            <h2 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(2.6rem, 6vw, 3.6rem)', color: '#F7F3EC', fontWeight: 400, lineHeight: 1.1 }}>
              Grab my Resume
            </h2>
            <p style={{ color: '#F7EBEB', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginTop: '0.3rem' }}>
              Education, experience, projects & certifications — on one page.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href={RESUME_PDF_URL} className="btn-light" download>📄 Download PDF</a>
            <a href={RESUME_DOCX_URL} className="btn-light-outline" download>📝 Download Word (.docx)</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
