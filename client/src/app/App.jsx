import { BrowserRouter as Router } from "react-router-dom"
import ModalProvider from "./Provider/ModalProvider"
import RouterProvider from "./Provider/RouterProvider"

function App() {
  return (
    <Router>

      <RouterProvider />

      <ModalProvider />

    </Router>
  )
}

export default App
