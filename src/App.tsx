import { Button } from "./components/ui/button"

function App() {

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-lvh">
      <p className="text-5xl">Tailwind CSS Implemented</p>
      <p>Time to implement <span className="text-gray-500 uppercase font-semibold">Shadcn</span></p>
      <Button className="">My First Shadcn Button</Button>
    </div>
  )
}

export default App
