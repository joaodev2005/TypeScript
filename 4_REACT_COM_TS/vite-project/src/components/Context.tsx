import { useContext } from "react"

import { appContext } from "../App"

const Context = () => {

    const contextValue = useContext(appContext)

    return (
        <>
            {contextValue && (
                <div>
                    <h2>Linguagem: {contextValue.language}</h2>
                    <h2>Framework: {contextValue.framework}</h2>
                    <p>QTD: {contextValue.projects}</p>
                </div>
            )}
        </>
    )
}

export default Context