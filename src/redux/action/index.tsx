import { TypeActionEdit, TypeDetails, TypeNewTask } from '../../types'

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const DETAIL_TASK = 'DETAIL_TASK'
export const EDIT_TASK = 'EDIT_TASK'

export const addTaskAction = (task: TypeNewTask, id: string) => ({
  type: ADD_TASK,
  payload: {
    task: task.task,
    startDate: task.startDate,
    finalDate: task.finalDate,
    description: task.description,
    id,
  }
})

export const removeTaskAction = (id: string) => ({
  type: REMOVE_TASK,
  payload: {
    id,
  }
})

export const detailTaskAction = (task: TypeDetails) => ({
  type: DETAIL_TASK,
  payload: {
    task,
  }
})

export const editTaskAction = (task: TypeActionEdit) => ({
  type: EDIT_TASK,
  payload: {
    ...task,
  }
})