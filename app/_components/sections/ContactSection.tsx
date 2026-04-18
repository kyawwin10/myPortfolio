import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: "zinmoeaung1800@gmail.com",
    href: "mailto:zinmoeaung1800@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 013 .4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/kyawwin10",
    href: "https://github.com/kyawwin10",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/zinmoekyaw-dev",
    href: "https://linkedin.com/in/zinmoekyaw-dev",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Contact"
          title="Get In Touch"
          description="I am open to Mid-level Developer opportunities and collaborations. Feel free to reach out!"
        />

        <div className="mx-auto max-w-lg">
          {/* CTA card */}
          <Reveal>
            <div className="section-sheen mb-6 rounded-2xl border border-cyan/30 bg-linear-to-br from-purple-shadow to-blue-popsicle p-6 text-center shadow-[0_20px_56px_rgba(0,0,0,0.2)] sm:mb-8 sm:p-8">
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="mb-2 text-lg font-bold text-white">
                Let&apos;s Work Together
              </h3>
              <p className="text-sm leading-relaxed text-[#a0b4cc]">
                Whether it’s a mid-level developer opportunity or just a conversation about web development, I’d love to connect.
              </p>
            </div>
          </Reveal>

          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map(({ icon, label, value, href }, index) => (
              <Reveal key={label} delay={index * 110} variant="left">
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border border-grey-blue-leaf/30 bg-purple-shadow p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:bg-blue-popsicle sm:gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-popsicle text-xl transition-colors group-hover:bg-purple-shadow">
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-grey-blue-leaf">{label}</p>
                    <p className="truncate text-sm font-medium text-[#c8d4e8] transition-colors group-hover:text-[#67d9f0]">
                      {value}
                    </p>
                  </div>
                  <svg
                    className="h-4 w-4 shrink-0 text-grey-blue-leaf/50 transition-colors group-hover:text-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
