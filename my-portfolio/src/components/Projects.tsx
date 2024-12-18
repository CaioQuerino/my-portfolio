import styles from './Projects.module.css';

export function Projects() {
  const projects = [
    {
      title: 'Marketplace',
      description: 'Uma aplicação para organizar e gerenciar suas tarefas diárias.',
      techStack: ['PHP', 'SQL', 'CSS', 'JavaScript'],
      link: 'https://github.com/CaioQuerino/Visual_Tech',
    },

    {
      title: 'Portfolio Pessoal',
      description: 'Meu portfólio para exibir habilidades e projetos.',
      techStack: ['REACT', 'CSS Module', 'JavaScript'],
      link: 'https://github.com/CaioQuerino/my-portfolio',
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h1>Meus Projetos</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
