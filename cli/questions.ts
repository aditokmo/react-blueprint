import { group, text, select, confirm, isCancel, cancel } from '@clack/prompts';
import { Answers, IconOption, RouterOption, StyleOption } from './types.js';

export async function askQuestions(): Promise<Answers> {
    const results = await group(
        {
            projectName: () => text({
                message: 'Project name:',
                placeholder: 'my-app',
                validate: (value) => (value.length < 0 ? 'Project name is required' : undefined),
            }),

            style: () => select<StyleOption>({
                message: 'Choose styling:',
                options: [
                    { value: 'tailwind', label: 'Tailwind' },
                    { value: 'css', label: 'CSS' },
                ],
            }),

            shadcn: ({ results }) => {
                if (results.style !== 'tailwind') return Promise.resolve(false);
                return confirm({ message: 'Include Shadcn UI?' });
            },

            icons: () => select<IconOption>({
                message: 'Choose icon library:',
                options: [
                    { value: 'react-icons', label: 'React Icons' },
                    { value: 'font-awesome', label: 'Font Awesome' },
                ]
            }),

            router: () => select<RouterOption>({
                message: 'Choose router:',
                options: [
                    { value: 'react-router', label: 'React Router' },
                    { value: 'tanstack-router', label: 'Tanstack Router' },
                ],
            }),

            reactQuery: () => confirm({ message: 'Include React Query?' }),
        },
        {
            onCancel: () => {
                cancel('Operation cancelled.');
                process.exit(0);
            },
        }
    );

    if (isCancel(results.projectName) ||
        isCancel(results.style) ||
        isCancel(results.router) ||
        isCancel(results.shadcn) ||
        isCancel(results.reactQuery)
    ) {
        cancel('Setup cancelled.');
        process.exit(0);
    }

    return {
        ...results,
        shadcn: results.shadcn as boolean,
    };
}