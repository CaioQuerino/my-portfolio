import styles from './Contacts.module.css';

export function Contacts() {
  return (
    <section id="redes" className={styles['rede-section']}>
      <h2>Contatos</h2>
      <div className={styles['rede-grid']}>

        {/* LinkedIn */}
        <div className={styles.rede}>
          <a href="https://www.linkedin.com/in/caio-querino-1257622a5/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
            <p>LinkedIn</p>
          </a>
        </div>

        {/* GitHub */}
        <div className={styles.rede}>
          <a href="https://github.com/CaioQuerino/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <p>GitHub</p>
          </a>
        </div>

        {/* Gmail */}
        <div className={styles.rede}>
          <a href="mailto:caioquerino@souunisuam.com.br" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
            />
            <p>Gmail</p>
          </a>
        </div>

        {/* WhatsApp */}
        <div className={styles.rede}>
          <a href="https://wa.me/5521995037431" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
            <p>WhatsApp</p>
          </a>
        </div>

      </div>
    </section>
  );
}
