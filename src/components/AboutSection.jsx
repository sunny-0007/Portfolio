import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
  return <section id="About" className="py-24 px-4 relative  ">
    {" "}
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
           <h3 className="text-2xl font-semibold"> Passionate web developer &  Tech creator</h3>

           <p className="text-muted-foreground ">
             I am a passionate web developer with a keen interest in creating innovative and user-friendly web applications. My journey in web development has been driven by a desire to solve real-world problems through technology. 
           </p>

           <p className="text-muted-foreground ">
             I am constantly exploring new technologies and frameworks to enhance my skill set and deliver the best possible solutions. My goal is to create web applications that not only meet the needs of users but also provide a delightful experience.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
             <a href="#contact" className="cosmic-botton">
               Get In Touch
             </a>

             <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
              Download Resume
             </a>
           </div>
        </div>
        <div className="grid grid-cols-1 gap-6 ">
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
               <Code className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">I create responsive and user-friendly websites using the latest technologies.</p>
              </div>
             </div>
          </div>
          <div className="gradient-border p-6 card-hover">
             <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
               <User className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI UX Design</h4>
                <p className="text-muted-foreground">I create responsive and user-friendly designs that enhance the overall user experience.</p>
              </div>
             </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
               <Briefcase className="h-6 w-6 text-primary"/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">I manage projects efficiently, ensuring timely delivery and high-quality results.</p>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}