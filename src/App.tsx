import { HashRouter as Router, Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import Layout from "./components/Layout"
import PostsLayout from "./components/PostsLayout";
import ListLayout from "./components/ListLayout";
import NoPage from "./components/NoPage";
import BlogPost from "./components/BlogPost";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<PostsLayout type={'projects'}/>}/>
          <Route path='blog' element={<PostsLayout type={'blog'}/>}/>
          <Route path='blog/:blogId' element={<BlogPost/>}/>
          <Route path='reads' element={<ListLayout type={'reads'}/>}/>
          <Route path='reviews' element={<PostsLayout type={'reviews'}/>}/>
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

export default App
