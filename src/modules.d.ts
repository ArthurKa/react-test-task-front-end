declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_NODE_ENV: 'development' | 'production';
    PORT: string;
    REACT_APP_GRAPHQL_API_URL: string;
  }
}
