import React from 'react'
const scale = 24;
const nothing = "No data found";
import { Avatar } from '@chakra-ui/core'

// const styles = {
//     title: {
//         fontWeight: "bold",
//         fontSize: 18,
//     },
//     body: {
//         fontFamily: "Fira Code",
//     },
//     imageBox: {
//         width: `${scale}em`,
//         height: `${scale}em`,
//     },
//     imageCircle: {
//         width: `${scale}em`,
//         height: `${scale}em`,
//         clipPath: "circle(50% at 50% 50%)"
//     }
// }

export const EntryList = props => {

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
            <a href={url} key={id}>
                <p hidden id={id}></p>
                <div>
                    <div
                    // className="cytol-auto px-3"
                    >
                        <ZeitAvatar image={imgUrl} title={title} scale={scale} ></ZeitAvatar>
                        {/* <Avatar name={title} src={imgUrl}> </Avatar> */}
                        {/* <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
                    </div>
                    <div>
                        {/* <span style={styles.title}>{title} </span> */}
                        {/* <span className={title + "-span"}>
                            | {notes}
                        </span> */}
                    </div>
                </div>
            </a>
        )
    })

    return (
        <div>{Record}</div>
    )
}



export default EntryList;

const ZeitAvatar = (image, title, scale = 8) => {
    console.log('image :>> ', image);
    return (
        <div className="cytol-auto px-3">
            <img
                // style={styles.imageCircle}
                src={image.image}
                alt={title}>
            </img>
            <style jsx>{`    
                width: "${scale}em",
                height: "${scale}em",
                clipPath: "circle(50% at 50% 50%)"
            `}
            </style>
        </div>
    );
}
