/* eslint-disable jsx-a11y/anchor-is-valid */
import WallpaperitLogo from "../img/wallpaperit-Logo.png"
import signIn from "../img/sign in.png"
import wishlist from "../img/wishlist.png"
import bag from "../img/bag.png"
import { useState } from 'react';

function Header() {
    const [isBannerVisible, setBannerVisibility] = useState(true);

    function hideBanner() {
        setBannerVisibility(false);
    }
    return (
        <>
            {
                isBannerVisible && (
                    <div className="green-header">
                        <a href="">free delivery* and free returns</a>
                        <span onClick={hideBanner} className="close">&times;</span>
                    </div>
                )
            }

            <div className="header">
                <img src={WallpaperitLogo} className="header-logo" alt="Wallpaperit Logo" />
                <input type="search" className="header-search" placeholder="Search for products..."></input>
                <div className="header-icons">
                    <a href="">
                        <img src={signIn} alt="Sign in" />SignIn</a>
                    <a href="">
                        <img src={wishlist} alt="Wishlist" />Wishlist</a>
                    <a href="">
                        <img src={bag} alt="Bag" />Bag</a>
                </div>
            </div>
        </>
    );
}

export default Header;