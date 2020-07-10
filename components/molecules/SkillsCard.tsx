import { Card } from './molecules/CardTemplates'
import { Technology, SoftSkill } from '../models/Airtable';
import { FC } from 'react';
import { Image, Flex, Text, Box, Stack, Badge } from '@chakra-ui/core';

interface SkillCardProps {
    title: string,
    duration: number,
    url?: string,
    rating: number,
    description: string,
    end?: Date,
    start?: Date,
}

const maxRating = 5;

export const SkillCard: FC<SkillCardProps> = ({ title, duration, url, rating, description, end }) => {

    let years = (duration * 12) % 12;
    let months = duration * 12;

    return (
        <Card>{{
            // header:
            //     <Box bg="#fff">
            //         <Heading color="upstack.orange.400" size="md">{title}</Heading>
            //     </Box>,
            // content: <p>{notes}</p>,
            content:
                <Flex
                    border="2px orange dotted"
                    align="baseline" mt={2}>
                    <Box
                        mb={2}
                        border="2px upstack.teal.700 dashed"
                    >
                        <Text mt={2}>{description}</Text>
                        <Text mt={2}><b>Last Used: </b>{end}</Text>
                        <Badge
                            color="upstack.teal.700"
                            bg="upstack.teal.500"
                        >Months: {months}</Badge>
                        <Badge
                            color="upstack.orange.800"
                            bg="upstack.orange.300"
                        >Years: {years}</Badge>
                        {/* <p>{years}</p> */}
                    </Box>
                </Flex>,
            media: <Image
                maxWidth={"5em"}
                rounded="md" src={url}
                alt={title}
            // clipPath="circle(50% at 50% 50%)"
            />,
        }}
        </Card>
    );
}

export default SkillCard;