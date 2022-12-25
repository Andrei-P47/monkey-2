import Brands from '../../constants/BrandsCompany'
import { useMediaQuery } from 'react-responsive'

const BrandCompany = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <div className="container mx-auto px-6 lg:px-0">
            <div className="flex flex-wrap md:flex-row md:justify-between justify-center items-center md:py-6 gap-4 md:gap-[48px]">
                {Brands.map((item) => {
                    return (
                        <img
                            src={item.source}
                            width={item.width}
                            height={!isBigScreen ? 40 : 40}
                            alt={item.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BrandCompany
