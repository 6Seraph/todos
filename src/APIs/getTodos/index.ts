import axios from 'axios';
import ITodoResponse from './responseSchema';

async function getTodos(page?: number) {
  const response = await axios.get<ITodoResponse[]>(
    `https://jsonplaceholder.typicode.com/todos?${page ? `_page=${page}` : ''}`
  );
  return response;
}

export default getTodos;
export type { ITodoResponse };
