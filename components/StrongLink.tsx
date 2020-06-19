import { Typography, Icon, Link } from '@material-ui/core'
import classNames from 'classnames'
import { FC } from 'react';

type LinkProps = {
    index: number,
    route: string,
    icon?: string,
    iconStyle: object
}

//https://github.com/mui-org/material-ui/issues/16846
const StrongLink: FC<LinkProps> = ({
    index, icon, route, iconStyle
}) => {

    return (
        <Typography component="li" key={index}>
            {/* {icon && <Icon className={classNames(icon, iconStyle)} />}
            <Link
                component="a"
                to="http://github.com"
            // to={route}
            >
                {name}
            </Link> */}
        </Typography>)
}

export default StrongLink;