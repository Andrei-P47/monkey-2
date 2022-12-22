import star from '../../images/star-2.png'

const LiveAucition = () => {
    return (
        <div className="h-[350px]">
            <div className="pt-16 absolute overflow-hidden w-full h-full ">
                <div className="h-[184px] discover-nft-button-gradient -rotate-[6deg] absolute w-[3000px] mt-20 -left-[850px] flex flex-row gap-[22px] justify-center items-center ">
                    <div className="text-transparent font-extrabold text-[136px] leading-[146px] -tracking-[.03em] white-border">
                        LIVE AUCITION
                    </div>
                    <img src={star} alt="star 2" width={84} height={84} />
                    <div className="text-transparent font-extrabold text-[136px] leading-[146px] -tracking-[.03em] white-border">
                        LIVE AUCITION
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveAucition
