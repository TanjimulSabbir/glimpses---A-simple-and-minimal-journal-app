import { FiFacebook } from 'react-icons/fi';
import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';

function Social() {
    const iconStyle = "text-Secondary text-2xl border p-2 rounded-full text-center border-gray-300 transition duration-500 hover:border-black hover:text-black"
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center flex-row space-x-3'>
                <li className={iconStyle}><a href="/#"><GrTwitter /> </a></li>
                <li className={iconStyle}><a href="/#"><FiFacebook /> </a></li>
                <li className={iconStyle}><a href="/#"><GrYoutube /> </a></li>
                <li className={iconStyle}><a href="/#"><GrInstagram /> </a></li>
            </div>
            <p className='text-xs text-Primary text-center'>©2016-2023 <a className='text-green-500' href="/">Tanjimul Sabbir</a></p>
        </div>
    )
}

export default Social;