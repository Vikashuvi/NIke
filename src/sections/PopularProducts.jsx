import { products } from '../Constants';

import PopularProductCard from '../Components/PopularProductCard'

const popularproducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 ">
        <h1 className="text-4xl font- font-bold">Our <span className='text-red-500'>Popular</span> Products</h1>
        <p className="lg:max-w-lg mt-2 fonts-montserrat text-gray-400">Experience the top quality comfy with asthetic design which make you to look cool built with aerodynamics in low prize.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map ((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>  


      </section>
  )
}

export default popularproducts