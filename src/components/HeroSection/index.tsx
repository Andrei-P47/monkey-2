import star from './../../images/star-1.png'
import first from './../../images/HeroCardsImage/1.jpg'
import second from './../../images/HeroCardsImage/2.jpg'
import third from './../../images/HeroCardsImage/3.jpg'

const HeroSection = () => {
    return (
        <div className="flex flex-row justify-between mt-[120px]">
            <div className="flex flex-col gap-[30px] w-[726px]">
                <div className="font-extrabold text-[94px] leading-[90px] text-white bor whitespace-pre ">
                    <div>Create Your </div>
                    Own&nbsp;
                    <span className="hero-title-gradient flex-none">
                        NFT Dream
                    </span>
                    <div className="flex flex-row">
                        Gallery
                        <img
                            className="mt-4"
                            src={star}
                            width={85}
                            height={85}
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-[30px]">
                    <div className="flex flex-row justify-center items-center py-[47px] px-[10px] gap-2.5 rounded-[200px] discover-nft-button-gradient">
                        <span className="font-semibold text-[16px] leading-[26px] text-white flex-none">
                            Discover NFT
                        </span>
                    </div>
                    <div className="font-normal text-[16px] leading-[26px] text-white">
                        The Larges NFT Marketplace. Automatic and truly <br />
                        unique digital creation. Signed and issued by the <br />
                        creator, made possible by blockchain technologi
                    </div>
                </div>
            </div>
            <div className="relative top-0 right-0">
                <img
                    className="rounded-[24px] relative z-40"
                    src={first}
                    width={388}
                    height={463}
                />
                <img
                    className="rounded-[24px] absolute top-[-55px] left-[-60px]"
                    src={second}
                    width={366}
                    height={437}
                />
                <img
                    className="rounded-[24px] absolute bottom-[-60px] right-[-60px]"
                    src={third}
                    width={341}
                    height={407}
                />
            </div>
        </div>
    )
}

export default HeroSection
