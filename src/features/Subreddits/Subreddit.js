import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { getSubredditContent } from '../../app/Reddit';
import { addToSubs, changeCurrentSub } from '../Subreddits/Subredditslice';


//Styles
const contentStyles = makeStyles((theme) => ({

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
                icon: item.community_icon.split("?")[0],
            })));
    }), [dispatch]);

    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <section>
                    <ul>
                        {subReddits.map(item => (
                            <Link to="/" key={item.id}>
                                <li onClick={() => dispatch(changeCurrentSub(item.url))}>
                                    {item.name}
                                    <img src={item.icon} onError={(event) => event.target.src = props.logo}/>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </section>
            </Grid>
        </Grid>
    );
}

export default SubredditContent;