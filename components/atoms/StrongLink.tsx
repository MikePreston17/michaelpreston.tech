import { Typography, Icon } from '@material-ui/core'
import Link from 'next/link'
import classNames from 'classnames'
import { FC } from 'react';
import { BasicProps } from './molecules/BasicProps';

interface StrongLinkProps extends BasicProps {
    index: number,
    route: string,
    icon?: string,
    iconStyle: object
}

/** A button-link with nice MUI Typography */
//https://github.com/mui-org/material-ui/issues/16846
export const StrongLink: FC<StrongLinkProps> = ({
    index, icon, route, iconStyle
}) => {
    return (
        <Typography component="li" key={index}>
            {icon && <Icon className={classNames(icon, iconStyle)} />}
            {route &&
                <Link href="http://github.com">
                    <a>
                        {name}
                    </a>
                </Link>}
        </Typography>)
}

export default StrongLink;