
const Button = ({label, iconURL, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex justify-center items-center py-4 px-7 font-montserrat gap-2 text-lg leading-none
    
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
    "bg-red-500 text-white border-red-500" } rounded-full w-full" `}>
        {label}
        {iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button