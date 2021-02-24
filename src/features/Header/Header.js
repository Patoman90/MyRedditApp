import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import RedditIcon from '@material-ui/icons/Reddit';

import  { useDispatch } from 'react-redux';
import { changeCurrentSub } from '../Subreddits/Subredditslice';
import SearchReddit from './Search';


//Styles
const headerStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    RedditIcon: {
      marginRight: theme.spacing(2),
      color:'white',
    },
  }));

const Header = () => {
    const classes = headerStyles;
    const dispatch = useDispatch();
    const onIconClicked = () => {
        dispatch(changeCurrentSub("/r/Home"));
    }


    return(
            <Container minWidth="xs">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Grid item xs={12}>
                                <RedditIcon className={classes.RedditIcon} onClick={onIconClicked} />
                            </Grid>
                            <Grid item xs={12}>
                                <h1 className={classes.title} noWrap>
                                    Reddit Bookworm
                                </h1>
                            </Grid>
                            <Grid item xs={12}>
                                <SearchReddit />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
    );

}

export default Header;