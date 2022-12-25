import star from '../../images/star-2.png'

const LiveAucition = () => {
    return (
        <div className="h-[165px] md:h-[350px]">
            <div className="md:pt-16 absolute overflow-hidden w-full h-full ">
                <div className="h-[146px] md:h-[184px] gradient md:-rotate-[6deg] absolute w-[3000px]  -left-[840px] md:-left-[850px] flex flex-row gap-5.5 justify-center items-center ">
                    <div className="text-transparent font-extrabold text-[88px] md:text-[136px] leading-[116px] md:leading-[146px] -tracking-[.01em] md:-tracking-[.03em] white-border">
                        LIVE AUCITION
                    </div>
                    <img src={star} alt="star 2" width={84} height={84} />
                    <div className="text-transparent font-extrabold text-[88px] md:text-[136px] leading-[116px] md:leading-[146px] -tracking-[.01em] md:-tracking-[.03em] white-border">
                        LIVE AUCITION
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveAucition
