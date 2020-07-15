import React, { FC } from 'react'
import { ProjectCard } from './ProjectCard';
import { Project } from 'models';

type Props = {
    entries: Project[]
}

export const ProjectList: FC<Props> = ({ entries }) => {

    const Records = entries.map((project) => {

        return (
            <ProjectCard project={project}/>
        )
    })

    return (
        <div>{Records}</div>
    )
}

export default ProjectList;