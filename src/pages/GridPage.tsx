import { myCollections } from "../components/Data"
import { PostDetails } from "../components/Types";
import Grid from "../components/Grid";

type GridPageProps = {
    title: string
};

function GridPage({title}: GridPageProps) {
    let posts: PostDetails[] = [];

    if (title === 'projects') {
        posts = myCollections[title];
    } else if (title === 'reviews') {
        posts = myCollections['blog'].filter(post => post.url.includes('review'));
    } else {
        // everything for blog
        posts = Object.entries(myCollections)
        .filter(([title]) => title !== 'projects')
        .map(([title, value]) => 
            value.map(post => ({
                ...post,
                'url': `/${title}/${post.url}`,
            }))
        )
        .flat();
    }

    // sort by date to render from newest to oldest
    posts.sort((a, b) =>  b.date.getTime() - a.date.getTime());

    return (
        <div id="main">
            <header className="major" style={{textAlign: 'left'}}>
                <h1>{title}</h1>
                <hr/>
            </header>
            <Grid items={posts}/>
        </div>
    )
}

export default GridPage;