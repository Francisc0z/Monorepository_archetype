import './App.css'

function App() {
  
  return (
    <button onClick={ async() => {
      const response = await fetch('/api')
      const data = await response.json();
      console.log(data)
    }}>
      Boton peticion
    </button>
  )
}

export default App
