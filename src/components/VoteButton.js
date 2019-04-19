import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
 
});

function VoteButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Vote
      </Button>
      
      
    </div>
  );
}

VoteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VoteButton);