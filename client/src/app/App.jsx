import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import { MantineProvider } from "@mantine/core"
import GeneralPage from "../page/GeneralPage/GeneralPage"

function App() {
  return (
    <MantineProvider defaultColorScheme="">
      <GeneralPage />
    </MantineProvider>
  )
}

export default App
