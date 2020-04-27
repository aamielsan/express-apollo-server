export interface Config {
  port: number;
  typeorm: {
    entities: string[];
    subscribers: string[];
    migrations: string[];
  };
}
