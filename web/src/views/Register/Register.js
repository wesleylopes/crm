import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link,
  Avatar
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

import gradients from 'utils/gradients';
import { Page } from 'components';
import { RegisterForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.orange,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  registerForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Novo Registro"
    >
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <PersonAddIcon className={classes.icon} />
          <Typography
            gutterBottom
            variant="h3"
          >
            Registro
          </Typography>
          <Typography variant="subtitle2">
            Cadastre se em nossa plataforma agora mesmo.
          </Typography>
          <RegisterForm className={classes.registerForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/login"
            underline="always"
            variant="subtitle2"
          >
            Já possui uma conta ?
          </Link>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/auth.png"
          title="Cover"
        >
          <Typography
            color="inherit"
            variant="subtitle1"
          >
           O Melhor sistema de gestão de Suportes
          </Typography>
          <div className={classes.person}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/images/avatars/avatar_2.png"
            />
            <div>
              <Typography
                color="inherit"
                variant="body1"
              >
                Adriana Vargas
              </Typography>
              <Typography
                color="inherit"
                variant="body2"
              >
                Gerente de Ti
              </Typography>
            </div>
          </div>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Register;