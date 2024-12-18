interface typesProps {
    author:string;
    description: string;
    occupation: string
}

export type OptionalProps = Partial<typesProps>;


export const bio = [
  {
    author: 'Caio Querino',
    description: 'Sou um Desenvolvedor Front-End em início de carreira, com base sólida em HTML5, CSS3, JavaScript, PHP e foco atual em TypeScript e React. Tenho experiência na criação de interfaces responsivas e interativas, além de utilizar Figma para design de UI/UX e Git/GitHub para controle de versão. Meu objetivo é evoluir para Desenvolvedor Full Cycle, expandindo meus conhecimentos para entregar soluções ainda mais completas. No momento, estou interessado em atuar como Desenvolvedor Back-End para ampliar minha experiência e habilidades.',
    occupation: 'Dev. Back-End'
  },
]