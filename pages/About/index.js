import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridListTile from '@material-ui/core/GridListTile';
import { Jumbotron } from 'reactstrap';
import Recommendations from './recommendations';

const styles = theme => ({
    grid: {
        padding: theme.spacing(2),
        margin: "auto",
        position: "relative",
        top: "25 %",
        width: "50 %",
        height: "50 %"
    },

    // toolbar: {
    //     color: "white",
    //     backgroundColor: "#0079c1"
    // },

    card: {
        // "max-width": "700px",
        // "height": "320px"
        //   margin: '40px'
        "align-content": 'center',
        "max-width": "170%",
        "max-height": "250%",
    },

    jumbo: {
        "max-width": "120%",
        backgroundColor: '#f20c4a',
    },

    navbar: {
        'color': '#111',
    }
});

const About = (props) => {

    const { classes } = props;
    const { card, jumbo } = classes;

    return (
        <div className="alignLeft">
            <Jumbotron className={jumbo}>
                <h2>Brand Statement</h2>
            </Jumbotron>

            <GridListTile cols={1}>
                <Card className={card}>
                    <CardContent>
                        <Typography className={card} component="p">
                            Full Stack Web Developer with a background in .NET development.  I am known for my  ability to find solutions that lead to success, foster team cohesion, pursue excellence, and work with a high degree of integrity.  I enjoy helping fixing others' problems, big or small.  I felt a need to explore the tech world and keep up to date with the latest and greatest techniques, practices and ideas.  I sought out a bootcamp to both help prepare a professional portfolio and learn some front-end technologies that inspire.
                            I completed the bootcamp through Southern Methodist University where I expanded my knowledge in Javascript, ES6/7, MERN stack, and RESTful APIs.  I believe my tech skills combined with my ability to handle multiple projects and work well across organizations that make me a valuable asset to any team.
                        </Typography>
                    </CardContent>
                </Card>
            </GridListTile>

            <br />

            <Jumbotron className={jumbo}>
                <h2>In my spare time I enjoy...</h2>
            </Jumbotron>

            <GridListTile cols={1}>
                <Card className={card}>
                    <CardHeader title="Organic Cooking" />
                    <CardContent>
                        <Typography className={card} component="p">
                            I learned (self-taught) to cook, whipping up recipes from my imagination and writing the successful (i.e. not burnt) ones down.  My rule is that all ingredients must be Organic - it all tastes so much better!

                            Since starting in 2015, I've been known to test out my creations on my family and peers!  My favorite tool is my Instant Pot: anything can be thrown in it and you got a meal.

                            I'm particular to making sweets, namely ice cream and cookies, but I've been looking to expand into baked goods.
                        </Typography>
                    </CardContent>
                </Card>
                <br />
            </GridListTile>
            <GridListTile cols={1}>
                <Card className={card}>
                    <CardHeader title="Martial Arts" />
                    <CardContent>
                        <Typography component="p">
                            My interest in martial arts stemmed from seeing others perform when I was a kid - I'd always wanted to be able to Karate chop a block in half.  So far, I've managed to do a decent job on boards; concrete HURTS!

                            I've done quite a bit in my first 20 or so years.  In college I joined the Texas Blackbelt Academy's Taekwondo class and the Fencing Club.  Training to parry, riposte and jab enhanced my tone and wits while kicking shields, executing forms and sparring improved my flexibility.

                            In additon to my two belts in Taekwondo, in 2019 I achieved an orange belt in Krav Maga.

                        </Typography>
                    </CardContent>
                </Card>
            </GridListTile>

            <br />

            <Recommendations />
        </div>
    );
}

export default withStyles(styles)(About);
