import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Chip,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const Filter = props => {
  const { open, onClose, onFilter, className, ...rest } = props;

  const classes = useStyles();

  const initialValues = {
    paymentStatus: '',
    tag: '',
    tags: ['Full-Time'],
    amount: [1, 7],
    projectStatus: 'ended',
    customerName: '',
    customerType: 'freelancer',
    customerEmail: '',
    customerPhone: '',
    customerAge: ''
  };

  const [expandProject, setExpandProject] = useState(true);
  const [expandCustomer, setExpandCustomer] = useState(false);
  const [values, setValues] = useState({ ...initialValues });

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleFieldChange = (event, field, value) => {
    event.persist && event.persist();
    setValues(values => ({
      ...values,
      [field]: value
    }));
  };

  const handleTagAdd = () => {
    setValues(values => {
      const newValues = { ...values };

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';

      return newValues;
    });
  };

  const handleTagDelete = tag => {
    setValues(values => {
      const newValues = { ...values };

      newValues.tags = newValues.tags.filter(t => t !== tag);

      return newValues;
    });
  };

  const handleToggleProject = () => {
    setExpandProject(expandProject => !expandProject);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer(expandCustomer => !expandCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFilter && onFilter(values);
  };

  const TicketStatusOptions = 
    ['CTE erro',
     'NFE erro'];
  const customerAgeOption = ['','1 - Imperial','2 - Aguas Mariza', '3 - Rio  do Peixe', '4 - Sol Bebidas', '5- Refriko'];

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        {...rest}
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Button
            onClick={onClose}
            size="small"
          >
            <CloseIcon className={classes.buttonIcon} />
            Fechar
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleToggleProject}
            >
              <Typography variant="h5">Filtro Tickets</Typography>
              {expandProject ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandProject}>
              <div className={classes.contentSectionContent}>
                <div className={classes.formGroup}>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Assunto"
                    margin="dense"
                    name="paymentStatus"
                    onChange={event =>
                      handleFieldChange(
                        event,
                        'paymentStatus',
                        event.target.value
                      )
                    }
                    select
                    // eslint-disable-next-line react/jsx-sort-props
                    SelectProps={{ native: true }}
                    value={values.paymentStatus}
                    variant="outlined"
                  >
                    <option
                      disabled
                      value=""
                    />
                    {TicketStatusOptions.map(option => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className={classes.formGroup}>
                  <div className={classes.fieldGroup}>
                    <TextField
                      className={clsx(classes.field, classes.flexGrow)}
                      label="Filtrar Tags"
                      margin="dense"
                      name="tag"
                      onChange={event =>
                        handleFieldChange(event, 'tag', event.target.value)
                      }
                      value={values.tag}
                      variant="outlined"
                    />
                    <Button
                      className={classes.addButton}
                      onClick={handleTagAdd}
                      size="small"
                    >
                      <AddIcon className={classes.addIcon} />
                      Adicionar
                    </Button>
                  </div>
                  <div className={classes.tags}>
                    {values.tags.map(tag => (
                      <Chip
                        deleteIcon={<CloseIcon />}
                        key={tag}
                        label={tag}
                        onDelete={() => handleTagDelete(tag)}
                      />
                    ))}
                  </div>
                </div>               
               
                <div className={classes.formGroup}>
                  <Typography
                    component="p"
                    gutterBottom
                    variant="overline"
                  >
                    Status
                  </Typography>     
                  <div className={classes.fieldGroup}>
                    <RadioGroup
                      className={classes.radioGroup}
                      name="projectStatus"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'projectStatus',
                          event.target.value
                        )
                      }
                      value={values.projectStatus}
                    > 
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Todos"
                        value="todos"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Em Fila Suporte"
                        value="1"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Em Fila Desenvolvimento"
                        value="2"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Em Andamento Desenvolvimento"
                        value="3"
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Aguardando feed back Cliente"
                        value="4"                        
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Aguardando feed back Suporte"
                        value="5"                     
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Pausados"
                        value="6"                        
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Cancelados"
                        value="7"                       
                      />
                      <FormControlLabel
                        control={<Radio color="primary" />}
                        label="Concluidos"
                        value="8"                       
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className={classes.contentSection}>
            <div
              className={classes.contentSectionHeader}
              onClick={handleToggleCustomer}
            >
              <Typography variant="h5">Contatos / Clientes </Typography>
              {expandCustomer ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <Divider />
            <Collapse in={expandCustomer}>
              <div className={classes.contentSectionContent}>
                <div className={classes.contentSectionContent}>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Contato"
                      margin="dense"
                      name="customerName"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'customerName',
                          event.target.value
                        )
                      }
                      value={values.customerName}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Empresa"
                      margin="dense"
                      name="customerAge"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'customerAge',
                          event.target.value
                        )
                      }
                      select
                      // eslint-disable-next-line react/jsx-sort-props
                      SelectProps={{ native: true }}
                      value={values.customerAge}
                      variant="outlined"
                    >
                      <option
                        disabled
                        value=""
                      />
                      {customerAgeOption.map(option => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div className={classes.formGroup}>
                    <ToggleButtonGroup
                      exclusive
                      onChange={(event, value) =>
                        value && handleFieldChange(event, 'customerType', value)
                      }
                      size="small"
                      value={values.customerType}
                      variant="outlined"
                    >
                      <ToggleButton
                        color="primary"
                        value="projectOwner"
                      >
                        Project owner
                      </ToggleButton>
                      <ToggleButton value="freelancer">Freelancer</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Email address"
                      margin="dense"
                      name="customerEmail"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'customerEmail',
                          event.target.value
                        )
                      }
                      value={values.customerEmail}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Phone number"
                      margin="dense"
                      name="customerPhone"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'customerPhone',
                          event.target.value
                        )
                      }
                      value={values.customerPhone}
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formGroup}>
                    <TextField
                      className={classes.field}
                      fullWidth
                      label="Age"
                      margin="dense"
                      name="customerAge"
                      onChange={event =>
                        handleFieldChange(
                          event,
                          'customerAge',
                          event.target.value
                        )
                      }
                      select
                      // eslint-disable-next-line react/jsx-sort-props
                      SelectProps={{ native: true }}
                      value={values.customerAge}
                      variant="outlined"
                    >
                      <option
                        disabled
                        value=""
                      />
                      {customerAgeOption.map(option => (
                        <option
                          key={option}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            fullWidth
            onClick={handleClear}
            variant="contained"
          >
            <DeleteIcon className={classes.buttonIcon} />
            Limpar Filtros
          </Button>
          <Button
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
          >
            Filtrar
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default Filter;
