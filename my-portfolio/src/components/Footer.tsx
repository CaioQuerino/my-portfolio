import  './Footer.module.css'

import {typesProps} from '../../ts.config.tsx'

export function Footer({ author, occupation }: typesProps) {
    return (
      <>
        <p>Created by {author} - {occupation}</p>
        <small>© 2024 All rights reserved.</small>
      </>
    );
  }
  