import useInView from '../hooks/useInView';

/**
 * Wraps children in a scroll-triggered entrance animation.
 * variant: 'up' (slide-up), 'fade', 'left', 'right'
 */
export default function Reveal({ children, variant = 'up', delay = 0, as: Tag = 'div', className = '', style }) {
  const [ref, inView] = useInView(0.15);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
