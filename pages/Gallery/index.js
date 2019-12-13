import { EntryContext } from '../../contexts/EntryContext'
import EntryList from '../EntryList'

const Gallery = () =>
    (
        <EntryContext.Consumer>
            {(context) => {
                const { entries } = context;
                console.info(`Loaded ${entries.length} project entries!: `)

                let sortedEntries = entries.sort((a, b) => a.fields.order - b.fields.order)

                //TODO: cache entries to user's localstorage here.
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