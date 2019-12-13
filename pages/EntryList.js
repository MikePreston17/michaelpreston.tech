const styles = {
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    body: {
        fontFamily: "Fira Code"
    }
}

const EntryList = props => {

    console.log(props);

    const Entry = props.entries.map((entry, key) => {

        const nothing = "No data found";
        let {
            Name: title = nothing,
            Media: image = nothing,
            "Live Site": url = nothing,
            "GitHub Repo": repoUrl = nothing,
            Description: notes = nothing,
            emoji = null,
            Tech: tech
        } = entry.fields;

        let id = key;
        let imgUrl = image[0].url;
        
        return (

            <a style={styles.body} href={url} key={id}>
                <p hidden id={id}></p>
                <div>
                    <div><img className="round-img" src={imgUrl} alt={title}></img>
                    </div>
                    <div>
                        <span style={styles.title}>{title} </span>
                        <span className="">
                            | {notes}
                        </span>
                    </div>
                </div>
            </a>
        )

    })

    return (
        <div>{Entry}</div>
    )
}

export default EntryList;
