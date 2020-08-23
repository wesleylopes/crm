import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  notice: {
    marginTop: theme.spacing(1)
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));
const OtherActions = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Outras Ações" />
      <Divider />
      <CardContent>
        <div className={classes.mainActions}>
          <Button>
            <NotInterestedIcon className={classes.buttonIcon} />
            Bloquear Usuário
          </Button>
          <Button>
            <GetAppIcon className={classes.buttonIcon} />
            Exportar dados Contato
          </Button>
        </div>
        <Typography
          className={classes.notice}
          variant="body2"
        >
          Ao remover esta conta de contato / usuario esteja ciente de que a deleção será pemanente e que não conseguirá recupera-la novamente.
        </Typography>
        <Button className={classes.deleteButton}>
          <DeleteIcon className={classes.buttonIcon} />
          Deletar conta de contato / usuario
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
