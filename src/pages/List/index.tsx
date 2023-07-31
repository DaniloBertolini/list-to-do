import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction, detailTaskAction, removeTaskAction } from "../../redux/action";
import { RootState, TypeDetails, TypeNewTask } from "../../types";
import { v4 as uuidv4 } from 'uuid';
import { dateAtt, newTask } from "../../utils";
import styles from './list.module.css'

function Lista() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [task, setTask] = useState<TypeNewTask>(newTask);
  const rootStateTasks = useSelector((state: RootState) => state.tasks).filter((task: TypeNewTask) => task.task !== '')
  const rootStateDetails = useSelector((state: RootState) => state.details)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
    })
  }
  const handleChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [event.target.id]: event.target.value,
    })
  }

  const handleClickAdd = () => {
    const id = uuidv4();
    dispatch(addTaskAction(task, id));
    setTask(newTask);
  }

  const detailsPage = (taskLoop: TypeDetails) => {
    if (rootStateDetails.id !== taskLoop.id) {
      dispatch(detailTaskAction(taskLoop))
    }
    navigate('/list-to-do/details')
  }

  return (
    <>
      <Title title='Lista de Tarefas' />
      <main className={ styles.container }>
        
        <div>
          <label htmlFor="task">Tarefa:
            <input
            type="text"
            id="task"
            value={ task.task }
            onChange={ (event) => handleChange(event) }
            />
          </label>
        </div>

        <div>
          <label>Início:
            <input
            type="date"
            id='startDate'
            min={ dateAtt }
            value={ task.startDate }
            onChange={ (event) => handleChange(event) }
            />
          </label>
          <label>Término:
            <input
            type="date"
            id='finalDate'
            value={ task.finalDate }
            onChange={ (event) => handleChange(event) }
            />
          </label>
        </div>

        <div>
          <textarea
          cols={ 30 }
          rows={ 10 }
          id="description"
          value={ task.description }
          onChange={ (event) => handleChangeHandler(event ) }
          />
        </div>

        <button onClick={ handleClickAdd }>Adicionar</button>   
        
        {rootStateTasks.map((taskLoop) => {
          const { id, task } = taskLoop
          return (
            <div key={ task } id={ task }>
              <p>{ task }</p>
              <button onClick={() => dispatch(removeTaskAction(id))}>X</button>
              <button onClick={ () => detailsPage(taskLoop) }>Detalhes</button>
            </div>
          )}
        )}
      </ main>
    </>
  )
}

export default Lista
