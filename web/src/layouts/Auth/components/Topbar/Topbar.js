import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar style={{ background: '#4E2A77' }}
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <P>SAIB CRM</P>
      <Toolbar
      
      >
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logoSaib1.png"

          />
          
        </RouterLink>
        
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
