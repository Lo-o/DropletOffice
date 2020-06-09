const credentials = JSON.parse(Deno.readTextFileSync("./credentials.json"));

const dbCreds = {
  user: credentials.user,
  database: credentials.database,
  password: credentials.password,
  hostname: credentials.hostname,
  port: credentials.port,
};

export { dbCreds };
