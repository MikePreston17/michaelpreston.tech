import EntryContextProvider from '../contexts/EntryContext'
import PerfectScrollbar from "react-perfect-scrollbar"
import Gallery from './Gallery'

const Index = () => {

    return (

        <EntryContextProvider>
            <PerfectScrollbar>
                <div className="container">
                    <h2>Hello, </h2>
                    <i>I'm Michael Preston</i>
                    <p>Let's make code together</p>
                    <Gallery />
                </div>
            </PerfectScrollbar>
        </EntryContextProvider>
    )
}

export default Index;