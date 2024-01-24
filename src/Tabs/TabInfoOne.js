import img1 from './Img/item1.jpg';

const TabInfoOne = () => {
    return (
        <div className='tabItem'>
            <img src={img1} className='tabImg' alt='pic' />
            <p className='tabContent'>
                learn how to work with a potter's wheel under the guidance of a master, creating various objects
            </p>
        </div>

    )
}
export default TabInfoOne