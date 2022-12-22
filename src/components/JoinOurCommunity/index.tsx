import bgImage from './../../images/section-join-community-without-button.jpg'

const JoinOurCommunity = () => {
    return (
        <div className="container mx-auto w-[1208px] relative">
            <div className="h-[290px] w-full mt-[98px]">
                <img
                    src={bgImage}
                    width={1208}
                    height={290}
                    alt={bgImage}
                    className="rounded-[10px]"
                />
            </div>
            <div className="absolute bottom-[71px] left-[43%] flex flex-row justify-center items-center py-4 px-8 gap-2.5 bg-white rounded-[66px] w-[153px]">
                <div className="font-normal text-[16px] leading-[19px] text-secondary-main">
                    Get Started
                </div>
            </div>
        </div>
    )
}

export default JoinOurCommunity
