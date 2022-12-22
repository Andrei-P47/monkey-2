import Brands from '../../constants/BrandsCompany'

const BrandCompany = () => {
    return (
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
    )
}

export default BrandCompany
