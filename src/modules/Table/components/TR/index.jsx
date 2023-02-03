import Skeleton from 'react-loading-skeleton'
import Template from './Template'

function TR(props) {
    const {className, user} = props

    const CN = `TR${className ? ' ' + className : ''}`

    return (
        <div className={CN}>
            <Template user={user} Skeleton={Skeleton}/>
        </div>
    )
}

export default TR