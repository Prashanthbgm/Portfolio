import { motion } from "framer-motion";

function About() {
  const timeline = [
    {
      year: "2021-2024",
      title: "BCA From JSS college",
    },
    {
      year: "2024-2026",
      title: "MCA From RV Institute of Technology",
    },
    {
      year: "Frontend",
      title: "React, React-Native",
    },
    {
      year: "Backend",
      title: "Node.js,Express.js,Django,Flask",
    },
    {
      year: "Programing Language",
      title: "Python,Java,Javascript",
    },
  ];

  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-[#050816]
        text-white
        px-6
        lg:px-12
        py-24
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-8"
          >
            <h3 className="text-2xl font-bold mb-5 text-center lg:text-left">
              Prashanth M
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Full Stack Engineer focused on FullStack
              Development, AI/ML Integration and
              Intelligent Systems.

              Passionate about building scalable APIs,
              recommendation engines, machine learning
              applications and modern web experiences.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm sm:justify-start">
              <span className="rounded-full bg-purple-500/20 px-4 py-2">MERN</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">Python</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">AI / ML</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">Node.js</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">MongoDB</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">Django</span>
              <span className="rounded-full bg-purple-500/20 px-4 py-2">Postgresql</span>
            </div>

          </motion.div>

          {/* TIMELINE */}

          <div className="space-y-10">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-start"
              >
                <div className="w-full sm:w-[110px] text-purple-400 font-bold">{item.year}</div>
                <div className="flex-1 border-l border-purple-500/30 pl-0 sm:pl-6">{item.title}</div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;