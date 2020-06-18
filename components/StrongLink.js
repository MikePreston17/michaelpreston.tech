import {Typography} from '@material-ui/core'
const StrongLink = () => <Typography component="li" key={index}>
{icon && <Icon className={classNames(icon, iconStyle)} />}
<Link to={route}>{name}</Link>
</Typography>

export default StrongLink;