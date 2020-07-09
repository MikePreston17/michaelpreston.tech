import { Card } from './Card'
import { Technology, SoftSkill } from '../models/Airtable';
import { FC } from 'react';

interface SkillCardProps {
    skill: Technology
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => {

    let { Name, Notes, TimeUsed
        , "First Used": firstUse, "Last Used": lastUse } = skill;


        
    return (
        <Card
            imageUri={""}
            maxRating={5}
            rating={2.4}
        >

        </Card>
    );
}
