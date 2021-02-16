import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RedditIcon from '@material-ui/icons/Reddit';

import  { useDispatch } from 'react-redux';
import { changeCurrentSub } from '../Subreddits/Subredditslice';
import { SearchReddit } from './Search';

//Styles
const headerStyles = makeStyles((theme) => ({
    icon: {},
    heading: {},
  }));

const Header = () => {
    const classes = headerStyles;
    const dispatch = useDispatch();
    const onIconClicked = () => {
        dispatch(changeCurrentSub("/r/Home"));
    }


    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <header>
                    <div>
                        <Link to="/"><RedditIcon/></Link>
                        <h1>Reddit Bookworm</h1>
                        <SearchReddit/>
                    </div>
                </header>
            </Grid>
        </Grid>
    );

}

export default Header;