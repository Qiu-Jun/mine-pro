
// generate by ./scripts/generateEnvTypes.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: '7001';
      WS_PORT: '7002';
      WS_PATH: '/ws-api';
      APP_NAME: 'Nest June';
      APP_BASE_URL: 'http://localhost:${SERVER_PORT}';
      APP_LOCALE: 'zh-CN';
      PROJECT_DIR: '/admin-server';
      MULTI_DEVICE_LOGIN: 'true';
      LOGGER_LEVEL: 'debug';
      LOGGER_MAX_FILES: '31';
      JWT_SECRET: 'admin123456';
      JWT_EXPIRE: '86400';
      REFRESH_TOKEN_SECRET: 'admin123456';
      REFRESH_TOKEN_EXPIRE: '2592000';
      SWAGGER_ENABLE: 'true';
      SWAGGER_PATH: 'api-docs';
      SWAGGER_VERSION: '1.0';
      DB_HOST: '127.0.0.1';
      DB_PORT: '3306';
      DB_DATABASE: 'admin_server';
      DB_USERNAME: 'june';
      DB_PASSWORD: '123456';
      DB_ROOT_PASSWORD: 'root';
      DB_SYNCHRONIZE: 'true';
      DB_LOGGING: '["error"]';
      REDIS_PORT: '6379';
      REDIS_HOST: '127.0.0.1';
      REDIS_PASSWORD: '123456';
      REDIS_DB: '0';
      SMTP_HOST: 'smtp.163.com';
      SMTP_PORT: '465';
      SMTP_USER: 'admin_server@163.com';
      SMTP_PASS: 'VIPLLOIPMETTROYU';
    }
  }
}
export {};
  