import React from 'react'

function Reviews() {
    return (
        <div>
            <div className='flex items-center justify-evenly bg-white shadow rounded p-8'>
                <h1>Been trying glimpses journal app. Loved the minimalist design & easy use.</h1>
            </div>
            <div className='flex space-x-2 items-center'>
                <div className='rounded-full'>
                    {/* <p className='h-10 w-10 bg-white'></p> */}
                    <img className='w-10 h-10' src="https://getglimpses.com/assets/img/twitter3.jpg" alt="" />
                </div>
                <div>
                    <h2>Rami Sarieddine</h2>
                    <p>@RamieSays</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews