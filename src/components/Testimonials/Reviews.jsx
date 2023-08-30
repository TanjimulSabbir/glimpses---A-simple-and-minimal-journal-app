
function Reviews() {
    return (
        <div className='flex items-center justify-evenly ralewaye'>
            <div>
                <div className='bg-white shadow rounded p-8'>
                    <h1>Been trying glimpses journal app. Loved the minimalist design & easy use.</h1>
                </div>
                <div className='flex space-x-3 items-center mt-5 ml-10'>
                    <div className='rounded-full'>
                        {/* <p className='h-10 w-10 bg-white'></p> */}
                        <img className='w-10 h-10 rounded-full' src="https://getglimpses.com/assets/img/twitter3.jpg" alt="" />
                    </div>
                    <div className=''>
                        <h2 className='text-xl text-Secondary font-bold mb-[2px]'>Rami Sarieddine</h2>
                        <p className='text-xs text-Primary'>@RamieSays</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews