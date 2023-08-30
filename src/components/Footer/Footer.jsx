import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { GrInstagram, GrMedium, GrYoutube } from 'react-icons/gr';
function Footer() {
    return (
        <div>
            <div>
                <div className='flex justify-center items-center flex-row mid-lg:flex-col space-x-8 mid-lg:space-x-0 mid-lg:space-y-8'>
                <a className='list-none text-xl text-white' href="/#"><CiTwitter /> </a>
                    <a className='list-none text-xl text-white' href="/#"><FiLinkedin /> </a>
                    <a className='list-none text-xl text-white' href="/#"><FiFacebook /> </a>
                    <a className='list-none text-xl text-white' href="/#"><GrYoutube /> </a>
                    <a className='list-none text-xl text-white' href="/#"><GrInstagram /> </a>
                </div>
                <p>©2016-2023 <a href="/">Tanjimul Sabbir</a></p>
            </div>
        </div>
    )
}

export default Footer