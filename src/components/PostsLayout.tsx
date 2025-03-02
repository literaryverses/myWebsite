import { myCollections } from "./Data"
import { Post } from "./Types";
import { Link } from "react-router";

type PostsLayoutProps = {
    type: string
}

function PostsLayout({type}: PostsLayoutProps) {
    let posts: Post[] = [];

    if (type === 'projects') {
        posts = myCollections[type];
    } else if (type === 'reviews') {
        posts = myCollections['blog'].filter(post => post.url.includes('review'));
    } else {
        // everything for blog
        posts = Object.entries(myCollections)
        .filter(([type]) => type !== 'projects')
        .map(([type, value]) => 
            value.map(post => ({
                ...post,
                'url': `/${type}/${post.url}`,
            }))
        )
        .flat();
    }

    // sort by date to render from newest to oldest
    posts = posts.sort((a, b) =>  b.date.getTime() - a.date.getTime());

    return (
        <div id="main">
            <header className="major" style={{textAlign: 'left'}}>
                <h1>{type}</h1>
                <hr/>
            </header>
            <section className="posts">
                {posts.map((post: Post) => (
                    <article key={post.date.toDateString()}>
                        <header>
                            <span className="date">{post.date.toDateString()}</span>
                            <h2><Link to={post.url}>{post.title}</Link></h2>
                            <h4>{post.description}</h4>
                        </header>
                        <a href={post.url}
                        className="image fit"><img src={`/myWebsite/${post.imageUrl}`}/></a>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default PostsLayout;