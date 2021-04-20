import { Task } from "./entities/Task";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Task],
  dbName: 'todoist',
  user: 'root',
  password: '',
  type: 'mysql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
