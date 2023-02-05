import MainForm from "./components/MainForm"
import SideBar from "./components/SideBar"

function App() {
  return (
    <main className={`bg-blue-100 min-h-screen flex`}>
      <div className={`bg-white max-w-max m-auto grid grid-flow-col rounded-xl`}>
        <SideBar />
        <MainForm />
      </div>
    </main>
  )
}

export default App
