import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import { mySocials } from './Data'
import { Outlet, useLocation } from 'react-router'

function Layout() {
    const location = useLocation();

    return (
        <>
            <Header/>

            <NavBar mySocials={mySocials} currPath={location.pathname}/>

            <Outlet/>

            <Footer mySocials={mySocials}/>
        </>

    )
  }
  
  export default Layout