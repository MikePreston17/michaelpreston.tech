import { EntryContext } from '../../contexts/EntryContext'
import EntryList from '../EntryList'

const Gallery = () =>
    (
        <EntryContext.Consumer>
            {(context) => {
                const { entries } = context;                
                console.info(`Retrieved ${entries.length} entries!: `, entries)

                let sortedEntries = entries.sort((a, b) => a.fields.order - b.fields.order)

                return (
                    <>
                        <h3><u>Projects</u></h3>
                        <EntryList entries={sortedEntries} />
                    </>
                )
            }}
        </EntryContext.Consumer>
    )

export default Gallery;