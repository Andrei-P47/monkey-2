import monkey1 from './../../images/SuperHotDrop/1.jpg'
import monkey2 from './../../images/SuperHotDrop/2.jpg'
import monkey3 from './../../images/SuperHotDrop/3.jpg'
import monkey4 from './../../images/SuperHotDrop/4.jpg'
import monkey5 from './../../images/SuperHotDrop/5.jpg'
import monkey6 from './../../images/SuperHotDrop/6.jpg'
import monkey7 from './../../images/SuperHotDrop/7.jpg'
import monkey8 from './../../images/SuperHotDrop/8.jpg'
import ETH from './../../images/ETH.png'
import Eth from '../../images/Eth'

const SuperHotDrops = [
    {
        image: monkey1,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey2,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey3,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey4,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey5,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey6,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey7,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
    {
        image: monkey8,
        title: 'ArtCrypto',
        price: '0.25 ETH',
        order: '1 of 32',
        initialTime: '3h 25m 3s',
    },
]

const SuperHotDrop = () => {
    return (
        <div className="flex flex-col justify-center items-start gap-[34px] mt-[95px]">
            <div className="font-bold text-[48px] leading-[58px] -tracking-[.02em] text-white">
                Super Hot Drop
            </div>
            <div className="flex flex-col items-start gap-[47px]">
                <div className="flex flex-row items-start gap-[22px]">
                    <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-primary-pressed rounded-[66px] discover-nft-button-gradient">
                        <div className="font-semibold text-[16px] leading-[19px] text-white">
                            Hope Ape
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-primary-pressed rounded-[66px]">
                        <div className="font-semibold text-[16px] leading-[19px] text-white">
                            Abstract
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-primary-pressed rounded-[66px]">
                        <div className="font-semibold text-[16px] leading-[19px] text-white">
                            Monkey
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-primary-pressed rounded-[66px]">
                        <div className="font-semibold text-[16px] leading-[19px] text-white">
                            Cars
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-primary-pressed rounded-[66px]">
                        <div className="font-semibold text-[16px] leading-[19px] text-white">
                            Art
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="grid grid-cols-4 gap-5 items-start text-white">
                        {SuperHotDrops.map((item) => {
                            return (
                                <div className="flex flex-col items-start p-2.5 gap-2.5 bg-white rounded-[8px]">
                                    <div>
                                        <img
                                            src={item.image}
                                            height={262}
                                            width={265}
                                            alt={item.image}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start text-black w-full">
                                        <div className="font-bold text-[18px] leading-[34px] -tracking-[.02em] text-[#242323]">
                                            {item.title}
                                        </div>
                                        <div className="flex flex-row justify-between w-full">
                                            <div className="flex flex-row flex-none">
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
                                    <div className="border-t border-t-[#EDECEC] w-full h-px"></div>
                                    <div className="flex flex-row justify-between w-full">
                                        <div className="flex flex-col items-start bg-[#BBA5FF]/[.4] rounded-[66px]">
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
                        })}
                    </div>
                    <div className="flex flex-row mx-auto justify-center items-center py-4 px-8 gap-2.5 rounded-[66px] discover-nft-button-gradient">
                        <div className="font-normal text-[16px] leading-[19px] text-white">
                            View More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperHotDrop
