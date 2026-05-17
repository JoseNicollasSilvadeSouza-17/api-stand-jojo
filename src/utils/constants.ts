const PORT: number = Number(process.env.PORT) || 3000;

const DB_URL: string = String(process.env.DB_URL);

const PUBLIC_KEY: string = String(process.env.PUBLIC_KEY);

export {
  PORT,
  DB_URL,
  PUBLIC_KEY
};