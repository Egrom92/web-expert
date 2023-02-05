

function Header(props) {
    const { children } = props
    return (
        <header className='header-section'>
            <div className="container">
                <div className="header">
                    {children}
                </div>
            </div>
        </header>
    )
}
export default Header