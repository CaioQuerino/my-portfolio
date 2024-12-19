import styles from './Footer.module.css'

import { OptionalProps } from '../../ts.config.tsx'

export function Footer({ author, occupation }: OptionalProps ) {
    return (
      <footer className={styles.rodape}>
        <p>Created by {author} - {occupation}</p>
        <small>© 2024 All rights reserved.</small>
      </footer>
    );
  }
  