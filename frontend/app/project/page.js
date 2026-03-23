import Link from "next/link";

export default function ProjectPage() {
  const projects = [
    { id: 1, name: "My Website" },
    { id: 2, name: "Mobile App" },
    { id: 3, name: "Dashboard" },
  ];

  return (
    <>
      <div>
        <h1>All Projects</h1>
        {projects.map((project) => (
          <Link href={`project/${project.id}`} key={project.id}>
            <div>{project.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
