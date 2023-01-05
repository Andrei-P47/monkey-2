import Brands from '../../constants/BrandsCompany'
import { useMediaQuery } from 'react-responsive'

const BrandCompany = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <div className="container mx-auto px-6 xl:px-0 slider">
            <div className="slide-track flex flex-wrap lg:flex-row lg:justify-between justify-center items-center lg:py-6 gap-4 md:gap-[15px] lg:gap-[48px]">
                {/*flex flex-wrap lg:flex-row lg:justify-between justify-center items-center lg:py-6 gap-4 lg:gap-[48px]*/}
                {Brands.map((item) => {
                    return (
                        <div className="h-[100px] w-[250px]">
                            <img
                                src={item.source}
                                width={item.width}
                                height={!isBigScreen ? 40 : 40}
                                alt={item.source}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrandCompany
