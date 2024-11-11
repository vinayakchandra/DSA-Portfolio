import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Kaanoon-Chatbot",
      description:
        "Chatbot made specifically for Indian Constitution",
      tags: ["python", "streamlit", "Jupyter Notebook"],
      link: "https://github.com/vinayakchandra/Kaanoon-Chatbot",
    },
    {
      title: "Waste-Wizard",
      description:
        `Flask application that allows users to upload images of waste items and classify them into different categories.`,
      tags: ["Flask", "Tensorflow", "python"],
      link: "https://github.com/vinayakchandra/Waste-Wizard",
    }, {
      title: "SRM Student Academia",
      description:
        "A platform where you can view SRM students' details, including their timetable, marks, and attendance.",
      tags: ["flutter"],
      link: "https://github.com/vinayakchandra/srm_student",
    },{
      title: "3D Solar System",
      description:
        "Developed an interactive 3D solar system model using Three.js, allowing users to explore space by rotating, zooming, and changing perspective in real-time. ",
      tags: ["ThreeJS", "JS"],
      link: "https://github.com/vinayakchandra/3D-SolarSystem",
    },{
      title: "ToyStore API",
      description:
        "REST API was made using a backend framework flask in Python",
      tags: ["MySQL", "python", "flask"],
      link: "https://github.com/vinayakchandra/RESTful_api_ToyStore",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5"/>
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx}/>;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
