
import './style.css'
const ServItem =( {serv, index, activeItem, setActiveItem} ) => {

    const changeActive =()=> {
        setActiveItem(index)
    }
    return(
        <div>
            <button value={index} 
            className={index === activeItem ? 'servBntActive' : 'servBtnDefault'}
            onClick={changeActive}>
            { serv }
            </button>
        </div>
    )
}
export default ServItem;