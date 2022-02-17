/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_PORT: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
