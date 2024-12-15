import styles from './Habilidades.module.css';

export function Habilidades() {
  return (
    <section id="projects" className={styles['skills-section']}>
      <h2>Minhas Skills Em Back-End</h2>
      <div className={styles['skills-grid']}>
        {/* MySQL */}
        <div className={styles.skill}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
          />
          <p>MySQL</p>
        </div>
        {/* SQL */}
        <div className={styles.skill}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
            alt="SQL"
          />
          <p>SQL</p>
        </div>
        {/* PostgreSQL */}
        <div className={styles.skill}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
          />
          <p>PostgreSQL</p>
        </div>
        {/* PHP */}
        <div className={styles.skill}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            alt="PHP"
          />
          <p>PHP</p>
        </div>
        {/* API */}
        <div className={styles.skill}>
          <img
    src="https://static.vecteezy.com/system/resources/previews/008/679/477/original/api-line-two-color-icon-vector.jpg"
    alt="API"
          />
          <p>API</p>
        </div>
      </div>
    </section>
  );
}
