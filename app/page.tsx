import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-linear-to-b from-zinc-200 to-zinc-600 text-zinc-200">
      
      <main className="w-full max-w-3xl px-8 py-16 flex flex-col gap-12">

        {/* HERO */}
        <section style= {{ display: "flex", flexDirection: "row", alignItems: "center", gap: "24px" }}>
          <div className="profile">
            <Image
              src="/imgs/Profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>

          <div>
               <h1 className="title">
              PIETER-JACQUES LE ROUX
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
        <section className="panel">
          <h2 className="heading">{"> PROJECTS"}</h2>

          <div className="projects">
            <div className="card">
              <h3 className="card-title">Task Manager App</h3>
              <p className="body-text">
                A desktop task manager built with PyQt and SQLite.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Personal Website</h3>
              <p className="body-text">
                A portfolio site built with Next.js.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="panel">
          <h2 className="heading">{"> CONTACT"}</h2>
          <div className="body-text">
            <p> email: your@email.com</p>
            <p>linkedin: linkedin.com/in/yourname</p>
            <p> github: github.com/yourname</p>
          </div>
        </section>

      </main>
    </div>
  );
}