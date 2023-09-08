declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_WEBAPP_URL: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    
    NEXT_PUBLIC_ALLOW_SIGNUP?: string;
    NEXT_PUBLIC_ALLOW_SUBSCRIPTIONS?: string;
  }
}
