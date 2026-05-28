export default function Portfolio() {
  const projects = [
    {
      title: "AI Chat Assistant",
      description:
        "A Python-powered AI assistant project focused on automation, intelligent responses, and productivity.",
      tech: ["Python", "AI", "Automation"],
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Interactive analytics dashboard using Python, Pandas, and data visualization tools.",
      tech: ["Python", "Pandas", "Data Analysis"],
    },
    {
      title: "Machine Learning Predictor",
      description:
        "A machine learning model project for prediction and intelligent decision-making.",
      tech: ["Machine Learning", "NumPy", "Statistics"],
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Artificial Intelligence",
    "Git & GitHub",
    "Data Analysis",
    "Problem Solving",
    "Statistics",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 z-10">
          Shreyansh Nautiyal
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl z-10">
          AI & Data Analytics Student • Python Developer • Future AI Engineer
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center z-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-zinc-400 leading-8 text-lg">
              I am an aspiring AI and Data Analytics professional passionate
              about technology, machine learning, automation, and intelligent
              systems. I enjoy building projects using Python and exploring the
              future of artificial intelligence.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              My goal is to become a highly skilled AI Engineer and work on
              innovative technologies that create real-world impact.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>

            <div className="space-y-4 text-zinc-300">
              <div>
                <span className="font-semibold text-white">Role:</span> AI &
                Data Analytics Student
              </div>

              <div>
                <span className="font-semibold text-white">Interests:</span>{" "}
                AI, Machine Learning, Automation, Analytics
              </div>

              <div>
                <span className="font-semibold text-white">Current Focus:</span>{" "}
                Python, Data Analysis, ML Fundamentals
              </div>

              <div>
                <span className="font-semibold text-white">Career Goal:</span>{" "}
                Build advanced AI systems and secure a top tech role
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 rounded-2xl bg-zinc-900 border border-zinc-700 hover:border-cyan-400 transition shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>

          <p className="text-zinc-400 text-lg leading-8 mb-10">
            Add your latest resume PDF and connect it to the button below.
          </p>

          <a
            href="#"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/30"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-zinc-400">yourmail@example.com</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">GitHub</h3>
            <p className="text-zinc-400">github.com/yourprofile</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold mb-4">LinkedIn</h3>
            <p className="text-zinc-400">linkedin.com/in/yourprofile</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        © 2026 Shreyansh Nautiyal • Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
