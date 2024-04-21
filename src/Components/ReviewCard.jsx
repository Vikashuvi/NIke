import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center flex-col items-center">
        <img src={imgURL} alt="Customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center gap-2.5">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} height={24} width={24} className="object-contain mt-0" />
            <p className="text-xl text-gray-400">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard