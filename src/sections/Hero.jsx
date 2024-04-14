import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"

const hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col min-h-screen max-container p-2 gap-10">
      <div className="relative flex flex-col w-full xl:w-2/5 justify-center items-start max-xl:padding-x pt-28 ">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>
      
    </section>
  )
}

export default hero