import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">
      
        <h2 className="font-palaquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide You
          <span className="text-red-500"> Super</span><br />
          <span className="text-red-500">Quality</span> Shoes
          </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, quas ullam quia corrupti omnis voluptate asperiores quam sit perspiciatis reiciendis reprehenderit provident saepe veritatis earum laboriosam ipsa modi voluptates. Ut?</p>

        <p className="mt-6 lg:max-w-lg info-text">pour dedication to detail and excellence ensures your satisfaction</p>

        <div className="mt-11">
        <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center item-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality