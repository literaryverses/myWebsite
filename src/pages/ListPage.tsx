import { myLists } from "../components/Data"
import { PostBasic } from "../components/Types";
import List from "../components/List";

type ListPageProps = {
    title: string
};

function ListPage({title}: ListPageProps) {
    const posts: PostBasic[] = myLists[title];

    posts.sort((a, b) => {
        const aDate = a.date ? a.date.getTime() : 0;
        const bDate = b.date ? b.date.getTime() : 0;
        return bDate - aDate;
    });

    return (
        <div id="main">
            <hr/>
            <header className="major" style={{textAlign: 'left'}}>
                <h1>{title}</h1>
                <hr/>
            </header>
            <List items={posts}/>
        </div>
    )
}

export default ListPage;