interface ProjectCardProps {
  project: { title: string; description: string; stack: string[] };
}
export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="border border-gray-700 p-4 rounded-lg">
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-gray-400">{project.description}</p>
    <div className="mt-2 text-sm text-gray-500">{project.stack.join(", ")}</div>
  </div>
);