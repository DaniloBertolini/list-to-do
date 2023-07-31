import { ADD_TASK, DETAIL_TASK, EDIT_TASK, REMOVE_TASK } from "../action";
import { TypeAction, TypeActionEdit, TypeActionRemove } from "../../types";

const INITIAL_STATE = {
  tasks: [
    {
      task: '',
      id: '',
      startDate: '',
      finalDate: '',
      description: '',
    },
  ],
  details: '',
}

const reducer = (state = INITIAL_STATE, action: TypeAction) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          task: payload.task,
          id: payload.id,
          startDate: payload.startDate,
          finalDate: payload.finalDate,
          description: payload.description,
        }]
      }

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: TypeActionRemove) => task.id !== payload.id)
      }

    case DETAIL_TASK:
			return {
				...state,
				details: payload.task,
			}

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: TypeActionEdit) => {
          if (task.id === payload.id) {
            return {
              ...task,
              task: payload.task,
              startDate: payload.startDate,
              finalDate: payload.finalDate,
              description: payload.description,
            }
          } else {
            return task;
          }
        })
      }

    default:
      return state;
  }
};

export default reducer;