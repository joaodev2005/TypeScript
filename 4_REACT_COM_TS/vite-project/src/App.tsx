import FirstComponents from './components/FirstComponents'
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
import State from './components/State'

import './App.css'

type textOrNull = string | null

function App() {

  // 1 - variaveis

  const name: string = 'Joaquim'
  const age: number = 23
  const isWorking: boolean = true

  // 2 - Funcoes

  const useGreeting = (name: string): string => {
    return `Ola ${name}`
  }

  // 3 - Tipos

  const myName: textOrNull = 'Joaquim'
  let m: textOrNull = null

  m = 'opa'

  return (
    <>
      <div className="App">
        <h1>TS com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Esta trabalhando: {isWorking ? 'Sim' : 'Nao'}</p>

        <h3>{useGreeting(name)}</h3>

        <FirstComponents />

        <SecondComponent name="Paulo Guina" />

        <Destructuring
          title="Desestruturando"
          content="Conteudo"
          commentsQty={10}
          tags={['Node', 'React', 'JavaScript', 'TypeScript', 'Next.js', 'Vite']}
          category={Category.TS}
        />

        <State />

        {m && <p>Tem conteudo</p>}
        {myName && <p>Tem conteudo</p>}

      </div>
    </>
  )
}

export default App
