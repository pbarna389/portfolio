export interface IOptions {
  threshold: number;
}

export interface IProjectContext {
  projects: IProjects[],
  modalStates: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  projectSelector: [IProjects | null, React.Dispatch<React.SetStateAction<IProjects | null>>],
  fadeoutState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

interface ProviderProps {
  children: React.ReactNode
}

interface IProjects {
    readonly id: number,
    name: string,
    desc: string,
    finished: boolean,
    pics: string[] | null;
};

interface IntroTextProps {
    header: string,
    text: string,
};

interface ProjectCardProps {
    name: string,
    finished: boolean,
}

interface SkillCardProps {
  skill: string;
};

interface ContactFormParams {
    message: string
}