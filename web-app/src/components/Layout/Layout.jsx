
import Header from '../Header'
import Footer from '../Footer'
import Cart from '../Cart'

const Layout = ({ 
    children,
    cart,
    showCart,
    openCart,
    closeCart
}) => {
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