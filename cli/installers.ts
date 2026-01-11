import { fontAwesomeIconsInstaller, reactIconsInstaller, reactQueryInstaller, reactRouterInstaller, shadcnInstaller, tailwindInstaller } from './packages.js';
import { Answers } from './types.js';

export function collectDependencies(answers: Answers) {
    const dependency = new Set<string>();
    const devDependency = new Set<string>();
    const cmd: string[] = [];

    // React Query
    if (answers.reactQuery) {
        reactQueryInstaller.dependency.forEach(d => dependency.add(d));
        reactQueryInstaller.devDependency.forEach(d => devDependency.add(d));
    }

    // Routers
    if (answers.router === 'react-router') {
        reactRouterInstaller.dependency.forEach(d => dependency.add(d));
        reactRouterInstaller.devDependency?.forEach(d => devDependency.add(d));
    }

    // Icons
    if (answers.icons === 'react-icons') {
        reactIconsInstaller.dependency.forEach(d => dependency.add(d));
        reactIconsInstaller.devDependency?.forEach(d => devDependency.add(d));
    }

    if (answers.icons === 'font-awesome') {
        fontAwesomeIconsInstaller.dependency.forEach(d => dependency.add(d));
        fontAwesomeIconsInstaller.devDependency?.forEach(d => devDependency.add(d));
    }

    // Styles
    if (answers.style === 'tailwind') {
        tailwindInstaller.dependency.forEach(d => dependency.add(d));
        tailwindInstaller.devDependency?.forEach(d => devDependency.add(d));
    }

    if (answers.shadcn && answers.style === 'tailwind') {
        cmd.push(...shadcnInstaller.cmd);
    }

    return {
        dependency: Array.from(dependency),
        devDependency: Array.from(devDependency),
        cmd
    };
}
