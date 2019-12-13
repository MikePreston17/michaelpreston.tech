import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";
import ClipboardJS from 'clipboard';
import classNames from 'classnames';

const styles = theme => ({
    header: {
        color: '#fff'
    },
    panel: {
        background: "#fff"
    },
    button: {
        border: '1px solid transparent',
        color: '#f20c4a',
        margin: '3px',
        background: 'paper',
        "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    },
})

const Contact = (props) => {

    const { classes } = props;
    const { button, header, panel } = classes;
    const email = "michael.n.preston@gmail.com";

    return (
        <div className='alignLeft'>
            <h1 className={header}>Contact Me!</h1>
            <div className={panel}>
                <ul>
                    <ListItem>Mobile: (817) 565-2372</ListItem>
                    <ListItem>Email: michael.n.preston@gmail.com</ListItem>

                    <Tooltip title="Shoot me an Email!">
                        <Button className={button} href={"mailto:" + email}>
                            <Icon className="far fa-envelope-open" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Let's Connect!">
                        <Button className={button} href="https://www.linkedin.com/in/michael-n-preston/">
                            <Icon className="fab fa-linkedin" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Copy to clipboard">
                        <Button className={classNames(button, "btn")} data-clipboard-text={email}>
                            <Icon className="fas fa-clipboard" />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Download my Resume!">
                        <Button className={button} download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                            <Icon className="fas fa-download" />
                        </Button>
                    </Tooltip>

                </ul>
            </div>
        </div>
    )
};

// eslint-disable-next-line
var clipboard = new ClipboardJS('.btn');
// clipboard.destroy(); //TODO: Use in componentWillUnmount or destructor.

export default withStyles(styles)(Contact);
