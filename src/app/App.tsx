import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorization } from "../pages/Authorization"
import { Registartion } from "../pages/Registration"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/registration" element={<Registartion />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
