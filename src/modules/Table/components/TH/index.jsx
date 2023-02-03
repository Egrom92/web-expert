function TH(props) {
    const {className} = props

    const CN = `TH${className ? ' ' + className : ''}`
    return (
        <div className={CN}>
            <span className='id'>ID</span>
            <span className='name'>Name</span>
            <span className='username'>Username</span>
            <span className='email'>Email</span>
            <span className='action'></span>
        </div>
    )
}

export default TH