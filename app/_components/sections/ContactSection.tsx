import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

const contactLinks = [
  {
    icon: "/image/mail-settings-icon.png",
    label: "Email",
    value: "zinmoeaung1800@gmail.com",
    href: "mailto:zinmoeaung1800@gmail.com",
  },
  {
    icon: "/image/github-icon.png",
    label: "GitHub",
    value: "github.com/kyawwin10",
    href: "https://github.com/kyawwin10",
  },
  {
    icon: "/image/linkedin.png",
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
            <div className="section-sheen mb-2 rounded-2xl border border-cyan/30 bg-linear-to-br from-purple-shadow to-blue-popsicle p-6 text-center shadow-[0_20px_56px_rgba(0,0,0,0.2)] sm:mb-8 sm:p-8">
              <div className="flex justify-center items-center text-4xl">
                <img src="/image/handshake-color-icon.png" alt="icon" width={60} height={60} />
              </div>
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
                  className="group flex items-center gap-3 rounded-xl border border-grey-blue-leaf/30 bg-purple-shadow p-4 transition-all duration-300 hover:-translate-y-1 sm:gap-4"
                >
                  <div className="flex shrink-0 items-center justify-center text-xl p-1 bg-[#c2c2c2] rounded-md">
                    <img src={icon} alt={`${label} icon`} className="h-6 w-6 object-contain" />
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
