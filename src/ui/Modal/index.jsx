import ReactDOM from 'react-dom'
import { useBodyScrollLock } from '../../hooks';
import {Button} from '../index'

function Modal(props) {
    const { children, show = false, close = () => null,className} = props
    const CN = `modal${className ? ' ' + className : ''}`
    useBodyScrollLock(show)
    
    return (
        show &&
        ReactDOM.createPortal(
            <div className={CN}>
                <div className="modal__backdrop"  onClick={() => close()}/>
                <div className="modal__wrapper">
                    <div className="modal__header">
                        <Button onClick={() => close()} actionName='delete'/>
                    </div>
                    <div className="modal__content">
                        {children}
                    </div>
                </div>
            </div>,
            document.body)
    );
}
export default Modal;