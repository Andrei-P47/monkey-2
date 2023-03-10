import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import { FaBars, FaTimes } from 'react-icons/fa'
import classNames from 'classnames'

function Header() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' })

    const navRef = useRef<HTMLElement>(null)

    const showNavBar = () => {
        navRef?.current?.classList.toggle('responsive-nav')
        document.body.classList.toggle('remove-scroll')
    }

    return (
        <div className="bg-primary-main fixHeader z-40">
            <header className="container mx-auto px-6 xl:px-0 text-white flex items-center bg-primary-main ">
                <div className="flex flex-row justify-between text-white py-3.5 w-full">
                    <div className="font-bold text-[33.2px] leading-10">
                        <span className="header-logo-gradient">Apollo</span>
                        <span className="text-secondary-main">NFT</span>
                    </div>
                    <nav
                        ref={navRef}
                        className={`flex justify-center items-center gap-10 ${
                            isBigScreen ? 'flex-row' : 'flex-col'
                        }`}
                    >
                        <a href="#idDrop">
                            <button className="text-white text-base leading-19px font-normal">
                                Drop
                            </button>
                        </a>
                        <a href="#idMarketplace">
                            <button className="text-white text-base leading-19px font-normal">
                                Marketplace
                            </button>
                        </a>
                        <a href="#idCreator">
                            <button className="text-white text-base leading-19px font-normal">
                                Creator
                            </button>
                        </a>
                        <a href="#idCommunity">
                            <button className="text-white text-base leading-19px font-normal">
                                Community
                            </button>
                        </a>
                        <button
                            className="nav-btn nav-close-btn"
                            onClick={showNavBar}
                        >
                            <FaTimes />
                        </button>
                    </nav>
                    <button
                        className={classNames(
                            'flex flex-row justify-center items-center py-4 px-8 gap-2.5 rounded-large header-button-gradient',
                            {
                                hidden: !isBigScreen,
                            }
                        )}
                    >
                        <span className="text-white text-base leading-19px font-normal">
                            Contact Us
                        </span>
                    </button>

                    <button
                        className={classNames('nav-btn', {
                            hidden: isBigScreen,
                        })}
                        onClick={showNavBar}
                    >
                        <FaBars />
                    </button>
                </div>
            </header>
        </div>
    )
}
export default Header
