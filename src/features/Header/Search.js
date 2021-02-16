import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {changeCurrentSearch} from './Searchredditslice';

//Styles
const searchStyles = makeStyles((theme) => ({

}));

//Search component
const SearchReddit = () => {
  const classes = searchStyles;
  const dispatch = useDispatch();

  const currentSubSliced = useSelector(state => state.subreddits.activeSubreddit).slice(3, -1);
  const searchValue = useSelector(state => state.search);
  
  const onTextChange = (e) => {
      dispatch(changeCurrentSearch(e.target.value));
  }

  return (
    <input
        id="Search"
        value={searchValue}
        placeholder={"Search..." + currentSubSliced}
        onChange={onTextChange}
    />
  );
};

export default SearchReddit;