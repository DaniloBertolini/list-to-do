import { Route, Routes } from "react-router-dom"
import Lista from "./pages/List"
import Details from "./pages/Details"
import Edit from "./pages/Edit"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Lista />} />
      <Route path="/details" element={ <Details />} />
      <Route path="/details/edit" element={ <Edit />} />
    </Routes>
  )
}

export default App
