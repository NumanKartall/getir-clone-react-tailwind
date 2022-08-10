import { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Menu({ title, items }) {


    const windowWidth = useWindowWidth()

    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        if (windowWidth <= 768) {
            setIsOpen(!isOpen);
        }
    }

    useEffect(() => {
        if (isOpen && windowWidth <= 768) {
            setIsOpen(false)
        }

        if (!isOpen && windowWidth > 768) {
            setIsOpen(true)
        }

    }, [windowWidth])

    return (
        <section>
            <nav className='grid gap-y-2 md:gap-y-4 items-center'>
                <h6 onClick={toggleCollapse} className='text-lg text-primary-brand-color font-semibold flex items-center justify-between'>{title}

                    <button className='md:hidden h-6 w-6 grid place-items-center rounded-lg hover:bg-brand-color hover:bg-opacity-5 hover:text-primary-brand-color items-center'>
                        <span className={`transition-all transform ${isOpen ? '-rotate-180' : ''}`}>
                            <MdOutlineKeyboardArrowDown size={18} />
                        </span>
                    </button>

                </h6>
                <Collapse isOpened={isOpen}>
                    <nav>
                        <ul className='grid gap-y-1 md:gap-y-2'>
                            {items.map((item, key) => (

                                <li className='font-normal mt-2 text-sm' key={key}>
                                    <a href='#' className='text-sm hover:text-brand-color'>
                                        {item.title}
                                    </a>
                                </li>

                            ))}
                        </ul>

                    </nav>
                </Collapse>
            </nav>
        </section>
    )
}
