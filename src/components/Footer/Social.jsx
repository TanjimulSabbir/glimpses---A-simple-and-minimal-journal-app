import { FiFacebook } from 'react-icons/fi';
import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';

function Social() {
    const iconStyle="text-Secondary text-xl border p-2 rounded-full text-center border-gray-300 transition duration-500 hover:border-black hover:text-black"
    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-center flex-row space-x-3'>
                <a className={iconStyle} href="/#"><GrTwitter /> </a>
                <a className={iconStyle} href="/#"><FiFacebook /> </a>
                <a className={iconStyle} href="/#"><GrYoutube /> </a>
                <a className={iconStyle} href="/#"><GrInstagram /> </a>
            </div>
            <p className='text-sm text-Primary text-center'>©2016-2023 <a className='text-green-500' href="/">Tanjimul Sabbir</a></p>
        </div>
    )
}

export default Social;