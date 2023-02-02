import { Search } from "./components"
import { Button } from '../../ui'

function Header() {
    return (
        <header>
            <div className="container">
                <Search />
                <Button />
            </div>
        </header>
    )
}
export default Header