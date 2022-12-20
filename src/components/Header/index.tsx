const Header = () => {
    return (
        <div className="flex flex-row justify-between text-white py-3.5">
            <div className="font-bold text-[33.2px] leading-10">
                <span className="header-logo-gradient">Apollo</span>
                <span className="text-secondary-main">NFT</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="text-white text-base leading-19px font-normal">
                    Drop
                </div>
                <div className="text-white text-base leading-19px font-normal">
                    Marketplace
                </div>
                <div className="text-white text-base leading-19px font-normal">
                    Creator
                </div>
                <div className="text-white text-base leading-19px font-normal">
                    Community
                </div>
            </div>
            <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 rounded-66px header-button-gradient">
                <span className="text-white text-base leading-19px font-normal">
                    Contact Us
                </span>
            </div>
        </div>
    )
}
export default Header
