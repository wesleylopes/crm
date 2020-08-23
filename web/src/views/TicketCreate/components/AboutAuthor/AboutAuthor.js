import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Chip,
  Typography,
  colors
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';
import AddIcon from '@material-ui/icons/Add';
import ModelTicketIcon from '@material-ui/icons/Assignment';
import { RichEditor } from 'components';



import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles(theme => ({
  root: {},
  option: {
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    maxWidth: 660,
    '& + &': {
      marginTop: theme.spacing(2)
    }
  },  
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  selectedOption: {
    backgroundColor: colors.grey[50]
  },
  optionDetails: {
    marginLeft: theme.spacing(2)
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  
  addIcon: {
    marginRight: theme.spacing(2)
    },

  formGroup: {
    marginBottom: theme.spacing(3)
  },
  
  flexGrow: {
    flexGrow: 1
  },
}));


const AboutAuthor = props => {
  
  const customerContacts = [
    { title: 'Ailton Aires', year: 1994 },
    { title: 'Joel Tibola', year: 1994 },
    ,
  ];



  const customerCompanies = [
    { title: '10 - Aguas Mariza - Matriz', year: 1994 },
    { title: '11 - Rio do Peixe - 101', year: 1994 },
    ,
  ];


  const folowers = [
    { title: 'Suporte<Suporte@saib.com.br>', year: 1994 },
    { title: 'Alan Carlos<Alam@saib.com.br>', year: 1972 },
    { title: 'Argeu Previatti<Argeu@saib.com.br>', year: 1972 },
    { title: 'Adriano Dalci Camargos<Argeu@saib.com.br>', year: 1972 },
    { title: 'Kleber Mesquita<kleber@saib.com.br>', year: 1972 },
    { title: 'Ivan<Ivan@saib.com.br>', year: 1972 },
    
  ];

  const projectsProductsModules = [
    { title: 'Gerador de Boletos: <Pla/Adm_Vend/Estoque/Operacao de Estoque/Pro_Rel_Operacao_Est/Pro_Rel_Operacao_Est.exe>', year: 1994 },
    { title: 'Relatorio Rateio Grupo Produto: <C:/USR/DESENV/Pla/Adm_Fina/Custos/Pro_Rel_Rateio_Grupo_Produto/Pro_Rel_Rateio_Grupo_Produto.exe>', year: 1994 },
    { title: 'Cad. Pedido...<C:/USR/DESENV/Pla/Adm_Vend/Faturamento/Pedidos/Pro_Pedidos/Pro_Pedido_Faturamento.exe>'}
  ];

  
  
  const { className, ...rest } = props;

  const classes = useStyles();

  const [selected, setSelected] = useState('freelancer');


  const initialValues = {
    name: '',
    tag: '',
    tags: ['Full-Time', 'ReactJS'],
    startDate: moment(),
    endDate: moment().add(1, 'day')
  };
  
  const [values, setValues] = useState({ ...initialValues });
    const [calendarTrigger, setCalendarTrigger] = useState(null);
  

  const handleChange = (event, option) => {
    setSelected(option.value);
  };
  
  const handleCalendarOpen = trigger => {
    setCalendarTrigger(trigger);
  };

  const handleCalendarChange = () => {};

  const handleCalendarAccept = date => {
    setValues(values => ({
      ...values,
      [calendarTrigger]: date
    }));
  };

  const handleCalendarClose = () => {
    setCalendarTrigger(false);
  };

  const calendarOpen = Boolean(calendarTrigger);
  const calendarMinDate =
    calendarTrigger === 'startDate'
      ? moment()
      : moment(values.startDate).add(1, 'day');
  const calendarValue = values[calendarTrigger];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)} >     
      <CardContent>
      <form>    

     <div className={classes.formGroup}>
        <div className={classes.fieldGroup}>
        <div style={{ width: 385 }}>
           <Autocomplete
             className={classes.AutoCompleteField}          
             freeSolo
             options={customerContacts.map((option) => option.title)}
             renderInput={(params) => (
             <TextField {...params} label="Solicitante" margin="normal" variant="outlined" />
             )}
      /> 
      </div>
      <Button
                className={classes.addButton}                
                size="small"
              >
                <AddIcon className={classes.addIcon} />               
      </Button>



      <div style={{ width: 385 }}>
      <Autocomplete
        className={classes.AutoCompleteField}        
        freeSolo
        options={customerCompanies.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Empresa / Cliente" margin="normal" variant="outlined" />
        )}
      /> 
      </div>
      <Button
                className={classes.addButton}                
                size="small"
              >
                <AddIcon className={classes.addIcon} />               
      </Button>

      <div style={{ width: 385}}>
      <Autocomplete
        className={classes.AutoCompleteField}        
        freeSolo
        options={folowers.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Encaminhar para " margin="normal" variant="outlined" />
        )}
      /> 
      </div>
      <Button className={classes.addButton} size="small" >
        <AddIcon className={classes.addIcon} />               
      </Button> 
       
       
       </div>
       </div>      
       <div className={classes.formGroup}>
        <div className={classes.fieldGroup}>

       <Autocomplete
        multiple
        id="tags-outlined"
        options={folowers}
        getOptionLabel={(option) => option.title}
        defaultValue={[folowers[0,1,2]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Seguindo"            
          />
        )}
      />  

      
        </div> 
      </div> 

      <div style={{ width: 1100 }}>
      <div className={classes.formGroup}>
      <div className={classes.fieldGroup}>
            <TextField
              fullWidth
              label="Assunto"
              name="name"  
              variant="outlined"
            />

       <Button
                className={classes.addButton}                
                size="small"
              >
                <ModelTicketIcon className={classes.modelTicketIcon} />  
                Modelos             
      </Button>
           
        </div>          
      </div>           
      </div> 
      
      <div style={{ width: 1100 }}>
    <div className={classes.formGroup}>
       <div className={classes.fieldGroup}>
         <Autocomplete
        multiple
        id="tags-outlined"
        options={projectsProductsModules}
        getOptionLabel={(option) => option.title}
        defaultValue={[projectsProductsModules[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Produtos / Modulos / Projetos / Tela"            
          />
        )}
      />  
      <Button
                className={classes.addButton}                
                size="small"
              >
                <AddIcon className={classes.addIcon} />               
      </Button>    
     </div> 
     </div> 
      
    </div> 
    
    
     
    <div className={classes.formGroup}>
       <div className={classes.fieldGroup}>
          <RichEditor placeholder="Escreva aqui tudo o que precisar " />           
       </div>           
    </div>
   
      
    <div className={classes.formGroup}>
            <div className={classes.fieldGroup}>
              <TextField
                className={classes.dateField}
                label="Data Cadastro"
                name="startDate"
                onClick={() => handleCalendarOpen('startDate')}
                value={moment(values.startDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
              <TextField
                className={classes.dateField}
                label="Data Recebido "
                name="endDate"
                onClick={() => handleCalendarOpen('endDate')}
                value={moment(values.endDate).format('DD/MM/YYYY')}
                variant="outlined"
              />              
                     
                <TextField
                className={classes.dateField}
                label="Data iniciado "
                name="endDate"
                onClick={() => handleCalendarOpen('endDate')}
                value={moment(values.endDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
              <TextField
                className={classes.dateField}
                label="Data Conclusão "
                name="endDate"
                onClick={() => handleCalendarOpen('endDate')}
                value={moment(values.endDate).format('DD/MM/YYYY')}
                variant="outlined"
              />
            </div>
          </div>

          
          </form>
      </CardContent>     
      <DatePicker
        minDate={calendarMinDate}
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={calendarOpen}
        style={{ display: 'none' }} // Temporal fix to hide the input element
        value={calendarValue}
        variant="dialog"
        color="primary"
      />
    </Card>
  );
};

AboutAuthor.propTypes = {
  className: PropTypes.string
};

export default AboutAuthor;
