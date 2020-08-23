import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const getSum = (invoices, type) => {
  const filtered = invoices.filter(invoice => invoice.type === type);
  const total = filtered
    .reduce((total, invoice) => total + invoice.value, 0)
    .toFixed(2);

  return [filtered, total];
};

const Invoices = props => {
  const { customer, className, ...rest } = props;

  const classes = useStyles();

  const handleEditOpen = () => {};

  const [paidInvoices, paidTotal] = getSum(customer.invoices, 'paid');
  const [draftInvoices, draftTotal] = getSum(customer.invoices, 'draft');
  const [dueInvoices, dueTotal] = getSum(customer.invoices, 'due');
  const [refundedInvoices, refundedTotal] = getSum(
    customer.invoices,
    'refunded'
  );
  const [incomeInvoices, incomeTotal] = getSum(customer.invoices, 'income');

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Tikets" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Em aberto </TableCell>
              <TableCell>
                {customer.iban}
                <div>
                  <Label
                    color={
                      customer.autoCC ? colors.green[600] : colors.red[600]
                    }
                  >
                    {customer.autoCC ? 'YES' : 'NO'}
                  </Label>
                </div>
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Concluidos</TableCell>
              <TableCell>
                {paidInvoices.length} ({customer.currency}
                {paidTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft</TableCell>
              <TableCell>
                {draftInvoices.length} ({customer.currency}
                {draftTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Unpaid/Due</TableCell>
              <TableCell>
                {dueInvoices.length} ({customer.currency}
                {dueTotal})
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Refunded</TableCell>
              <TableCell>
                {refundedInvoices.length} ({customer.currency}
                {refundedTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Gross Income</TableCell>
              <TableCell>
                {incomeInvoices.length} ({customer.currency}
                {incomeTotal})
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Ver Lista
        </Button>
        <Button>
          <AttachMoneyIcon className={classes.buttonIcon} />
          Criar Novo Ticket
        </Button>      
      </CardActions>
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default Invoices;
