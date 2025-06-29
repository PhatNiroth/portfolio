type Skill = {
    title: string;
    image: string; // Optional: for icons later
  };
  
  const About = () => {
    const techSkills: Skill[] = [
      { title: "JavaScript", image: "" },
      { title: "TypeScript", image: "" },
      { title: "ReactJS", image: "" },
      { title: "Next.js", image: "" },
      { title: "PHP", image: "" },
      { title: "CodeIgniter", image: "" },
      { title: "Laravel", image: "" },
      { title: "C#", image: "" },
      { title: "Docker", image: "" },
      { title: "Version Control", image: "" },
      { title: "GitHub", image: "" },
      { title: "CI/CD", image: "" },
    ];
  
    return (
      <section
        id="about"
        className="flex flex-col items-center w-full min-h-screen px-6 py-16 gap-14 bg-gray-100"
      >
        <h1 className="text-5xl font-bold text-gray-800">About Me</h1>
  
        <div className="max-w-4xl text-lg text-center text-gray-700 leading-relaxed">
          I&apos;m a <strong>Full Stack Web Developer</strong> with a strong focus on clean,
          functional, and user-centric design. My expertise lies in technologies like{" "}
          <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong>, as well
          as backend development with <strong>Laravel</strong>, <strong>PHP</strong>, and{" "}
          <strong>C#</strong>. I&apos;m passionate about delivering high-quality solutions, optimizing
          user experiences, and continuously learning new tools and frameworks to stay ahead in the
          fast-paced tech world.
        </div>
  
        <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
          <hr className="w-32 border-gray-400" />
          <h2 className="text-2xl font-semibold text-gray-800">Tech Skills</h2>
          <p className="text-gray-600 text-sm">
            A selection of tools and technologies I&apos;ve worked with:
          </p>
  
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-md bg-blue-50 text-blue-800 font-medium border border-blue-200"
              >
                {skill.title}
              </div>
            ))}
          </div>
        </div>
  
        <hr className="w-32 border-gray-400" />
      </section>
    );
  };
  
  export default About;
  