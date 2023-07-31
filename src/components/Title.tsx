import { TypeTitle } from "../types";
import styles from './title.module.css';

function Title({title}: TypeTitle) {
  return (
    <h1 className={ styles.title }>
      {title}
    </h1>
  )
}

export default Title;