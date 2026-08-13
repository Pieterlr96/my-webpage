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
            I am a developer focused on building practical applications using Python and modern web technologies. 
            I enjoy solving real-world problems and continuously improving my skills through hands-on projects.
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