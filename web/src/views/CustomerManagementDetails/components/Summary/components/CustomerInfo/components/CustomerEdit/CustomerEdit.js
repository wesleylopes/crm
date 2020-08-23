import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Switch,
  Button,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const CustomerEdit = props => {
  const { open, onClose, customer, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    ...customer
  });

  if (!open) {
    return null;
  }

  const handleFieldChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    }));
  };

  return (
    <Modal
      onClose={onClose}
      open={open}
    >
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h3"
            >
              Editar Contato
            </Typography>
            <Grid
              className={classes.container}
              container
              spacing={3}
            >
              
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                />
                 
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Sobrenome"
                  name="name"
                  onChange={handleFieldChange}
                  value={formState.name}
                  variant="outlined"
                />
                 
              </Grid>      

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  onChange={handleFieldChange}
                  value={formState.email}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Telefone"
                  name="phone"
                  onChange={handleFieldChange}
                  value={formState.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Skype"
                  name="address1"
                  onChange={handleFieldChange}
                  value={formState.address1}
                  variant="outlined"
                />
              </Grid>  

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Cidade"
                  name="state"
                  onChange={handleFieldChange}
                  value={formState.state}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Estado"
                  name="state"
                  onChange={handleFieldChange}
                  value={formState.state}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Pais"
                  name="country"
                  onChange={handleFieldChange}
                  value={formState.country}
                  variant="outlined"
                />
              </Grid>             
             
              <Grid item />
              <Grid
                item
                md={6}
                xs={12}
              >
                <Typography variant="h5">Email Verificado </Typography>
                <Typography variant="body2">
                 Desabilitando confirmação de e-mail 
                </Typography>
                <Switch
                  checked={formState.verified}
                  color="secondary"
                  edge="start"
                  name="verified"
                  onChange={handleFieldChange}
                  value={formState.verified}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >               
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button
              onClick={onClose}
              variant="contained"
            >
              Fechar
            </Button>
            <Button
              className={classes.saveButton}
              onClick={onClose}
              variant="contained"
            >
              Salvar
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

CustomerEdit.displayName = 'CustomerEdit';

CustomerEdit.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

CustomerEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CustomerEdit;
