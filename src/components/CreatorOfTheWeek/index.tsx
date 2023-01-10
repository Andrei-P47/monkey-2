import Creator from '../../constants/Creators'
import { useMediaQuery } from 'react-responsive'
import { Button } from '../index'

const CreatorOfTheWeek = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })

    function cards(item: any) {
        return (
            <div className="flex flex-row items-start p-4 gap-3.25 bg-[#251163] rounded-1xl w-full">
                <img
                    src={item.image}
                    alt={item.image}
                    width={61}
                    height={61}
                    className="rounded"
                />
                <div className="flex flex-col justify-center items-start gap-3.25">
                    <div className="font-semibold text-xl md:text-2xl leading-6.5 text-white">
                        {item.title}
                    </div>
                    <div className="font-normal text-xl leading-7 text-white">
                        {item.price}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto px-6 xl:px-0" id="idCreator">
            <div className="flex flex-col justify-center items-start gap-5.5 md:gap-8.5 mt-8 md:mt-[95px]">
                <div className="font-bold text-32px md:text-5xl leading-14.5 -tracking-[.02em] text-white">
                    Creator of The Week
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5.25 w-full">
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
