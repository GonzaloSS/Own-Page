import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import angular from '../img/angular.png'
import ionic from '../img/ionic.png'
import react from '../img/react.png'
import node from '../img/node.png'
import odoo from '../img/odoo.png'
import deno from '../img/deno.png'
import typescript from '../img/typescript.png'
import javascript from '../img/javascript.png'


import '../skillList.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        background: "black",
        color: "white",
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));


export default function SkillList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="script" src={typescript} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Typescript</Typography>
                        <Typography noWrap>Nivel: Alto </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="script" src={javascript} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Javascript</Typography>
                        <Typography noWrap>Nivel: Alto </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="imagen" src={angular} /></Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>Skill: Angular</Typography>
                        <Typography noWrap>Nivel: Medio </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="ionic" src={ionic} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Ionic</Typography>
                        <Typography noWrap>Nivel: Medio </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="imagen" src={react} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: React</Typography>
                        <Typography noWrap>Nivel: Bajo </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="imagen" src={node} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Node.js</Typography>
                        <Typography noWrap>Nivel: Medio </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="imagen" src={odoo} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Odoo/Python</Typography>
                        <Typography noWrap>Nivel: Medio </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar><img class="imagen" src={deno} /></Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography noWrap>Skill: Deno</Typography>
                        <Typography noWrap>Nivel: Bajo </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}