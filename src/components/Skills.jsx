export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Unity",
    "C#",
    "Python",
    "AI/ML",
  ];

  return (
    <section id="skills" className="py-20 bg-light text-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="skill-badge px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium cursor-pointer hover:bg-primary hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
