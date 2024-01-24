import { useState } from "react"
import './style.css';

export const AccordionItem = ({ title, content, arrow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const stringIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="accordionItem">
            <div className={isOpen ? 'activeItem' : 'defaultItem'} onClick={stringIsOpen}>
                <div className="title">
                    {title}
                </div>
                <div className={isOpen ? 'activeArrow' : 'defaultArrow'}>
                    {arrow}
                </div>
            </div>
            {
                isOpen && <div className="content">
                    {content}
                </div>
            }
        </div>
    )
}