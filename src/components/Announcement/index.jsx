import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { IoMdMegaphone, IoIosCloseCircle } from "react-icons/io";
import { useState, useEffect } from 'react';
import languages from "../../jsons/languages/languages.json"

const Announcement = () => {
    const { language } = useSelector((state) => state.theme);

    const [announceIndex, setAnnounceIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnnounceIndex(prevIndex => (prevIndex + 1) % languages[language].announcements.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [language]);

    const handleCloseClick = () => {
        setIsVisible(false);
        sessionStorage.setItem('announcementHidden', true);
    }

    useEffect(() => {
        const isHidden = sessionStorage.getItem('announcementHidden');
        if (isHidden) {
            setIsVisible(false);
        }
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div className='max-md:hidden p-3  flex items-center   justify-between'>
                <Link className='ml-16 text-sm hover:text-sky-500 transition-colors'>
                    <IoMdMegaphone className='text-sky-600 inline-block' />   {languages[language].announcements[announceIndex]}
                </Link>
                <IoIosCloseCircle className='hover:text-sky-500 transition-colors cursor-pointer mr-16' onClick={handleCloseClick} />
            </div>


        </div>

    );
}

export default Announcement;
