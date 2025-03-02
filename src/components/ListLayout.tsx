import { myLists } from "./Data"
import { ItemList } from "./Types";
import { Link } from "react-router";

type ListLayoutProps = {
    type: string
}

function ListLayout({type}: ListLayoutProps) {
    const items = myLists[type].sort((a, b) => b.date.getTime() - a.date.getTime());

    return (
        <div id="main">
            <hr/>
            <header className="major" style={{textAlign: 'left'}}>
                <h1>{type}</h1>
                <hr/>
            </header>
            <section className="post">
                {items.map((post: ItemList, index: number) => (
                    <article key={post.date.toDateString()}>
                        <header>
                            <span className="date">{post.date.toDateString()}</span>
                            <h2><Link to={`/${type}/${post.url}`}>{post.title}</Link></h2>
                        </header>
                        {index < items.length - 1 && <hr />}
                    </article>
                ))}
            </section>
        </div>
    )
}

export default ListLayout;