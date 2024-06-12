import { Ban } from "lucide-react"
import Alert from "./components/ui/Alert"


function App() {

  return (
    <>
     <Alert title="Header 1" icon={<Ban size={20}/>} type="alert-danger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda aliquam consequatur cum inventore temporibus reiciendis, enim excepturi neque dolor?"/>
    </>
  )
}

export default App
