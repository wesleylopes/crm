import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/pt-br';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  colors
} from '@material-ui/core';

import getInitials from 'utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 400,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

 

const ProjectCard = props => {
  const { project, className, ...rest } = props;

  const classes = useStyles();

  const statusColors = {
    'Em Fila Suporte' : colors.blue[600],
    'Em Fila Desenvolvimento' : colors.red[600],
    'Em Andamento Suporte' : colors.red[600],
    'Em Andamento Desenvolvimento' : colors.red[600],
    'Aguardando feed back Cliente': colors.orange[600],
    'Aguardando feed back Suporte': colors.orange[600],
    'Aguardando feed back Suporte': colors.orange[600],
    'Pausado': colors.orange[600],    
    Cancelado: colors.grey[600],
    Concluido: colors.green[600]
  }; 

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}    >
      
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Avatar
            alt="Author"
            variant="square"
            width="500px"           
            className={classes.avatar}
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
          <div>
            <Link
              color="textPrimary"
              component={RouterLink}
              noWrap
              to="#"
              variant="h5"
            >
              {project.title}
            </Link>

            <Typography variant="body2">              
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6"
              >
                {project.subject}
              </Link>
            </Typography>
            
            <Typography variant="body2">
              Solicitante {' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="/management/customers/1"
                variant="h6"
              >
                {project.author.name}
              </Link>
            </Typography>
          </div>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">           
          {project.support_analyst_owner.name}
          </Typography>
          <Typography variant="body2">Analista</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">12</Typography>
          <Typography variant="body2">Interações</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.start_date).format('DD/MM/YYYY')}
          </Typography>
          <Typography variant="body2">Cadastro</Typography>
        </div>
        <div className={classes.stats}>
          <Typography variant="h6">
            {moment(project.start_date).format('DD/MM/YYYY')}           
          </Typography>
          <Typography variant="body2">Ultima Alteração</Typography>
        </div>
        <div className={classes.stats}>
          <Typography
            style={{ color: statusColors[project.status] }}
            variant="h6"
          >
            {project.status}
          </Typography>
          <Typography variant="body2">Status</Typography>
        </div>
        <div className={classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            Ver Mais
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
