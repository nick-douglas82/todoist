import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Task } from './entities/Task';
import mircoConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mircoConfig);
  await orm.getMigrator().up();
  const task = orm.em.create(Task, {title: 'This is a test task'});
  await orm.em.persistAndFlush(task);
}

main().catch((err) => {
  console.error(err);
});
