import Navbar from "../components/Navbar";
import Globe from "../components/Globe";
import Floatingtags from "../components/FloatingTags";
import resume from "../assets/Prash_29.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white px-6 py-8 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <Navbar />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* LEFT SIDE */}

          <div className="space-y-5 sm:space-y-6 mx-auto max-w-xl items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300 sm:px-4 sm:py-2 sm:text-sm">
              AI • BACKEND • FULL STACK
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                PRASHANTH M
              </h1>
              <h2 className="text-sm font-medium text-gray-300 sm:text-base lg:text-2xl">
                Full Stack Engineer | Backend Engineer | AI Engineer
              </h2>
            </div>

            <p className="text-lg font-semibold text-purple-400 sm:text-xl lg:text-2xl">
              AI / ML Enthusiast
            </p>

            <p className="max-w-lg text-gray-400 leading-relaxed text-sm sm:text-base">
              I build intelligent systems, AI-powered applications and modern digital experiences using MERN, Python and Machine Learning.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://github.com/Prashanthbgm"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-auto"
              >
                View My Work
              </a>
              <a
                href={resume}
                download="Prashanth_M_Resume.pdf"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-500 sm:w-auto"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center pt-10 lg:pt-0">
            <div className="relative flex h-72 w-full max-w-[340px] items-center justify-center sm:h-80 sm:max-w-[420px] md:h-[460px] lg:h-[560px] lg:max-w-[520px]">
              <div className="absolute inset-0 m-auto h-40 w-40 rounded-full border border-white/10 sm:h-48 sm:w-48 lg:h-[280px] lg:w-[280px]" />
              <div className="absolute inset-0 m-auto h-52 w-52 rounded-full border border-white/10 sm:h-64 sm:w-64 lg:h-[380px] lg:w-[380px]" />
              <div className="absolute inset-0 m-auto h-64 w-64 rounded-full border border-white/10 sm:h-72 sm:w-72 lg:h-[520px] lg:w-[520px]" />

              <Floatingtags />
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;