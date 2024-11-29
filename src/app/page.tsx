import Image from "next/image";

import profile from "../app/assets/Image.jpg";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      {/* Navbar */}
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">My Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-teal-400">Home</a>
            <a href="#about" className="hover:text-teal-400">About</a>
            <a href="#skills" className="hover:text-teal-400">Skills</a>
          </nav>
          <button className="md:hidden text-2xl text-gray-200">&#9776;</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center mt-16 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hello, I am<span className="text-teal-400"> Muhammad Qasim</span>
          </h2>
          <p className="mt-4 text-gray-400">
            A passionate <span className="text-teal-400">Full Stack Developer and AI</span> and provide a better solution to another one.
          </p>
          
          
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={profile}
            alt="Profile"
            className="rounded-full shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-20 px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400">About Me</h2>
        <p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto">
        I am Muhammad Qasim, a university student passionate about becoming a full-stack developer. I am currently exploring the field of AI to understand how I can integrate it into my work as a full-stack developer, combining both technologies to create innovative solutions
          
                  </p>
        <div className="mt-10 flex justify-center">
          <Image
            src={profile}
            alt="About Profile"
            className="rounded-full shadow-lg"
            width={250}
            height={250}
          />
        </div>
      </section>

       {/* Skills Section */}
      <section id="skills" className="mt-20 px-6">
        <h2 className="text-4xl font-bold text-center text-teal-400">Skills</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {["Programming", "Java.script","React.Js","Next.JS","Node.JS","Express.JS","Python"].map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 shadow-lg w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center rounded-lg text-center text-teal-400 font-bold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section> 



      {/* Footer */}
      <footer className="mt-20 bg-gray-800 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Muhammad Qasim. All rights reserved.</p>
      </footer>
    </div>
  );
}
