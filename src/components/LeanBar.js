import React from 'react'
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    width: 550,
    paddingLeft: 105,
  },

  slider: {
    padding: '0px 0px 20px 0px',
  },

  thumb: {
    height: 'auto',
    width: 48,
  }
};

class StepSlider extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={4}
          step={1}
          onChange={this.handleChange}
          thumb={<img src="assets/thumb1.png" className={classes.thumb} id="thumb" alt="Thumb" />}
        />

        <img src="assets/democrat.png" class="barPic" id="democrat" alt="Democrat Donkey"></img>
        <img src="assets/republican.png" class="barPic" id="republican" alt="Republican Elephant"></img>

    
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);