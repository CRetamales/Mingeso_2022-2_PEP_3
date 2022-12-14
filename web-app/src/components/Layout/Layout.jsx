
import Header from '../Header'
import Footer from '../Footer'
import Cart from '../Cart'
import { useEffect } from 'react'

const Layout = ({ 
    children,
    cart,
    showCart,
    openCart,
    closeCart
}) => {
    // Parte donde se envia a localstorage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])




    return (
        <>
            <Header />
            
            <main>{children}</main>
            <Footer />
            <Cart cart={cart} showCart={showCart} closeCart={closeCart} />
        </>
    )
}

export default Layout