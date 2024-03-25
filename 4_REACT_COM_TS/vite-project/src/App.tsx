
import './App.css'

function App() {

  // 1 - variaveis

  const name: string = 'Joaquim'
  const age: number = 23
  const isWorking: boolean = true

  // 2 - Funcoes

  const useGreeting = (name: string): string => {
    return `Ola ${name}`
  }

  return (
    <>
      <div className="App">
        <h1>TS com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Esta trabalhando: {isWorking ? 'Sim' : 'Nao'}</p>

        <h3>{useGreeting(name)}</h3>
      </div>
    </>
  )
}

export default App
