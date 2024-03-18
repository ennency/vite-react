import styles from './Todo.module.scss';
export type TodoProps = {
    text:string;
}
export const Todo = ({text}:TodoProps) => {
  return (
    <div  className={styles.prova}>{text}</div>
  )
}
