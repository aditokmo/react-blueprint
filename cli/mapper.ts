import { fontAwesomeIconsInstaller, phosphorIconsInstaller, reactFormHookInstaller, reactHotToastInstaller, reactIconsInstaller, reactQueryInstaller, reactRouterInstaller, reactToastifyInstaller, scssInstaller, sonnerInstaller, tailwindInstaller, tanstackFormInstaller, tanstackRouterInstaller, yupInstaller, zodInstaller, zustandInstaller } from './packages.js';
import { PackageInstaller } from './types.js';

export const installers: Record<string, PackageInstaller> = {
    'reactQuery': reactQueryInstaller,
    'zustand': zustandInstaller,
    'react-router': reactRouterInstaller,
    'tanstack-router': tanstackRouterInstaller,
    'tailwind': tailwindInstaller,
    'scss': scssInstaller,
    'react-icons': reactIconsInstaller,
    'font-awesome': fontAwesomeIconsInstaller,
    'phosphor-icons': phosphorIconsInstaller,
    'react-hot-toast': reactHotToastInstaller,
    'react-toastify': reactToastifyInstaller,
    'sonner': sonnerInstaller,
    'react-hook-form': reactFormHookInstaller,
    'tanstack-form': tanstackFormInstaller,
    'zod': zodInstaller,
    'yup': yupInstaller,
}

export const FONT_QUERIES: Record<string, string> = {
    "geist": "family=Geist:wght@100..900",
    "inter": "family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
    "lato": "family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900",
    "montserrat": "family=Montserrat:ital,wght@0,100..900;1,100..900",
    "open-sans": "family=Open+Sans:ital,wght@0,300..800;1,300..800",
    "poppins": "family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
    "roboto": "family=Roboto:ital,wght@0,100..900;1,100..900"
};