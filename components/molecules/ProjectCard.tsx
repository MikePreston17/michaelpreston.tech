// Sample card from Airbnb

import { Box, Badge, Image, Link, Icon, Heading, Flex } from "@chakra-ui/core";
import { FC } from 'react';
import { Project } from "../models";

type Props = {
    project: Project
}

// Array.prototype.take = (n: number) => { return null }

export const ProjectCard: FC<Props> = ({ project }) => {
    let {
        Name,
        Media,
        Website,
        Description,
        Repository,
        Tech,
        Contributors
    } = project;

    return (
        <Box>

            {Media
                ?? <Image
                    rounded="md"
                    src={Media} alt={Name} />
                // : <Heading color="kiyap.giraffe.300" size="md">{Name}</Heading>
            }

            <Flex
                d="flex"
                alignItems="baseline"
                mt={4}
            >
                {Tech
                    && Tech.map(techName =>
                        <Badge rounded="full" px="2" variantColor="teal">
                            {techName}
                        </Badge>)
                }

                {
                    Contributors &&
                    Contributors.map(teammate => {
                        // TODO: Github Avatar
                        // <Avatar></Avatar>

                        <Link href={teammate.LinkedIn} isExternal></Link>
                    })
                }

                <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                >
                    {Description || "No description"}
                </Box>
            </Flex>
        </Box>
    )
}

{/* {beds} beds &bull; {baths} baths */ }
{/* 
<Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {Name}
                </Box>

                <Box>
                    {/* {Contributors} */}
{/* <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box> */}
        //</Box >

/* <Box d="flex" mt="2" alignItems="center">
    {Array(5)
        .fill("")
        .map((_, i) => (
            <Icon
                key={i}
                color={i < rating ? "teal.500" : "gray.300"}
            />
        ))}
    <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {Contributors}
    </Box>
</Box> */
