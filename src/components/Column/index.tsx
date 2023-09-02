import { useEffect } from 'react';
import { getMoreTodos } from '../../store';
import ButtonAdd from '../ButtonAdd';
import TodoCount from '../TodoCount';
import TodosList from '../TodoList';
import classes from './style.module.scss';

function Column({ day = 'Today' }: { day?: string }) {
  useEffect(() => { getMoreTodos() }, []);
  return (
    <section className={classes.column}>
      <header>
        <h5>{day}</h5>
        <ButtonAdd />
        <TodoCount />
      </header>
      <TodosList />
    </section>
  );
}

export default Column;
