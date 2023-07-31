import { Route, Routes } from "react-router-dom"
import Lista from "./pages/List"
import Details from "./pages/Details"
import Edit from "./pages/Edit"

function App() {
  return (
    <Routes>
      <Route path="/list-to-do" element={ <Lista />} />
      <Route path="/list-to-do/details" element={ <Details />} />
      <Route path="/list-to-do/details/edit" element={ <Edit />} />
    </Routes>
  )
}

export default App
