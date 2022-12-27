import ETH from './../../images/ETH.png'
import SuperHotDrops from '../../constants/SuperHot'
import { Button } from '../index'
import { useMediaQuery } from 'react-responsive'

const SuperHotDrop = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    function cards(item: any) {
        return (
            <div className="flex flex-col items-start p-2.5 gap-2.5 bg-white rounded-lg">
                <img
                    src={item.image}
                    height={262}
                    width={isBigScreen ? 265 : 307}
                    alt={item.image}
                />
                <div className="flex flex-col items-start text-black w-full">
                    <div className="font-bold text-[18px] leading-[34px] -tracking-[.02em] text-[#242323]">
                        {item.title}
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-row flex-none gap-[6px]">
                            <img
                                src={ETH}
                                width={21}
                                height={21}
                                alt="eth value"
                            />
                            {/*<Eth width={21} height={21} />*/}
                            <div className="flex-none font-medium text-[12px] leading-[15px] -tracking-[.02em] text-[#6AD38F]">
                                {item.price}
                            </div>
                        </div>
                        <div className="font-normal text-[12px] leading-[15px] -tracking-[.02em] text-[#989898]">
                            {item.order}
                        </div>
                    </div>
                </div>
                <div className="border-t border-t-[#EDECEC] w-full h-px" />
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col items-start bg-[#BBA5FF]/[.4] rounded-large">
                        <div className="flex flex-row items-start p-1 gap-2.5">
                            <div className="font-normal text-[12px] leading-[15px] -tracking-[.02em] text-secondary-main">
                                {item.initialTime}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start p-1 gap-2.5">
                        <div className="font-bold text-[12px] leading-[15px] -tracking-[.02em] text-secondary-main">
                            Place a bid
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const buttons = [
        {
            title: 'Hope Ape',
        },
        {
            title: 'Abstract',
        },
        {
            title: 'Mongkey',
        },
        {
            title: 'Cars',
        },
        {
            title: 'Art',
        },
    ]

    return (
        <div className="container mx-auto px-6 xl:px-0 mb-6">
            <div className="flex flex-col justify-center items-start gap-2 md:gap-[34px] mt-[81px] md:mt-[95px]">
                <div className="font-bold text-[32px] md:text-[48px] leading-[58px] -tracking-[.02em] text-white">
                    Super Hot Drop
                </div>
                <div className="flex flex-col items-start gap-[17px] md:gap-[47px] w-full">
                    <div className="flex flex-row items-start gap-5.5 w-full md:w-auto overflow-auto">
                        {buttons.map((item) => {
                            return (
                                <button className="flex flex-row mx-auto w-full md:w-auto justify-center items-center bg-[#39324d] btn-gradient py-4 px-8 gap-2.5 rounded-large">
                                    <div className="font-normal text-4 leading-[19px] text-white whitespace-pre">
                                        {item.title}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-5 w-auto">
                        <div className="flex flex-wrap justify-around md:justify-evenly lg:justify-start gap-5 items-start text-white">
                            {SuperHotDrops.map((item, index) => {
                                if (!isBigScreen && index < 3) {
                                    return cards(item)
                                }
                                if (isBigScreen) {
                                    return cards(item)
                                }
                            })}
                        </div>
                        <Button text="View More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperHotDrop
