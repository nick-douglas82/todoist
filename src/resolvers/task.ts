import { Resolver, Query, Ctx, Arg, Mutation } from "type-graphql";
import { MyContext } from './../types';
import { Task } from './../entities/Task';

@Resolver()
export class TaskResolver {
  @Query(() => [Task])
  tasks(@Ctx() { em }: MyContext): Promise<Task[]> {
    return em.find(Task, {});
  }

  @Query(() => Task, { nullable: true })
  task(
    @Arg('id') id: number,
    @Ctx() { em }: MyContext
  ): Promise<Task | null> {
    return em.findOne(Task, { id });
  }

  @Mutation(() => Task)
  async createTask(
    @Arg('title') title: string,
    @Ctx() { em }: MyContext
  ): Promise<Task> {
    const task = em.create(Task, { title });
    await em.persistAndFlush(task);
    return task;
  }

  @Mutation(() => Task, { nullable: true })
  async updateTask(
    @Arg('id') id: number,
    @Arg('title') title: string,
    @Ctx() { em }: MyContext
  ): Promise<Task | null> {
    const task = await em.findOne(Task, { id });
    if (!task) {
      return null;
    }
    if (typeof title !== 'undefined') {
      task.title = title;
      await em.persistAndFlush(task);
    }
    return task;
  }

  @Mutation(() => Boolean)
  async deleteTask(
    @Arg('id') id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(Task, { id });
    return true;
  }
}
