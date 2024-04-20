
const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center py-4 px-7 font-montserrat gap-2 text-lg leading-none bg-red-500 text-white rounded-full border-red-500">
        {label}
        {iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button