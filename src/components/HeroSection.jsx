import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className=" relative min-h-screen flex flex-col items-center justify-center px-4">
     <div className="container max-w-4xl mx-auto text-center z-10">
       <div className="space-y-6">
         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-50 animate-fade-out"> Hi, I`m</span>
          <span className="text-primary">{" "} Sunny</span>
          <span className="text-gradient ml-2">{" "}Singh</span>
         </h1>

         <p className="text-lg md:text-xl text-muted-foreground max-2-2xl">
          I create stellar web experiences with modern technologies.
          Specializing in frontend development, I build interfaces that
          are both beautiful and functional.
         </p>
         
         <div>
          <a href="#projects" className="cosmic-botton ">
            View my work
          </a>
         </div>
       </div>
     </div>

     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
       <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
     </div>
    </section>
  );
};
