export type StyleOption = 'tailwind' | 'css';
export type RouterOption = 'react-router' | 'tanstack-router';
export type IconOption = 'react-icons' | 'font-awesome';

export interface Answers {
    projectName: string;
    style: StyleOption;
    router: RouterOption;
    reactQuery: boolean;
    shadcn: boolean;
    icons: IconOption;
}