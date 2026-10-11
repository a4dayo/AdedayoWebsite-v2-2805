import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

// Phase 1 nav. /ventures and /writing join once those pages ship.
const NAV = [
  { href: "/about", label: "About" },
  { href: "/advisory", label: "Advisory" },
  { href: "/contact", label: "Contact" },
];

function Nav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-warm/90 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="t-label !tracking-[0.2em] text-ink hover:opacity-60">
          Adedayo Awojobi
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = location === item.href || location.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  active ? "text-forest" : "text-graphite hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline md:hidden">
          <nav className="shell flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="border-b border-hairline py-3 text-sm text-ink last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="t-sub max-w-[20ch]">
              Good ideas deserve the operating system to become real.
            </p>
            <a href="mailto:hello@adedayoawojobi.com" className="link-underline mt-5 inline-block">
              hello@adedayoawojobi.com
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="t-label mb-4">Pages</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="link-quiet">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="t-label mb-4">Based in</div>
            <p className="text-sm text-graphite">
              Abuja, Nigeria
              <br />
              Working across Nigeria &amp; Botswana
            </p>
          </div>
        </div>

        <hr className="rule my-10" />
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="t-label">© {new Date().getFullYear()} Adedayo Awojobi</p>
          <p className="t-label">Independent · Advisory · Board</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-warm">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
