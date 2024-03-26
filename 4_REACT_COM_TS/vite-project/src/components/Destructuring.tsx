type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>Coments: {commentsQty}</p>
            <div>
                {tags.map((tag) => (
                    <p>#{tag}</p>
                ))} 
            </div>
        </div>
    )
}

export default Destructuring