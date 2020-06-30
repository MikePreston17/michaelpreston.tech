import React from 'react'
const scale = 24;
import { Avatar, Box } from '@chakra-ui/core'
const nothing = "No data found";

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
                <Box>
                    <Box>
                        <ZeitAvatar image={imgUrl} title={title} scale={scale} ></ZeitAvatar>
                        {/* <Avatar name={title} src={imgUrl}> </Avatar> */}
                        {/* <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
                    </Box>
                    <Box>
                        <span style={{}}>{title} </span>
                        <span className={title + "-span"}>
                            | {notes}
                        </span>
                    </Box>
                </Box>
            </a>
        )
    })

    return (
        <div>{Record}</div>
    )
}

export default EntryList;

const ZeitAvatar = (image, title, scale = 8) => {
    // console.log('image :>> ', image);
    return (
        <div>
            <img
                // style={styles.imageCircle}
                src={image.image}
                alt={title}>
            </img>
            <g>
                idk
            </g>
            {/* <style jsx>{`    
                width: "${scale}em",
                height: "${scale}em",
                clipPath: "circle(50% at 50% 50%)"
            `}
            </style> */}
        </div>
    );
}
