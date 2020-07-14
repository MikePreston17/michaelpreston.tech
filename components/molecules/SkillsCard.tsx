import { Card } from './CardTemplates'
import { Technology, SoftSkill } from '../../models';
import { FC } from 'react';
import { Image, Flex, Text, Box, Stack, Badge, Heading } from '@chakra-ui/core';

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

    // clipPath="circle(50% at 50% 50%)"

    return (
        <Flex
            maxWidth="40em"
            rounded='5'
            color="upstack.blue.500"
            padding="18px"
            borderRadius="25px"
            bg="upstack.orange.300"
            // boxShadow='0 5px 15px 3px rgba(0, 105, 135, .4)'
            // boxShadow='inset 3px 1px 1px 3px #f4245c'
            boxShadow='inset 0 1px 10px 3px rgba(244,36,92,0.5)'
        // height="100%"
        // maxHeight="80em"
        // overflowY="auto"
        >
            {/* Inner box */}
            <Box
                padding="15px"
                height="100%"
                width="100%"
                borderRadius="25px"
                // boxShadow="0 1px 10px 2px #886be1"
                boxShadow="0 3px 15px 5px rgba(35,194,174,0.50)"
                bg="upstack.cream.500"
                verticalAlign="center"
            >
                <Card>{{
                    header:
                        <Box
                            // width="100%"
                            bg="upstack.cream.500">
                            <Heading color="upstack.orange.400" size="md">{title}</Heading>
                        </Box>,
                    media: <Image
                        maxWidth="5em"
                        rounded="md"
                        src={url}
                        alt={title}
                    />,
                    content:
                        <Box
                            width="100%"
                            height="100%"
                            mb={3}
                        // borderWidth="3px"
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
            </Box>
        </Flex>
    );
}

export default SkillCard;