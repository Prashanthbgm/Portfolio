import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Agrishayak",
      description:
        "AI-powered agriculture platform that helps farmers make data-driven decisions using crop recommendation, disease detection and market intelligence.",
      features: [
        "Crop Recommendation System",
        "Plant Disease Detection",
        "Mandi Market Prices",
        "Weather Integration",
        "Machine Learning Models",
      ],
      tech: ["React", "Flask", "Python", "TensorFlow", "MongoDB"],
      sourceLink: "https://github.com/Prashanthbgm/agrishayak",
      demoLink: "https://agrishayak.example.com",
    },
    {
      title: "BlinkSit",
      description:
        "Quick-commerce grocery delivery platform inspired by Blinkit, providing product discovery, cart management, admin control and order processing.",
      features: [
        "Product Management",
        "Shopping Cart",
        "Admin Dashboard",
        "Order Management",
        "Location-Based Delivery",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      sourceLink: "https://github.com/Prashanthbgm/blinksit",
      demoLink: "https://blinksit.example.com",
    },
  ];

  return (
    <section
      id="projects"
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

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-purple-500/40 lg:grid-cols-2"
            >
              {/* Image Side */}

              <div className="h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-gray-400 sm:h-64 lg:h-[320px]">
                Project Screenshot
              </div>

              {/* Content */}

              <div>

                <h3
                  className="
                    text-4xl
                    font-bold
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-300
                    leading-relaxed
                    mb-6
                  "
                >
                  {project.description}
                </p>

                {/* Features */}

                <div className="mb-6">

                  <h4
                    className="
                      text-purple-400
                      mb-3
                      font-semibold
                    "
                  >
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-gray-400"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Tech Stack */}

<div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-600 sm:w-auto"
                >
                  View Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-400 sm:w-auto"
                >
                  Live Demo
                </a>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;