/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

function Menu(){
    const [isWallpMenuVisible, setWallpMenuVisibility] = useState(false);
    function handleOnWallpMenu(){
        setWallpMenuVisibility(true)
    }
    function handleLeaveWallpMenu(){
        setWallpMenuVisibility(false)
    }
    
    const [isPaintMenuVisible, setPaintMenuVisibility] = useState(false);
    function handleOnPaintMenu(){
        setPaintMenuVisibility(true)
    }
    function handleLeavePaintMenu(){
        setPaintMenuVisibility(false)
    }

    const [isBrandsMenuVisible, setBrandsMenuVisibility] = useState(false);
    function handleOnBrandsMenu(){
        setBrandsMenuVisibility(true)
    }
    function handleLeaveBrandsMenu(){
        setBrandsMenuVisibility(false)
    }

    const [isWallArtMenuVisible, setWallArtMenuVisibility] = useState(false);
    function handleOnWallArtMenu(){
        setWallArtMenuVisibility(true)
    }
    function handleLeaveWallArtMenu(){
        setWallArtMenuVisibility(false)
    }

    return (
        <div className="navigation-menu-all">
            <nav>
                <ul className="menu-categories">
                    <li>
                        <a onMouseOver={handleOnWallpMenu} onMouseLeave={handleLeaveWallpMenu} className="menu-category uppercase">Wallpaper <i className="arrow-down"></i></a>
                    </li>
                    <li>
                        <a onMouseOver={handleOnPaintMenu} onMouseLeave={handleLeavePaintMenu} className="menu-category uppercase">Paint <i className="arrow-down"></i> </a>
                    </li>
                    <li>
                        <a onMouseOver={handleOnBrandsMenu} onMouseLeave={handleLeaveBrandsMenu} className="menu-category uppercase">Brands <i className="arrow-down"></i> </a>
                    </li>
                    <li>
                        <a className="menu-category uppercase">Wall Murals</a>
                    </li>
                    <li>
                        <a onMouseOver={handleOnWallArtMenu} onMouseLeave={handleLeaveWallArtMenu} className="menu-category uppercase">Wall Art <i className="arrow-down"></i> </a>
                    </li>
                    <li>
                        <a className="menu-category uppercase">Sale</a>
                    </li>
                </ul>
            </nav>
            {
                isWallpMenuVisible && (
                    <div className="nav-show">
                        <ul>
                            <li><a className="menu-option">Animal </a></li>
                            <li><a className="menu-option">Bird </a></li>
                            <li><a className="menu-option">Brick </a></li>
                            <li><a className="menu-option">Damask</a></li>
                            <li><a className="menu-option">Floral </a></li>
                        </ul>
                    </div>
                )
            }
            {
                isPaintMenuVisible && (
                    <div className="nav-show">
                        <ul>
                            <li><a className="menu-option">Blue </a></li>
                            <li><a className="menu-option">Green </a></li>
                            <li><a className="menu-option">Grey </a></li>
                            <li><a className="menu-option">Neutral</a></li>
                            <li><a className="menu-option">Pink </a></li>
                        </ul>
                    </div>
                )
            }
            {
                isBrandsMenuVisible && (
                    <div className="nav-show">
                        <ul>
                            <li><a className="menu-option">Joules</a></li>
                            <li><a className="menu-option">Laura Ashley</a></li>
                            <li><a className="menu-option">Superfresco Easy Paint</a></li>
                            <li><a className="menu-option">Superfresco Easy</a></li>
                            <li><a className="menu-option">Next</a></li>
                        </ul>
                    </div>
                )
            }
            {
                isWallArtMenuVisible && (
                    <div className="nav-show">
                        <ul>
                            <li><a className="menu-option">Black</a></li>
                            <li><a className="menu-option">Blue</a></li>
                            <li><a className="menu-option">Brown</a></li>
                            <li><a className="menu-option">Green</a></li>
                            <li><a className="menu-option">Grey</a></li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Menu;
