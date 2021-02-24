import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import {changeCurrentSearch} from './Searchredditslice';


//Styles
const searchStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

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
    <div className={classes.search}>
      <Toolbar>
      <div className={classes.searchIcon}>
        <SearchIcon />
        <InputBase
            value={searchValue}
            placeholder={"Search..." + currentSubSliced}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search input' }}
            onChange={onTextChange}
        />
      </div>
      </Toolbar>
      
    </div>
  );
};

export default SearchReddit;