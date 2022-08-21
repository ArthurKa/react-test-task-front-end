declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    GRAPHQL_API_URL: string;
  }
}
