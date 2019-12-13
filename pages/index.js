import EntryContextProvider from '../contexts/EntryContext'
import PerfectScrollbar from "react-perfect-scrollbar"
import Gallery from './Gallery'

console.log(process.env.AIRTABLE_RESUME_BASE, process.env.AIRTABLE_API_KEY);

const projects =
    [
        {
            title: "Kiyap",
            imgUrl: "",
            url: "",
            notes: "Connect with your martial arts friends and schools!",
            emoji: ""
        },
        {
            title: "PC-Builder",
            imgUrl: "",
            url: "",
            notes: "Build a rig using our custom autobuilder!",
            emoji: ""
        },
    ]

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