import {offer} from "../assets/images";
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"



const specialoffer = () => {
  return (
    <section className="flex items-center justify-wrap max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>

      
      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          
          <span className="text-red-500">Special</span> Offer
          </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, quas ullam quia corrupti omnis voluptate asperiores quam sit perspiciatis reiciendis reprehenderit provident saepe veritatis earum laboriosam ipsa modi voluptates. Ut?</p>

        <p className="mt-6 lg:max-w-lg info-text">pour dedication to detail and excellence ensures your satisfaction</p>

        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <Button label="Learn More" backgroundColor="bg-white" textColor="text-gray-400" borderColor="border-gray-500"/>
        </div>
      </div>

    </section>
  )
}

export default specialoffer