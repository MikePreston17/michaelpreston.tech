import React, { FC } from 'react'
const scale = 24;
import {
    Avatar, Image,
    Box, List,
    ListItem, Stack,
    Heading, Flex, Badge
} from '@chakra-ui/core'
const nothing = "No data found";
import { AirbnbCard } from './AirbnbCard'
import { Card } from './CardTemplates';
import { Text } from '@chakra-ui/core'

type Props = {
    entries: any[]
}

export const EntryList: FC<Props> = ({ entries }) => {

    const Records = entries.map((entry, key) => {
        // console.log('entry.fields :>> ', entry.fields);

        let {
            Name: title = nothing,
            Media: image = nothing,
            "Live Site": url = nothing,
            "GitHub Repo": repoUrl = nothing,
            Description: notes = nothing,
            Tech: tech = []
            // emoji = null,
        } = entry.fields || entry;

        console.log(title)

        let id = key;
        let imgUrl = image[0]?.url || 'No Link found';

        return (
            <Card
                // margin="10 10 0 0"
                key={id}>{{

                    header:
                        <Box bg="#fff">
                            <Heading color="upstack.orange.400" size="md">{title}</Heading>
                        </Box>,
                    // content: <p>{notes}</p>,
                    content:
                        <Flex align="baseline" mt={2}>
                            <Badge variantColor="teal">{tech[0]}</Badge>
                        </Flex>,
                    media: <Image
                        width={"50em"}
                        // clipPath="circle(50% at 50% 50%)"
                        rounded="md" src={imgUrl}></Image>,

                }}
            </Card>
        )
    })

    return (
        <div>{Records}</div>
    )
}



export default EntryList;


// <a href={url} key={id}>
//     <p hidden id={id}></p>
//     <Box>
//         <Box>
//             {/* <ZeitAvatar image={imgUrl} title={title} scale={scale} ></ZeitAvatar> */}
//             {/* <Avatar name={title} src={imgUrl}> </Avatar> */}
//             {/* <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
//         </Box>
//         <Box>
//             <span style={{}}>{title} </span>
//             <span className={title + "-span"}>
//                 | {notes}
//             </span>
//         </Box>
//     </Box>
// </a>
