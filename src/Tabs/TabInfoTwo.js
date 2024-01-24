import img2 from './Img/item2.jpg';

const TabInfoTwo = () => {
    return (
        <div className='tabItem'>
            <img src={img2} className='tabImg' alt='pic' />
            <p className='tabContent'>
                you will learn several types of glaze and painting
            </p>
        </div>
    )
}
export default TabInfoTwo;