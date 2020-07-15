import { Box, Badge, Image, Link, Icon, Heading, Flex, Button } from "@chakra-ui/core";
import { FC } from 'react';
import { Project } from "../../models";
import Card from "./CardTemplates";

type Props = {
    project: Project
}

// Array.prototype.take = (n: number) => { return null }

export const ProjectCard: FC<Props> = ({ project }) => {
    const {
        Name,
        Media,
        Website,
        Description,
        Repository,
        Tech,
        Contributors
    } = project;

    let imgUrl = Media[0]?.url || 'No Link found';
// console.log('Media :>> ', Media[0]);
    return (
        <Box
            // padding="15px"
            mb={10}
            p={4}
            display={{ md: "flex" }}
            // height="100%"
            // width="100%"
            borderRadius="25px"
            bg="upstack.blue.500"
            verticalAlign="center"
        >
            <Card>{{

                header:
                    <Box bg="#fff">
                        <Heading color="upstack.orange.400" size="md">{Name}</Heading>
                    </Box>,
                content:
                    <Flex
                        d="flex"
                        alignItems="baseline"
                        mt={4}
                        mb={4}
                    >
                        {Tech.map((techName, key) => <Badge variant="outline" key={key} margin='2px' variantColor="teal">{techName}</Badge>)}
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
                    </Flex>,
                media:
                    <Box flex="shrink">
                        <Image
                            alt={Name}
                            src={imgUrl}
                            height="100%"
                            rounded="lg"
                        // clipPath="circle(50% at 50% 50%)"
                        // width={"50em"}
                        >
                        </Image>
                    </Box>,
                actions: <Flex>
                    <Button onClick={() => alert("all hands on deck!")}>One</Button>
                    <Button>Two</Button>
                </Flex>
            }}
            </Card>
        </Box>
    )
}