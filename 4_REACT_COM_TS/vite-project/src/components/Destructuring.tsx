type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    category: Category
}

export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript'
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
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

            <h4>Category: {category}</h4>
        </div>
    )
}

export default Destructuring