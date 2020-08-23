import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProjectDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Detalhes da solicitação " />
      <CardContent>
        <RichEditor placeholder="Escreva aqui tudo o que precisar " />
      </CardContent>
    </Card>
  );
};

ProjectDetails.propTypes = {
  className: PropTypes.string
};

export default ProjectDetails;
