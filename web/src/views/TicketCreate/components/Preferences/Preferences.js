import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  options: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Preferences = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Preferências" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
        >
          Escopo
        </Typography>
        <Typography variant="body2">         
        </Typography>
        <div className={classes.options}>       
          <FormControlLabel
            control={
              <Checkbox
                color="primary"                
              />
            }
            label="Ticket Interno"
          />
        </div>
      </CardContent>
    </Card>
  );
};

Preferences.propTypes = {
  className: PropTypes.string
};

export default Preferences;
