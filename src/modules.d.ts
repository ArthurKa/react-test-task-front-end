declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    REACT_APP_GRAPHQL_API_URL: string;
  }
}
