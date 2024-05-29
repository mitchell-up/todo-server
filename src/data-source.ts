import { DataSource } from "typeorm";
import { Todo } from "./entities/Todo";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "todo_db",
  synchronize: true,
  logging: false,
  entities: [Todo],
});
