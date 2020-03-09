const get = (name: string, required = false): string => {
  const value = process.env[name];
  if (!value && required) throw new Error(`${name} enviroment variable is required`);
  return value!;
};

export const NODE_ENV = get('NODE_ENV') || 'development';

export const IS_DEV = NODE_ENV !== 'production';

export const PORT = +get('PORT') || 8000;

export const API_URL = get('API_URL') || `localhost:${PORT}`;

export const MONGO_URL = get('MONGO_URL', true);
