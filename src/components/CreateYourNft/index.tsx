import CreateNft from '../../constants/CreateYourNft'

const CreateYourNft = () => {
    return (
        <div className="container mx-auto px-6 xl:px-0">
            <div className="flex flex-col justify-center items-start gap-8 md:gap-8.5 md:mt-10">
                <div className="font-bold text-32px md:text-5xl leading-14.5 -tracking-[.02em] text-white">
                    Create Your Sell NFT
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2.25">
                    {CreateNft.map((item) => {
                        return (
                            <div className="flex flex-col items-start p-4 gap-3.25 bg-[#251163] rounded-1xl">
                                <div>
                                    <img
                                        src={item.image}
                                        width={48}
                                        height={48}
                                        alt={item.image}
                                    />
                                </div>
                                <div className="font-semibold text-2xl leading-6.5 text-white">
                                    {item.title}
                                </div>
                                <div className="font-normal text-xl leading-7 text-white">
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
