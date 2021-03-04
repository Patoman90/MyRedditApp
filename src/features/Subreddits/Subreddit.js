import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { getSubredditContent } from '../../app/Reddit';
import { addToSubs, changeCurrentSub } from '../Subreddits/Subredditslice';


//Styles
const contentStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
      },
    img: {
        maxWidth: 150,
        maxHeight: 150,
    },
  }));

//Subreddit content component
const SubredditContent = (props) => {
    const classes = contentStyles;
    const subReddits = useSelector(state => state.subreddits.subReddits);
    const dispatch = useDispatch();

    useEffect(() => getSubredditContent().then(json => {
        json.forEach(item => dispatch(
            addToSubs({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon,
            })));
    }), [dispatch]);

    return(
        <Grid container direction='column'>
            <Grid item >
                <Card className={classes.root}>
                    <ul>
                        {subReddits.map(item => (
                            <Link to="/" key={item.id}>
                                <li onClick={() => dispatch(changeCurrentSub(item.url))} >
                                    {item.name}
                                    <img className={classes.img} src={item.icon} onError={(event) => event.target.src = props.logo} alt=''/>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </Card>
            </Grid>
        </Grid>
    );
}

export default SubredditContent;