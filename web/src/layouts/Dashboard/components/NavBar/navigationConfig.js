/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { Label } from 'components';

export default [
  {
    title: 'Páginas',
    pages: [
     
      {
        title: 'Gestão de Atendimentos',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'Contatos',
            href: '/management/customers',           
            
          },     
          
          {
            title: 'Tickets',
            href: '/management/tickets'
          }         
        ]
      }     
]},
{
  title: 'Suporte',
  pages: [    
    {
      title: 'Log de Atualizações do Sistema',
      href: '/changelog',
      icon: ViewModuleIcon,
      label: () => <Label color={colors.blue['500']}>v1.0.0</Label>
    }
  ]}

];
