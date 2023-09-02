import { observer } from 'mobx-react-lite';
import todoStore from '../../store';
import classes from './style.module.scss';

function ButtonNumber() {
  return (<button className={classes.button}>
    {
      todoStore.loading ? '⌛' : todoStore.list.length
    }
  </button>);
}

export default observer(ButtonNumber);
