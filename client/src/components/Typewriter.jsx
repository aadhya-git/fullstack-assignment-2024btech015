import { useEffect, useState } from 'react';

/** Types each word, pauses, deletes it, then moves to the next one. */
export default function Typewriter({ words, typingSpeed = 85, deletingSpeed = 45, pause = 1600 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter" aria-label={words.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true">|</span>
    </span>
  );
}
