export type allType = {
  task: string,
  id: string,
  startDate: string,
  finalDate: string,
  description: string,
}

export type RootState = {
  tasks: [allType],
  details: allType,
}

export type TypeAction = {
	type: string,
	payload: allType
}

export type TypeActionDetails = {
	type: string,
	payload: {
    task: allType,
  }
}

export type TypeActionRemove = allType

export type TypeActionEdit = allType

export type TypeDetails = allType
  
export type TypeNewTask = {
  task: string;
  id: string;
  startDate: string,
  finalDate: string,
  description: string;
};

export type TypeTitle = {
  title: string;
}