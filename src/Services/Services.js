
import ServItem from './ServItem';

const Services = ( {setActiveItem, activeItem} ) => {
    return (
        <div className='btnWrap'>
            {
                [`лепим`, `глазируем`,`моделируем`].map((serv, index) => (
                    <ServItem
                    key = {index}
                    serv = {serv}
                    index = {index}
                    setActiveItem = {setActiveItem}
                    activeItem={activeItem}/>
                ))
            }
        </div>
    )
}
export default Services;
