import { Row, Header } from './components'

function Table() {
    return (
        <section className='table'>
            <div className="container">
                <Header />
                <Row />
                <Row />
                <Row />
            </div>
        </section>
    )
}

export default Table