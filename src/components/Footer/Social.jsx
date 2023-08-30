import { FiFacebook } from 'react-icons/fi';
import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';

function Social() {
    return (
        <div>
            <div className='space-y-2'>
                <div className='flex items-center flex-row space-x-3'>
                    <a className='list-none text-xl text-Secondary border p-3 rounded-full text-center border-gray-300' href="/#"><GrTwitter /> </a>
                    <a className='list-none text-xl text-Secondary border p-3 rounded-full text-center border-gray-300' href="/#"><FiFacebook /> </a>
                    <a className='list-none text-xl text-Secondary border p-3 rounded-full text-center border-gray-300' href="/#"><GrYoutube /> </a>
                    <a className='list-none text-xl text-Secondary border p-3 rounded-full text-center border-gray-300' href="/#"><GrInstagram /> </a>
                </div>
                <p className='text-sm text-Primary'>©2016-2023 <a href="/">Tanjimul Sabbir</a></p>
            </div>
        </div>
    )
}

export default Social;