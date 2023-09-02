import { observer } from 'mobx-react-lite';
import todoStore, { getMoreTodos } from '../../store';
import Todo from '../Todo';
import classes from './style.module.scss'
import { useRef } from 'react';

function scrollHandler(element: HTMLUListElement) {
  if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
    getMoreTodos();
  }
}

function TodoList() {
  const list = useRef<HTMLUListElement>(null);
  if (!todoStore.loading || todoStore.list.length > 0) return (
    <ul
      onScroll={() => scrollHandler(list.current as HTMLUListElement)}
      className={classes.todosList}
      ref={list}
    >
      {
        todoStore
          .list
          .map(todo => <Todo {...todo} key={todo.id} />)
      }
    </ul>
  )
  return null;
}

export default observer(TodoList)
