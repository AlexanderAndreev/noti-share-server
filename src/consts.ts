const get = (name: string, required = false): string => {
  const value = process.env[name];
  if (!value && required) throw new Error(`${name} enviroment variable is required`);
  return value!;
};

export const PORT = +get('PORT') || 8000;
