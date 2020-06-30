// Sample card from Airbnb

import { Box, Badge, Image, Icon } from "@chakra-ui/core";
import { FC } from 'react';
import { Project } from "../../models";

export const ProjectCard: FC<Project> = ({
    Name,
    Media,
    Website,
    Description,
    Repository,
    Tech,
    Contributors,
}) => {
    return (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src={Media} alt={Name} />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge rounded="full" px="2" variantColor="teal">
                        {/* {badgeText} */}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {Description}
                        {/* {beds} beds &bull; {baths} baths */}
                    </Box>
                </Box>
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {Tech}
                </Box>

                <Box>
                    {Contributors}
                    {/* <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                    </Box> */}
                </Box>

                {/* <Box d="flex" mt="2" alignItems="center">
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
                </Box> */}
            </Box>
        </Box>
    );
}