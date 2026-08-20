import Image from "next/image";
import { TypewriterText, CardWithTypewriter } from "@/components/typewriter";
import { Suspense } from "react";
import GitHubFeed from "@/components/GitHubProjectCards";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-linear-to-b from-zinc-200 to-zinc-600 text-zinc-200">
      <main className="w-full max-w-3xl px-8 py-16 flex flex-col gap-12">

        {/* HERO */}
        <section className="profile-section">
          <div className="profile">
            <Image
              src="/imgs/Profile.jpg"
              alt="Profile picture"
              width={150}
              height={150}
              priority
              className="object-cover"
            />
          </div>

          <div className = "title-container">
             <h1>
                <TypewriterText
                  text="PIETER-JACQUES LE ROUX"
                  playOnce
                  className="title"
                />
            </h1>
            <p className="subtitle">
              Software Developer | Python | Web Development
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="panel">
          <h2 className="heading">{"> ABOUT"}</h2>
          <p className="body-text">
            I came to software development from a background in marketing. I spent years working closely in a diverse set of teams on tight deadlines and in high pressure environments, producing material that had to communicate clearly and make an impact quickly. That work taught me to think and problem solve on the go, to quickly learn and stay on top of emerging technologies and trends, and that the difference between something good and something great often comes down to the details that most people never consciously notice.
            I’ve always had an interest in development as a hobby and started to consider a career shift after doing projects with friends in my own time. The transition into development started through a bootcamp, where I had my love and passion for learning reignited. I found myself going beyond the curriculum, building things outside of class hours, and spending time understanding not just how to make something work, but why it worked the way it did.
            That thirst for learning has become central to how I work. I am not satisfied with code that merely functions, I want to understand the underlying mechanics, anticipate edge cases, and build things that are robust and maintainable. Whether I am working through a logic problem in Python, structuring a component in React, or debugging an unexpected behaviour, I approach each challenge with the same methodical mindset: break it down, understand it fully, and build it properly.
            What keeps me motivated is the continuous learning aspect of this field. Software development is one of the few careers where the learning never stops, there is always a new tool to explore, a better pattern to discover, or a more elegant solution to find. Coming from a background where skills could plateau, I find that aspect genuinely energising rather than overwhelming. Every project teaches me something new, and I actively seek out challenges that push me beyond what I already know.
            My marketing background gives me a perspective I think is undervalued in technical roles. Years of producing work that had to resonate with an audience, trained me to think about the person on the other side of whatever I am building. I understand that software, like any creative work, ultimately exists to serve someone. That instinct to care about how something feels to interact with and not just whether it works, is something I bring to every project I work on.
            I am currently open to opportunities across web development, desktop applications, and beyond. I am not fixed on a particular domain. I am interested in working on problems that matter, with people who care about doing things well, in an environment where I can continue to grow.
          </p>
        </section>

        {/* SKILLS */}
        <section className="panel">
          <h2 className="heading">{"> SKILLS"}</h2>

          <div className="skills">
            {["Python", "React", "Next.js", "SQL", "PyQt", "Git"].map(skill => (
              <span key={skill} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
      <div style={{ minHeight: "400px" }}>
        <Suspense fallback={
          <section className="panel">
          <p className="body-text">{">"} loading repositories...</p>
          </section>
        }>
          <GitHubFeed />
        </Suspense>
        </div>
        {/* CONTACT */}
        <section className="panel">
          <h2 className="heading">{"> CONTACT"}</h2>
          <div className="body-text">
            <p> email: pieter96.work@gmail.com</p>
            <a href="https://www.linkedin.com/in/software-developer-pj-le-roux/" target="_blank" rel="noopener noreferrer" className="social-link">
               linkedin: linkedin.com/in/software-developer-pj-le-roux
            </a>

            <a href="https://github.com/Pieterlr96" target="_blank" rel="noopener noreferrer" className="social-link">
               github: github.com/Pieterlr96
            </a>

            <a href="/Pieter_le_Roux_CV.pdf" download="Pieter_le_Roux_CV.pdf" className="cv-link">
              Click to Download CV
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}