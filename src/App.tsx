import { HashRouter as Router, Routes, Route, Navigate, useParams } from "react-router";
import Home from "./pages/Home";
import Layout from "./components/Layout"
import GridPage from "./pages/GridPage";
import ListPage from "./pages/ListPage";
import NoPage from "./pages/NoPage";
import BlogPost from "./components/BlogPost";
import ReadPage from "./pages/ReadPage";

function App() {

  const RedirectToRead = () => {
    const { readId } = useParams();
    return <Navigate to={`/reads/${readId}/000`} replace />;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<GridPage title={'projects'}/>}/>
          <Route path='blog' element={<GridPage title={'blog'}/>} />
            <Route path='blog/:blogId' element={<BlogPost/>}/>
          <Route path='reads' element={<ListPage title={'reads'}/>}/>
            <Route path='reads/:readId' element={<RedirectToRead />}/>
              <Route path='reads/:readId/:chapterId' element={<ReadPage />}/>
          <Route path='reviews' element={<GridPage title={'reviews'}/>}/>
          <Route 
            path='resume'
            element={<Navigate to="https://docs.google.com/document/d/1zm-OfQVMPlOHLiPrOa5dV4B50H4PQ3lI/edit?usp=sharing&ouid=116599078357656932597&rtpof=true&sd=true" />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
