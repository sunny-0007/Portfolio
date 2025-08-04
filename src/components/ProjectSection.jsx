import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mern Stack Project",
    Description: "Mern stack project with fully functionality",
    image: "/Project/Project1.png",
    tags: ["MongoDB", "ExpressJS", "React", "Node JS"],
    demoUrl: "https://wanderlust-xobe.onrender.com/listings",
    Githuburl: "https://github.com/sunny-0007/wanderlust",
  },
  {
    id: 2,
    title: "Pizza website landing page",
    Description: "A landing page ",
    image: "/Project/Project2.png",
    tags: ["HTML ", "CSS"],
    demoUrl: "#",
    Githuburl: "https://github.com/sunny-0007/Amazon-Clone",
  },
   {
    id: 3,
    title: "Portfolio",
    Description: "Create a portfolio using react & tailwind CSS",
    image: "/Project/Project3.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    Githuburl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature
          <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent project. Each project was carefully crafted
          with attention to details , performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover  "
            >
              <div className="h-48  overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20  text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground  text-sm mb-4">
                {project.Description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a href={project.demoUrl} target="_blank"  className="text-foreground/80 hover:text-primary transiton-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.Githuburl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transiton-colors duration-300"
                  >
                    <Github  size={20}/>
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <a className="cosmic-botton w-fit flex items-center mx-auto gap-2 " href="https://github.com/sunny-0007" target="_blank"> Check my Github <ArrowRight size={16}/></a>

        </div>
      </div>
    </section>
  );
};
