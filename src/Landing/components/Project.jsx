import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const Project = ({ project, language = "en" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full max-w-md border border-zinc-800 bg-black rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image First - Full Width Hero */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 p-2`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <CardTitle className="text-2xl font-semibold text-zinc-100 mb-2 leading-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </CardDescription>
        </div>

        {/* All Tech Stack - Expandable */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, index) => (
              <Badge
                key={index}
                className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs hover:bg-zinc-800 hover:text-zinc-300 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {project.demo && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.demo, "_blank")}
              className="flex-1 gap-2 border-zinc-700 text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
          )}
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.github, "_blank")}
              className="flex-1 gap-2 border-zinc-700 text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              {language === "es" ? "Código" : "Code"}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Project;
