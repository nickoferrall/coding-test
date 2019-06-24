import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchList from './components/SearchList';
import Filter from './components/Filter';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  main: {
    width: '380px',
    margin: '10px auto',
    padding: 30,
    backgroundColor: '#fafafa',
    [theme.breakpoints.up('sm')]: {
      width: '580px'
    }
  }
});

function App({ classes }) {
  const [search, setSearch] = useState('');

  const handleChange = letter => {
    setSearch(letter.target.value);
  };

  return (
    <>
      <img
        style={{ float: 'right', width: '300px' }}
        src="https://media.giphy.com/media/enTimXqzmVXR6/giphy.gif"
      />
      <Paper className={classes.main} elevation={10}>
        <Typography variant="h3">Our Store</Typography>
        <Filter handleChange={handleChange} setSearch={setSearch} />
        <SearchList search={search} />
      </Paper>
    </>
  );
}

export default withStyles(styles)(App);
