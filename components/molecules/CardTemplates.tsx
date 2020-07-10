import React, { FC, ReactNode, ReactChild } from 'react';
import { Box } from '@chakra-ui/core';

type Props = {
    children: ReactChild | ChildSlots
}

type ChildSlots = {
    content: ReactNode
    header?: ReactNode
    actions?: ReactNode
    media?: ReactNode
}

export const Card: FC<Props> = (props) => {
    // console.log('props :>> ', props);

    const { children } = props;

    if (!children)
        throw new Error('Children are required for this component.')

    {/* Composing a card with children as slots (renders) */ }

    if (areNamedSlots(children)) {
        const { header, content, media, actions } = children// || {}

        return (
            <Box className="card">
                {header && <div className="card-header">{header}</div>}
                {media && <div className="card-media">{media}</div>}
                {content && <div className="card-content">{content}</div>}
                {actions && <div className="card-actions">{actions}</div>}
            </Box>
        )
    }
    else return <div className="card">{children}</div>
}

const isObject = <T extends object>(value: any): value is T => typeof value === 'object' && typeof value !== 'function' && value != undefined
const areNamedSlots = (children: any): children is ChildSlots => isObject(children) && 'content' in children

export default Card