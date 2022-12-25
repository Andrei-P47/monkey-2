import CreateNft from '../../constants/CreateYourNft'

const CreateYourNft = () => {
    return (
        <div className="container mx-auto px-6 lg:px-0">
            <div className="flex flex-col justify-center items-start gap-[32px] md:gap-[34px] md:mt-10">
                <div className="font-bold text-[32px] md:text-[48px] leading-[58px] -tracking-[.02em] text-white">
                    Create Your Sell NFT
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-[21px]">
                    {CreateNft.map((item) => {
                        return (
                            <div className="flex flex-col items-start p-4 gap-[13px] bg-[#251163] rounded-1xl">
                                <div>
                                    <img
                                        src={item.image}
                                        width={48}
                                        height={48}
                                        alt={item.image}
                                    />
                                </div>
                                <div className="font-semibold text-[24px] leading-[26px] text-white">
                                    {item.title}
                                </div>
                                <div className="font-normal text-[20px] leading-[28px] text-white">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CreateYourNft
