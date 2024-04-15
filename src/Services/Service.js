import Services from "./Services"
import ServOne from "./ServOne"
import ServTwo from './ServTwo';
import ServThree from './ServThree';
import { useState } from "react";

const Service = () => {
    const [activeItem, setActiveItem] = useState(0);
    return (
        <div className='containerServ'>
            <Services
                setActiveItem={setActiveItem}
                activeItem={activeItem}
            />
            {activeItem === 0 && <ServOne />}
            {activeItem === 1 && <ServTwo />}
            {activeItem === 2 && <ServThree />}
        </div>
    )
}

export default Service;