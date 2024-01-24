import Menu from './Menu';
import './style.css';

const Content = ({ setIsOpenModal }) => {
    return (
        <div className="modal_content">
            <Menu/>
            <div className='btnCloseWrap'>
            <button onClick={() => setIsOpenModal(false)} className='btnClose'>
                <span className='close'></span>
                <span className='close'></span>
            </button>
            </div>
            
        </div>
    )
}
export default Content;