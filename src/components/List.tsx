import { PostDetails, PostBasic } from "./Types";
import { Link } from "react-router";

type ListProps = {
    items: PostDetails[] | PostBasic[]
};

function List({items}: ListProps) {

    return (
        <section className="posts">
            {items.map((post, index: number) => (
                <article key={post.date ? post.date.toDateString() : post.name}>
                    <header>
                        {post.date && <span className="date">{post.date.toDateString()}</span>}
                        <h2><Link to={post.url}>{post.name}</Link></h2>
                        {'description' in post && <h4>{post.description}</h4>}
                    </header>
                    {'imageUrl' in post && <a href={post.url}
                    className="image fit"><img src={`/myWebsite/${post.imageUrl}`}/></a>}
                    {index < items.length - 1 && <hr />}
                </article>
            ))}
        </section>
    )
}

export default List;