import { Route,Routes } from 'react-router-dom';
import { Footer, NavBar, Sidebar } from './component';
import { Home,About,Cart,SingleProduct,Error,Checkout,PrivateRoute,Products } from './pages';
function App() {

  return (
    <>
    <NavBar/>
    <Sidebar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/products/:id' element={<SingleProduct/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/privateroute' element={<PrivateRoute/>}/>
        <Route exact path='/*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
