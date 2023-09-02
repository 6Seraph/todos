import { observer } from 'mobx-react-lite';
import todoStore from '../../store';
import classes from './style.module.scss';

function TodoCount() {
  return (
    <span className={classes.count}>
      {
        todoStore.loading ? '⌛' : todoStore.list.length
      }
    </span>
  );
}

export default observer(TodoCount);
