import { ITodo } from '../../store';
import avatar from '../../assets/images/mock.png';
import classes from './style.module.scss';

function Todo({ id, completed, title, description, dates, tags }: ITodo) {
  const dateFormat = new Intl.DateTimeFormat(
    'en-US',
    {
      day: '2-digit',
      hour: '2-digit',
      month: 'short',
      hourCycle: 'h12'
    }
  )

  return (
    <li key={id} className={classes.wrapper}>
      <div className={classes.todo}>
        <label htmlFor={id} className={classes.header}>
          <input type="checkbox" id={id} checked={completed} />
          <h6>
            {title}
          </h6>
        </label>
        <div className={classes.dates}>
          {dates.map((time, i) =>
            <time key={i}>
              {dateFormat.format(time)}
            </time>
          )}
        </div>
        <p>
          {description}
        </p>
        <ul>
          {tags.map((tag, i) => <li key={i}>{tag}</li>)}
        </ul>
        <img src={avatar} />
      </div>
    </li>
  )
}

export default Todo;
