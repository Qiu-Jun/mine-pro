export const devMode = 'development';

export const prodMode = 'production';

export const isDevMode = import.meta.env.DEV;

export const isProdMode = import.meta.env.PROD;

const env = import.meta.env as ImportMetaEnv

export const globalEnv = {
    env: env.DEV,
    title: env.VITE_APP_TITLE,
    baseUrl: env.VITE_BASE_URL,
    apiPrefix: env.VITE_BASE_API_URL,
}
