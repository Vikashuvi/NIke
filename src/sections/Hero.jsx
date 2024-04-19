import Button from "../Components/Button"
import { useState } from "react";
import { arrowRight } from "../assets/icons"
import { shoes, statistics} from "../Constants"
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";


const hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen max-container gap-10 pl-10">
      <div className="relative flex flex-col w-full xl:w-2/5 justify-center items-start max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-red-500">Our Summer Collection</p>
        <h1 className="mt-10 font-palaquin text-8xl max-sm:text-[72px] max-sm:leading[72PX] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-red-500 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover Stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start w-full mt-20 flex-wrap gap-16">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 fonts-montserrat text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
      
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-purple-100 bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe" width={610} height={502} className="object-contain relative z-10"/>
      

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
        {shoes.map((shoe) => (
          <div key={shoe} className="bg-purple-100">
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setbigShoeImg(shoe) } bigShoeImg={bigShoeImg}/>
          </div>
        ))}
      </div>

      </div>
      
    </section>
  )
}

export default hero