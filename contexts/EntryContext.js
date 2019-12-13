import React, { Component } from 'react'
import axios from 'axios'
export const EntryContext = React.createContext()
const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_RESUME_BASE;

class EntryContextProvider extends Component {
    state = {
        entries: []
    }
    componentDidMount() {

        if (!apiKey || !baseId)
            console.warn('Invalid api keys, could not fetch any Airtable data');

        const fetchData = () => {
            axios
                .get(`https://api.airtable.com/v0/${baseId}/Projects?api_key=${apiKey}`)
                .then(({ data }) => {
                    console.log('data retrieved?', data.records)
                    this.setState({
                        entries: data.records
                    })
                })
                .catch(console.log)
        }
        fetchData();
    }
    render() {
        return (
            <EntryContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </EntryContext.Provider>
        )
    }
}
export default EntryContextProvider