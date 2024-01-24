import './style.css';

const Modal = ({ setIsOpenModal, children }) => {
    const closeModal = e => {
        if(e.target.classList.contains('overlay')) {
            setIsOpenModal(false);
        }
    }
    return(
        <div className='modal'>
            <div className='overlay' onClick={closeModal}>
                {children}
            </div>
        </div>
    )
}
export default Modal;