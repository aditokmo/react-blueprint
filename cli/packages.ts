// React Query
export const reactQueryInstaller = {
    dependency: ['@tanstack/react-query'],
    devDependency: ['@tanstack/react-query-devtools']
};

// Styles
export const tailwindInstaller = {
    dependency: ['tailwindcss', '@tailwindcss/vite'],
    devDependency: [],
};

// Icons
export const reactIconsInstaller = {
    dependency: ['react-icons'],
    devDependency: [],
}

export const fontAwesomeIconsInstaller = {
    dependency: ['@fortawesome/fontawesome-svg-core', '@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-brands-svg-icons'],
    devDependency: [],
}

// UI Libs
export const shadcnInstaller = {
    cmd: ['pnpm dlx shadcn@latest init']
};

// Routers
export const reactRouterInstaller = {
    dependency: ['react-router', 'react-router-dom'],
    devDependency: []
};
