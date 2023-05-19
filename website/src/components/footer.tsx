import Image from 'next/image'
import Link from 'next/link'
import SiteLink from './SiteLink';


export const Footer = () => {
    return (
        <footer className="relative w-full pb-4 bg-navy-darkest bg-opacity-100">
            <p className='mt-4 text-white text-center text-base'>Made with 💖 by <SiteLink href={"https://arulandu.com"} txt="Alvan Caleb Arulandu"/>.</p>
        </footer>
    );
}