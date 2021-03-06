import { Task } from "./entities/Task";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Task, User],
  dbName: 'management',
  user: 'nick',
  password: '',
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
