
interface ImportMetaEnv {
    readonly VITE_SERVER_PORT: string;
    readonly PROD: boolean;
}


interface ImportMeta {
    readonly env: ImportMetaEnv;
}
