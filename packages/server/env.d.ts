declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: string;
      WS_PORT: string;
      WS_PATH: string;
      APP_NAME: string;
      APP_BASE_URL: string;
      APP_LOCALE: string;
      PROJECT_DIR: string;
      MULTI_DEVICE_LOGIN: string;
      LOGGER_LEVEL: string;
      LOGGER_MAX_FILES: string;
    }
  }
}

export {}
