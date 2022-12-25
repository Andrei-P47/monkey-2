const Artist = () => {
    return (
        <div className="container mx-auto px-6 lg:px-0">
            <div className="flex flex-row items-start justify-between lg:justify-start gap-[29px] text-white mt-[30px] mb-[54px] md:mb-8">
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-[16px] leading-[19px] tracking-[.003em]">
                        Artwork
                    </div>
                    <div className="font-bold text-[28px] leading-[34px]">
                        25.1k
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-[16px] leading-[19px] tracking-[.003em]">
                        Artist
                    </div>
                    <div className="font-bold text-[28px] leading-[34px]">
                        15.6k
                    </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-[16px] leading-[19px] tracking-[.003em]">
                        Aucition
                    </div>
                    <div className="font-bold text-[28px] leading-[34px]">
                        10.2k
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist
