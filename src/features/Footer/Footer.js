import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';




//Styles
const footerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    title: {
        textAlign: 'center',
        flexGrow: 1,
      },
  }));

const Footer = () => {

    const classes = footerStyles;

    return(
        <Container minWidth="xs">
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid item xs={12}>
                            <h2 className={classes.title} noWrap>
                                Project by Patrick Trollip
                            </h2>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );

}

export default Footer;