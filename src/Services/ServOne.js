import img1 from './img/item1.jpg';

const ServOne = () => {
    return (
        <div className='servItem'>
            <img src={img1} className='servImg' alt='pic' />
            <p className='servContent'>
                learn how to work with a potter's wheel under the guidance of a master, creating various objects
            </p>
        </div>

    )
}
export default ServOne;