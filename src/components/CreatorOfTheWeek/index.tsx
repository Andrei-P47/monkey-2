import Creator from '../../constants/Creators'

const CreatorOfTheWeek = () => {
    return (
        <div className="container mx-auto w-[1208px]">
            <div className="flex flex-col justify-center items-start gap-[34px] mt-[95px]">
                <div className="font-bold text-[48px] leading-[58px] -tracking-[.02em] text-white">
                    Creator of The Week
                </div>
                <div className="grid grid-cols-3 gap-[21px] w-full">
                    {Creator.map((item) => {
                        return (
                            <div className="flex flex-row items-start p-4 gap-[13px] bg-[#251163] rounded-[14px] w-full">
                                <img
                                    src={item.image}
                                    alt={item.image}
                                    width={61}
                                    height={61}
                                    className="rounded-[4px]"
                                />
                                <div className="flex flex-col justify-center items-start gap-[13px]">
                                    <div className="font-semibold text-[24px] leading-[26px] text-white">
                                        {item.title}
                                    </div>
                                    <div className="font-normal text-[20px] leading-[28px] text-white">
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-row mx-auto justify-center items-center py-4 px-8 gap-2.5 rounded-[66px] discover-nft-button-gradient">
                    <div className="font-normal text-[16px] leading-[19px] text-white">
                        Watch Video
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatorOfTheWeek
