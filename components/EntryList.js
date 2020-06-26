import React from 'react'
import Project from '../models/Project';
const scale = 24;
const nothing = "No data found";

const styles = {
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    body: {
        fontFamily: "Fira Code",
    },
    imageBox: {
        width: `${scale}em`,
        height: `${scale}em`,
    },
    imageCircle: {
        width: `${scale}em`,
        height: `${scale}em`,
        clipPath: "circle(50% at 50% 50%)"
    }
}

const ProjectList = props => {
    
    const Record = props.entries.map((entry, key) => {
        // console.log('entry.fields :>> ', entry.fields);
        let {
            Name: title = nothing,
            Media: image = nothing,
            "Live Site": url = nothing,
            "GitHub Repo": repoUrl = nothing,
            Description: notes = nothing,
            emoji = null,
            Tech: tech = []
        } = entry.fields;

        let id = key;
        let imgUrl = image[0].url;

        return (
            <a style={styles.body} href={url} key={id}>
                <p hidden id={id}></p>
                <div>
                    <div
                        className="cytol-auto px-3"
                    >
                        <img className="round-img"
                            style={styles.imageCircle}
                            src={imgUrl}
                            alt={title}>
                        </img>
                    </div>
                    <div>
                        <span style={styles.title}>{title} </span>
                        <span className={title + "-span"}>
                            | {notes}
                        </span>
                    </div>
                </div>
            </a>
        )

    })

    return (
        <div>{Record}</div>
    )
}

export default ProjectList;
