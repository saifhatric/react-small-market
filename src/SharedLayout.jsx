import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { AiFillShopping } from "react-icons/ai";
//import { appContext } from './App';
const SharedLayout = ({ Items }) => {
  //const  = useContext(appContext)
  return (
    <>
      <header>
        <h2>Wear </h2>
        <div className='shope'>
          <span className='product-number'>{Items}</span>
          <Link to="/checkout">
            <span className='shope-icon'><AiFillShopping /></span>
          </Link>
        </div>

        <div className="links">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/products">Products</Link>
          <Link className='link' to="/checkout">Checkout</Link>
        </div>
      </header>
      <Outlet />
      <footer className='footer'>
        <h2>Copy Right &copy;</h2>
      </footer>
    </>
  )
}

export default SharedLayout;