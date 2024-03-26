import { useState } from "react"

const State = () => {

    const [state, setState] = useState('Teste')
    const [text, setText] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <div>
                <h1>{state}</h1>
                <button onClick={() => setState('Teste 2')}>Mudar state</button>
                <button onClick={() => setState('Teste')}>voltar state</button>
            </div>
            <div>
                <h1>{text}</h1>
                <input type="text" onChange={handleChange} placeholder="digite" />
            </div>
        </div>
    )
}

export default State