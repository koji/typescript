declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare const graphql: (query: TemplateStringsArray) => void
