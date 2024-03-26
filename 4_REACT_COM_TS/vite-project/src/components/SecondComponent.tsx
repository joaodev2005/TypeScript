
type Props = {
    name: string
}

const SecondComponent = (props: Props) => {
    return (
        <div>
            <p>Segundo Componente</p>
            <p>{props.name}</p>
        </div>
    )
}

export default SecondComponent