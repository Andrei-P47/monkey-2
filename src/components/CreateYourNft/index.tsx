import CreateNft from '../../constants/CreateYourNft'

const CreateYourNft = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-[34px] mt-10">
            <div className="font-bold text-[48px] leading-[58px] -tracking-[.02em] text-white">
                Create Your Sell NFT
            </div>
            <div className="flex flex-row items-start gap-[21px]">
                {CreateNft.map((item) => {
                    return (
                        <div className="flex flex-col items-start p-4 gap-[13px] bg-[#251163] rounded-[14px]">
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
    )
}

export default CreateYourNft
