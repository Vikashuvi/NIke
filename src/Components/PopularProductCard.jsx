import { star } from "../assets/icons"

 
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} width={24} height={24} />
            <p className="text-lg leading-normal text-gray-500">(4.5)</p>
            
        </div>
        
        <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
            <p className="mt-2 font-semibold text-red-500 text-2lx leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard