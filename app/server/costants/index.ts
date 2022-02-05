const DEV_PATH = './../../../../../dist/client/';
const PROD_PATH = './../../../dist/client/';
const DOCS_PATH = import.meta.env.PROD ? PROD_PATH : DEV_PATH;

export { DOCS_PATH };
