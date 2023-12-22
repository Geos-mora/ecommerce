import { useRoutes } from "react-router-dom"
import MyAccount from "./components/Main/pages/MyAccount/MyAccount"
import MyOrder from "./components/Main/pages/MyOrder/MyOrder"
import MyOrders from "./components/Main/pages/MyOrders/MyOrders"
import NotFound from "./components/Main/pages/NotFound/NotFound"
import Signin from "./components/Main/pages/Signin/Signin"
import Home from "./components/Main/pages/home/Home"
import NavBar from "./components/NavBar/NavBar"
import DataProvider from './context/DataProvider'




const AppRoutes=()=>{
  let routes =useRoutes([
    {path:'/', element:<Home/>},
    {path:'/', element:<Home/>},
    {path:'/', element:<Home/>},
    {path:'/', element:<Home/>},
    {path:'/', element:<Home/>},
    {path:'My-Account', element:<MyAccount/>},
    {path:'My-Order', element:<MyOrder/> },
    {path:'My-Oreders', element:<MyOrders/>},
    {path:'My-Oreders/last', element:<MyOrder/>},
    {path:'/*', element:<NotFound/>  },
    {path: 'Signin', element:<Signin/>},
  ])
  return routes
}


function App() {
  

  return (
   
    <DataProvider>
    <div className="container">
       <header>
         <NavBar/>
       </header>
      <main className="mainContainer">
         <AppRoutes/>
      </main>
    </div>
    </DataProvider>
   
   
  )
}

export default App
