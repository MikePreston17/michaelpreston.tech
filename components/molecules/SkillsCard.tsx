import { Card } from './CardTemplates'
import { Technology, SoftSkill } from '../../models';
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

    let years = Math.floor(duration);
    let months = (years < 1) ? duration * 12 : 0

    return (
        <Flex
            // border="2px orange dotted"
            align="baseline"
            mt={2}
            mb={2}
            shadow="md"
            p={5}
            // maxWidth="30em"
            // minWidth="30em"
            width="30em"
        >

            <Card>{{
                // header:
                //     <Box bg="#fff">
                //         <Heading color="upstack.orange.400" size="md">{title}</Heading>
                //     </Box>,
                // content: <p>{notes}</p>,
                media: <Image
                    maxWidth={"5em"}
                    // minWidth={"120px"}
                    rounded="md"
                    src={url}
                    alt={title}
                // clipPath="circle(50% at 50% 50%)"
                />,
                content:
                    <Box
                        borderWidth="3px"
                        mb={3}
                        // shadow="1 1px 5px upstack.teal.700"
                    // boxShadow: '1 1px 5px rgba(0,0,0,0.2)',
                    // border="2px upstack.teal.700 dashed"
                    >
                        <Text
                            color="upstack.teal.700"
                            mt={2}>
                            {description}
                        </Text>

                        <Text mt={2}><b>Last Used: </b>{end}</Text>

                        {
                            (years >= 1) &&
                            <Badge
                                color="upstack.orange.800"
                                bg="upstack.orange.300"
                            >Years: {years}</Badge>}
                        {
                            (years < 1) &&
                            <Badge
                                color="upstack.teal.700"
                                bg="upstack.teal.500"
                            >Months: {months.toPrecision(1)}</Badge>
                        }
                        <Text fontWeight="bold">Rating {rating}/({maxRating})</Text>
                    </Box>
            }}
            </Card>
        </Flex>
    );
}

export default SkillCard;