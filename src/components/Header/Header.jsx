import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Header() {

    return (
        <>
            <header className="bg-white text-gray-700 p-6 flex lg:flex-row md:flex-col lg:justify-between justify-center items-center gap-5">
                <img src="/public/logo.png" alt="" />

                <div className="info md:flex justify-evenly hidden gap-5 md:px-7">
                    <div className="details flex gap-3 items-center border-r-2 border-gray-300 px-4 ">
                        <FontAwesomeIcon icon={faLocationDot} size='2x' />
                        <div>
                            <p className='font-semibold'>Address:</p>
                            <p>2A0, Queenstown St, USA.</p>
                        </div>
                    </div>
                    <div className="details flex gap-3 items-center px-3">
                        <FontAwesomeIcon icon={faEnvelope} size='xl' />
                        <div>
                            <p className='font-semibold'>Mail Us:</p>
                            <p>info@example.com</p>
                        </div>
                    </div>

                    <button className=' border-2 px-5 hover:text-white hover:bg-gray-700 ml-auto rounded-lg transition-colors duration-200'>
                        GET A QUOTES
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header