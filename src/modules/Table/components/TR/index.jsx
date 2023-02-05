import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Template from './Template'

function TR(props) {
    const { className, user } = props

    const CN = `TR${className ? ' ' + className : ''}`


    return (
        <NavLink
            to={`/user/${user.id}`}
            className={CN}
        >
            <Template user={user} Skeleton={Skeleton} />
        </NavLink>
    )
}

export default TR