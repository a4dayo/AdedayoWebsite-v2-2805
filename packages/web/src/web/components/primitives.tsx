import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

/** Scroll-triggered reveal. Fires once, respects prefers-reduced-motion via CSS. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Indexed uppercase section label sitting above a full-width hairline. */
export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-10 md:mb-14">
      <hr className="rule mb-4" />
      <div className="t-label flex items-baseline gap-4">
        <span>{index}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}

/** Slash-separated giant serif run — used for Selected Ventures. */
export function SerifRun({ items }: { items: string[] }) {
  return (
    <p className="t-run flex flex-wrap items-baseline">
      {items.map((item, i) => (
        <Fragment key={item}>
          <span>{item}</span>
          {i < items.length - 1 && (
            <span className="mx-3 text-[0.6em] text-graphite/45">/</span>
          )}
        </Fragment>
      ))}
    </p>
  );
}

/** One fact in the credibility strip. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[9.5rem] shrink-0 md:min-w-0">
      <div className="t-numeral">{value}</div>
      <div className="t-label mt-2">{label}</div>
    </div>
  );
}
