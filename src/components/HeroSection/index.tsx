import star from './../../images/star-1.png'
import first from './../../images/HeroCardsImage/1.jpg'
import second from './../../images/HeroCardsImage/2.jpg'
import third from './../../images/HeroCardsImage/3.jpg'
import { useMediaQuery } from 'react-responsive'

const HeroSection = () => {
    const ssm = useMediaQuery({ query: '(min-width: 375px)' })
    const sm = useMediaQuery({ query: '(max-width: 640px)' })
    const md = useMediaQuery({ query: '(min-width: 768px)' })
    const lg = useMediaQuery({ query: '(min-width: 1024px)' })

    return (
        <div className="container mx-auto px-6 lg:px-0">
            <div className="flex flex-col lg:flex-row justify-between pt-[80px] sm:pt-[100px] lg:pt-[120px] ">
                <div className="flex flex-col gap-[30px] w-auto lg:w-[726px]">
                    <div className="font-extrabold text-[41.77px] lg:text-[94px] leading-[40px] lg:leading-[90px] text-white bor whitespace-pre ">
                        <div>Create Your </div>
                        Own&nbsp;
                        <span className="hero-title-gradient flex-none">
                            NFT Dream
                        </span>
                        <div className="flex flex-row">
                            Gallery
                            <img
                                className="mt-4 hidden lg:block"
                                src={star}
                                width={85}
                                height={85}
                                alt="star"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-[30px]">
                        <button className="flex flex-row order-last lg:order-first justify-center items-center py-4 lg:py-[47px] px-[10px] gap-2.5 rounded-large md:rounded-[200px] discover-nft-button-gradient">
                            <span className="font-semibold text-[16px] leading-[26px] text-white flex-none">
                                Discover NFT
                            </span>
                        </button>
                        <div className="font-normal text-[14px] order-first lg:order-last md:text-[16px] leading-[26px] text-white">
                            The Larges NFT Marketplace. Automatic and truly
                            <br className="hidden md:block" />
                            unique digital creation. Signed and issued by the
                            <br className="hidden md:block" />
                            creator, made possible by blockchain technologi
                        </div>
                    </div>
                </div>
                <div className="relative h-[440px] lg:h-auto top-[105px] lg:top-0 right-0">
                    <img
                        className="rounded-3xl relative z-30 mx-auto"
                        src={first}
                        width={lg ? 388 : 240}
                        height={lg ? 463 : 287}
                        alt={first}
                    />
                    <img
                        className="rounded-3xl absolute -top-[30px] sm:-top-[30px] md:-top-[30px] lg:top-[-55px] sm:left-[130px] md:left-[200px] left-0 lg:left-[-60px]"
                        src={second}
                        width={lg ? 366 : 227}
                        height={lg ? 437 : 271}
                        alt={second}
                    />
                    <img
                        className="rounded-3xl absolute top-[75px] sm:top-[65px] md:top-[65px] lg:top-[115px] right-0 sm:right-[130px] md:right-[200px] lg:right-[-60px]"
                        src={third}
                        width={lg ? 341 : 211}
                        height={lg ? 407 : 252}
                        alt={third}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
