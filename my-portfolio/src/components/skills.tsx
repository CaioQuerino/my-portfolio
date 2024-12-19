import styles from './Skills.module.css';

export function Skills() {
  return (
    <>
      <section id="projects" className={styles['skills-section']}>
        <h2>Minhas Skills Em Back-End</h2>
        <div className={styles['skills-grid']}>
      
          {/* Banco de Dados */}
          <div className={styles.skill}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5732/5732837.png"
              alt="Banco de Dados"
            />
            <p>Banco de Dados</p>
          </div>
          {/* PHP */}
          <div className={styles.skill}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
            />
            <p>PHP</p>
          </div>
          {/* MySQL */}
          <div className={styles.skill}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
            />
            <p>MySQL</p>
          </div>
          {/* PostgreSQL */}
          <div className={styles.skill}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
            />
            <p>PostgreSQL</p>
          </div>
          {/* SQL */}
          <div className={styles.skill}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="SQL"
            />
            <p>SQL</p>
          </div>
          {/* API */}
          <div className={styles.skill}>
            <img
              src="https://www.svgrepo.com/show/88703/api.svg"
              alt="API"
            />
            <p>API</p>
          </div>
          {/* Git */}
          <div className={styles.skill}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <p>Git</p>
          </div>
        </div>
      </section>
      
      <section id="projects" className={styles['skills-section']}>
  <h2>Minhas Skills Em Front-End</h2>
  <div className={styles['skills-grid']}>

    {/* HTML */}
    <div className={styles.skill}>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML"
      />
      <p>HTML</p>
    </div>

    {/* CSS */}
    <div className={styles.skill}>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS"
      />
      <p>CSS</p>
    </div>

    {/* JavaScript */}
    <div className={styles.skill}>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
      />
      <p>JavaScript</p>
    </div>

    {/* React */}
    <div className={styles.skill}>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
      />
      <p>React</p>
    </div>

    {/* TypeScript */}
    <div className={styles.skill}>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
      />
      <p>TypeScript</p>
    </div>

    {/* CSS Modules */}
    <div className={styles.skill}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
        alt="CSS Modules"
      />
      <p>CSS Modules</p>
    </div>

    {/* JSON */}
    <div className={styles.skill}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/136/136525.png"
        alt="JSON"
      />
      <p>JSON</p>
    </div>

  </div>
</section>

    </>
  );
}
