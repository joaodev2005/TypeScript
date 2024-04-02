import { createContext } from 'react'

import FirstComponents from './components/FirstComponents'
import SecondComponent from './components/SecondComponent'
import Destructuring, { Category } from './components/Destructuring'
import State from './components/State'
import Context from './components/Context'

import './App.css'

type textOrNull = string | null

interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const appContext = createContext<IAppContext | null>(null)

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

  // 9 - context

  const contextValue: IAppContext = {
    language: 'TypeScript',
    framework: 'React',
    projects: 5,
  };

  return (
    <>
      <appContext.Provider value={contextValue}>

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

          <Context />

        </div>

      </appContext.Provider>
    </>
  )
}

export default App
