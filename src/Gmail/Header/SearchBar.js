// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Package Imports
import { withStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper'

//icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

const searchBarStyles = {
  searchFocus: {
    padding: '8px',
    margin: '0px 130px 0px 0px',
    'border-top': '1px solid rgb(0, 0, 0, 0.08)',
    'background-color': 'transparent',
    flexGrow: 1,
    transition: 'background 100ms ease-in,width 100ms ease-out'
  },
  searchBlur: {
    padding: '8px',
    margin: '0px 130px 0px 0px',
    'border-top': '1px solid rgb(0, 0, 0, 0)',
    'background-color': '#f5f5f5',
    flexGrow: 1,
    transition: 'background 100ms ease-in,width 100ms ease-out'
  },
  formControl: {
    width: '100%',
  },
  searchButton: {
    padding: 2,
    margin: 0,
  },
  searchIcon: {
    padding: '0 2 0 2',
    margin: 4,
  },
  searchArrow: {
    padding: 5,
    margin: 0,
  },
};

class SearchBar extends React.Component {
  state = {
    searching: false,
  };

  searchFocus = () => {
    this.setState(state => ({ searching: true }));
  };

  searchBlur = () => {
    this.setState(state => ({ searching: false }));
  };

  render() {
    const { classes } = this.props;
    let paperClass, paperElevation;

    if (this.state.searching) {
      paperElevation = 1;
      paperClass = classes.searchFocus;
    } else {
      paperElevation = 0;
      paperClass = classes.searchBlur;
    }

    return(
      <Paper elevation={paperElevation} className={paperClass}>
        <FormControl className={classes.formControl}>
          <Input
            id="adornment-password"
            type='text'
            disableUnderline={true}
            fullWidth={true}
            placeholder='Search mail'
            onFocus={this.searchFocus}
            onBlur={this.searchBlur}
            startAdornment={
              <InputAdornment position="start">
                <IconButton className={classes.searchButton}>
                  {<SearchIcon className={classes.searchIcon}/>}
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={classes.searchArrow}>
                  {<ArrowDropDownIcon className={classes.searchIcon} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
    )
  }
}

export default withStyles(searchBarStyles)(SearchBar);
