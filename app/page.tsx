import Me from "../components/Me"
import About from "./about/page";
import Contact from "./contacts/page";
import WorkExperience from "./WorkExperience/page";

const Home = () => {
  return (
    <>
      <Me />
      <About/>
      <WorkExperience/>
      <Contact/>
    </>
  );
};

export default Home;
