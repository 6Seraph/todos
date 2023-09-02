import { observable, runInAction } from 'mobx';
import getTodos, { ITodoResponse } from '../APIs/getTodos';
import { faker } from '@faker-js/faker';

interface ITodo extends Omit<ITodoResponse, 'userId'> {
  readonly dates: [Date, Date];
  readonly description: string;
  readonly tags: [string, string];
}

interface ITodoStore {
  loading: boolean;
  error: boolean;
  list: ITodo[];
  page: number;
}

const todoStore = observable<ITodoStore>({
  loading: true,
  error: false,
  list: [],
  page: 1,
});

async function getMoreTodos () {
  runInAction(() => (todoStore.loading = true));
  try {
    const { data } = await getTodos(todoStore.page);
    const filledWithFakes: ITodo[] = data.map(({ id, completed, title }) => ({
      id,
      title,
      completed,
      dates: [faker.date.past(), faker.date.past()],
      description: faker.lorem.paragraph(),
      tags: [faker.lorem.word(), faker.lorem.word()],
    }));
    runInAction(() => {
      todoStore.list = [...todoStore.list, ...filledWithFakes];
      todoStore.page += 1;
    });
  } catch {
    runInAction(() => (todoStore.error = true));
  }
  runInAction(() => (todoStore.loading = false));
}

export { todoStore as default, getMoreTodos };
export type { ITodo };
