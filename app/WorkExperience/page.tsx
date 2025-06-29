type WorkPlace = {
    companyName: string;
    description: string;
    results: string;
  };
  
  const WorkExperience = () => {
    const workExperiences: WorkPlace[] = [
      {
        companyName: "Chrizt Bent",
        description:
          "Developed and maintained a POS (Point of Sale) system used in multiple retail stores. Contributed to front-end UI improvements and backend APIs.",
        results: "Improved transaction speed by 40% and reduced downtime issues.",
      },
      {
        companyName: "Galaxy Casino",
        description:
          "Worked with a cross-functional team to enhance the POS system with new features like sales analytics and multi-currency support.",
        results: "Helped boost customer satisfaction and increased monthly sales tracking efficiency.",
      },
      {
        companyName: "Krawma & Associates CO. LTD",
        description:
          "Designed mock-up job boards and dashboards for recruitment platforms. Focused on UI/UX and responsiveness.",
        results: "Delivered complete mockups used for pitching to international clients.",
      },
    ];
  
    return (
        <section
    id="experience" className="flex flex-col items-center w-full min-h-screen bg-gray-100 py-16 px-4">
        <h1 className="text-5xl font-bold mb-12 text-gray-800">Work Experiences</h1>
  
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {workExperiences.map((work, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {work.companyName}
              </h2>
              <p className="text-gray-700 mb-3">{work.description}</p>
              <p className="text-sm text-gray-500 italic">Result: {work.results}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WorkExperience;
  