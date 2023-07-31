import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState, TypeNewTask } from "../../types"
import Title from "../../components/Title"
import { newTask } from "../../utils"
import { ChangeEvent, useEffect, useState } from "react"
import { detailTaskAction, editTaskAction } from "../../redux/action"

function Edit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [task, setTask] = useState<TypeNewTask>(newTask);
  const rootStateDetails = useSelector((state: RootState) => state.details)

  useEffect(() => {
    setTask(rootStateDetails)
  }, [rootStateDetails])

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

  const applyModifications = () => {
    dispatch(detailTaskAction(task))
    dispatch(editTaskAction(task))

    navigate('/list-to-do/details')
  }

  return (
    <>
      <div>
        <Title title='Edição' />
      </ div>
      <div>

        <label htmlFor="task">Tarefa:
          <input
          type="text"
          id="task"
          value={ task.task }
          onChange={ (event) => handleChange(event) }
          />
        </label>
        <label>Início:
        <input
        type="date"
        id='startDate'
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
      <textarea
        cols={ 30 }
        rows={ 10 }
        id="description"
        value={ task.description }
        onChange={ (event) => handleChangeHandler(event) }
        />

        <button onClick={ applyModifications }>Aplicar</button>
      </div>
    </>
  )
}

export default Edit