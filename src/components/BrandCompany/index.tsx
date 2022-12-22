import Brands from '../../constants/BrandsCompany'

const BrandCompany = () => {
    return (
        <div className="container mx-auto w-[1208px]">
            <div className="flex flex-row justify-between items-center py-6 gap-[48px]">
                {Brands.map((item) => {
                    return (
                        <img
                            src={item.source}
                            width={item.width}
                            height={48}
                            alt={item.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BrandCompany
