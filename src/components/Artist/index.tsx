const Artist = () => {
    return (
        <div className="container mx-auto px-6 xl:px-0">
            <div className="flex flex-row items-start justify-between sm:justify-center lg:justify-start gap-29px text-white mt-7.5 mb-13.5 md:mb-8">
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-base leading-4.75 tracking-[.003em]">
                        Artwork
                    </div>
                    <div className="font-bold text-28px leading-8.5">25.1k</div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-base leading-4.75 tracking-[.003em]">
                        Artist
                    </div>
                    <div className="font-bold text-28px leading-8.5">15.6k</div>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <div className="font-normal text-base leading-4.75 tracking-[.003em]">
                        Aucition
                    </div>
                    <div className="font-bold text-28px leading-8.5">10.2k</div>
                </div>
            </div>
        </div>
    )
}

export default Artist
