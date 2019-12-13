import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { Jumbotron } from 'reactstrap';
import GridListTile from '@material-ui/core/GridListTile';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import classNames from 'classnames';

const styles = theme => ({
    recommendation: {
        color: '#f20c4a',
        "font-size": '120%',
        background: "white",
        "font-weight": 'bold',
    },

    jumbo: {
        "max-width": "120%",
        backgroundColor: '#f20c4a',
    },

    card: {
        "align-content": 'center',
        "max-width": "170%",
        "max-height": "250%",
    },

    menu: {
        color: '#f20c4a'
    },

    linkedIn: {
        color: '#0077B5'
    }
})

const Recommendations = (props) => {

    const { linkedIn, recommendation, jumbo, card } = props.classes;

    return (
        <div>
            <Jumbotron className={jumbo}>
                <h2>Recommendations:</h2>
            </Jumbotron>

            <GridListTile cols={1}>
                <Card className={card}>
                    <CardContent>
                        <Typography component="i" className={recommendation}>
                            "Michael is an extremely knowledgeable developer, and a strong team asset. He is quick to be generous to share his knowledge, dive into troubleshooting, and goes above and beyond to research, ask questions, and understand concepts deeply. Michael is a creative problem-solver, and designs solutions that add clarity and grace to the problems or goals being targeted." - Andrasta Seatts
                            <Button href="https://www.linkedin.com/in/andrasta-seatts-a21ab4a5/ ">
                                <Icon className={classNames("fab fa-linkedin", linkedIn)}></Icon>
                            </Button>
                        </Typography>

                    </CardContent>
                </Card>
            </GridListTile>

            <br />

            <GridListTile cols={1}>
                <Card className={card}>
                    <CardContent>
                        <Typography component="i" className={recommendation}>
                            "Michael is a highly motivated programmer and will go above and beyond to get the best possible project delivered. His input was invaluable and I learned quite a bit from his example. He would be a valuable asset to any team, and I would consider myself very lucky to be on the same team as him in the future." - Daniel Reynolds
                            <Button href="https://www.linkedin.com/in/daniel-s-reynolds/">
                                <Icon className={classNames("fab fa-linkedin", linkedIn)}></Icon>
                            </Button>
                        </Typography>
                    </CardContent>
                </Card>
            </GridListTile>
        </div >
    );
}

export default withStyles(styles)(Recommendations);