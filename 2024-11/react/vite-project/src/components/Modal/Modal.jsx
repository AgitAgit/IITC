import './Modal.css';

function Modal({isOpen}){
    return(
        <div className='modal'>
            <h2>Modal Title</h2>
            {   (isOpen ?
                    <p>This is the modal content.</p>
                    :
                    null
                )
            }
        </div>
    )
}

export default Modal;