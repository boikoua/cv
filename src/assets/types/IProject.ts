export interface IProject {
  id: number;
  preview: string;
  title: string;
  describe: string;
  stack: string[];
  links: {
    demo: string;
    github: string;
  };
}
