import { useState } from 'react';
import './style.css'
const TabsItem =( {tab, index,setActiveTab} )=> {
    const [isActive, setIsActive] = useState(false);
    const changeClass =()=> {
        isActive ? setIsActive('tabBntActive') : setIsActive('tabBtnDefault')
    }
    const changeActive =()=> {
        setActiveTab(index)
    }
    return (
        <div>
            <button className='tabBtnDefault'
            value={index} 
            onClick={() => {
                changeActive(); 
                changeClass();
                }}> 
                { tab }
            </button>
        </div>
    )
}
export default TabsItem;

//<button className={`container ${isActive ? 'tabBntActive' : 'tabBtnDefault'}`} value={index} onClick={() => setActiveTab(index)}> 