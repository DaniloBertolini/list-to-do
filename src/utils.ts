const today = new Date(Date.now());
const transformDate = today.toLocaleDateString()

export const dateAtt = transformDate.split('/').reverse().join('-')

export const newTask = {
  task: '',
  startDate: dateAtt,
  id: '',
  finalDate: '',
  description: '',
}
