/* eslint-disable jsx-a11y/anchor-is-valid */
import WallpaperitLogo from "../img/wallpaperit-Logo.png"
import signIn from "../img/sign in.png"
import wishlist from "../img/wishlist.png"
import bag from "../img/bag.png"

function Header() {
    return (
        <div className="header">
            <img src={WallpaperitLogo} className="header-logo" alt="Wallpaperit Logo" />
            <input type="search" class="header-search" placeholder="Search for products..."></input>
            <div className="header-icons">
                <a href="">
                    <img src={signIn} alt="Sign in"/>SignIn</a>
                <a href="">
                    <img src={wishlist} alt="Wishlist"/>Wishlist</a>
                <a href="">
                    <img src={bag} alt="Bag"/>Bag</a>                        
            </div>
        </div>
    );
}

export default Header;