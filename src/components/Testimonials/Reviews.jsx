import ALlReviews from "./Reviews.json";
import './Reviews.css'
function Reviews() {
    return (
            <div className='grid md:w-full mx-auto grid-cols-1 md:grid-cols-3 items-center justify-evenly space-y-8 md:space-y-0 gap-8 raleway'>
                {
                    ALlReviews.Reviews.map(review => {
                        const { description, name, img, title } = review
                        return (

                            <div key={review.name}>
                                <div className='bg-white shadow-sm rounded p-6 text-Primary'>
                                    <h1>{description}</h1>
                                </div>
                                <div className="triangle-down ml-10"></div>
                                <div className='flex space-x-3 items-center ml-10 mt-1'>
                                    <div>
                                        <img className='w-10 h-10 rounded-full' src={img} alt="review profile image" />
                                    </div>
                                    <div className=''>
                                        <h2 className='text-xl text-Secondary font-bold mb-[2px]'>{name}</h2>
                                        <p className='text-xs text-Primary'>{title}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Reviews