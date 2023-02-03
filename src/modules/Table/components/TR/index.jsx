import {Button} from '../../../../ui'

function TR(props) {
    const {className, user} = props

    const CN = `TR${className ? ' ' + className : ''}`

    return (
        <div className={CN}>
            <span className='id'>{user.id}</span>
            <span className='name'>{user.name}</span>
            <span className='username'>{user.username}</span>
            <span className='email'>{user.email}</span>
            <span className='action'>
                <Button className='TR__edit' actionName='edit'/>
                <Button className='TR__delete' actionName='delete'/>
            </span>
        </div>
    )
}

export default TR