import { FiFacebook } from 'react-icons/fi';
import { GrInstagram, GrTwitter, GrYoutube } from 'react-icons/gr';

function Social() {
    const iconStyle="text-Secondary border p-2 rounded-full text-center border-gray-300"
    return (
        <div className='space-y-4'>
            <div className='flex items-center flex-row space-x-3'>
                <a className={iconStyle} href="/#"><GrTwitter /> </a>
                <a className={iconStyle} href="/#"><FiFacebook /> </a>
                <a className={iconStyle} href="/#"><GrYoutube /> </a>
                <a className={iconStyle} href="/#"><GrInstagram /> </a>
            </div>
            <p className='text-sm text-Primary'>©2016-2023 <a className='text-teal-500' href="/">Tanjimul Sabbir</a></p>
        </div>
    )
}

export default Social;