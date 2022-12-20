const Header = () => {
    return (
        <div className="flex flex-row justify-between text-white py-3.5">
            <div className="font-['Inter'] font-bold text-[33.2px] leading-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-header-gradient-1 to-header-gradient-2">
                    Apollo
                </span>
                <span className="text-secondary-main">NFT</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-10">
                <div className="font-['Inter'] text-white text-base leading-19px font-normal">
                    Drop
                </div>
                <div className="font-['Inter'] text-white text-base leading-19px font-normal">
                    Marketplace
                </div>
                <div className="font-['Inter'] text-white text-base leading-19px font-normal">
                    Creator
                </div>
                <div className="font-['Inter'] text-white text-base leading-19px font-normal">
                    Community
                </div>
            </div>
            <div
                className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 rounded-66px
                bg-gradient-to-r from-button-gradient-1 to-button-gradient-2"
            >
                <span className="font-['Inter'] text-white text-base leading-19px font-normal">
                    Contact Us
                </span>
            </div>
        </div>
    )
}
export default Header
