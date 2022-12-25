import Creator from '../../constants/Creators'
import { useMediaQuery } from 'react-responsive'
import { Button } from '../index'

const CreatorOfTheWeek = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    function cards(item: any) {
        return (
            <div className="flex flex-row items-start p-4 gap-13px bg-[#251163] rounded-1xl w-full">
                <img
                    src={item.image}
                    alt={item.image}
                    width={61}
                    height={61}
                    className="rounded"
                />
                <div className="flex flex-col justify-center items-start gap-13px">
                    <div className="font-semibold text-[20px] md:text-[24px] leading-[26px] text-white">
                        {item.title}
                    </div>
                    <div className="font-normal text-[20px] leading-[28px] text-white">
                        {item.price}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto px-6 lg:px-0">
            <div className="flex flex-col justify-center items-start gap-5.5 md:gap-[34px] mt-8 md:mt-[95px]">
                <div className="font-bold text-[32px] md:text-5xl leading-[58px] -tracking-[.02em] text-white">
                    Creator of The Week
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-21px w-full">
                    {Creator.map((item, index) => {
                        if (!isBigScreen && index < 3) {
                            return cards(item)
                        }
                        if (isBigScreen) {
                            return cards(item)
                        }
                    })}
                </div>
                <Button text="Watch Video" />
            </div>
        </div>
    )
}

export default CreatorOfTheWeek
