import { footerLinks, socialMedia } from "../Constants"
import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"

const footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus facere omnis, dolores architecto inventore nostrum consequatur distinctio vero saepe, quod repellendus esse libero! Vitae dolores voluptates quisquam. Quis, architecto nesciunt.</p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section)=> (
                <div key={section}>
                  <h4 className="text-white text-2xl leading-normal font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li className="mt-3 text-white text-base leading-normal hover:text-gray-400" key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className='flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
      </div>
    </footer>
  )
}

export default footer