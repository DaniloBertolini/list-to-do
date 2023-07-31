import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from '../../types'
import Title from "../../components/Title";

function Details() {
  const navigate = useNavigate();
  const { task, description, finalDate, startDate } = useSelector((state: RootState) => state.details)

  return (
    <div>
      <Title title='Detalhes' />
      <p>{ task }</p>
      <p>{ startDate }</p>
      <p>{ finalDate ? finalDate : 'Sem data final' }</p>
      <p>{ description ? description : 'Sem descrição' }</p>
      <button onClick={ () => navigate('/list-to-do')}>Voltar</button>
      <button onClick={ () => navigate('/list-to-do/details/edit')}>Editar</button>
    </div>
  )
}

export default Details