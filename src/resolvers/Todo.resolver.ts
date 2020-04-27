import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Todo from '../models/Todo.model';

@Resolver(Todo)
export default class TodoResolver {
  @Query(() => [ Todo ])
  todos() {
    return Todo.find();
  }

  @Mutation(() => Todo)
  async addTodo(@Arg('title') title: string) {
    const todo = Todo.create({ title });
    await todo.save();
    return todo;
  }
}
