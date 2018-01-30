import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Employees Management',
    icon: 'nb-edit',
    children: [
      {
        title: 'All Employees',
        link: '/pages/person/all',
      },
      {
        title: 'Approve Employee',
        link: '/pages/person/approve',
      },
      {
        title: 'Edit Employee',
        link: '/pages/person/edit',
      },
    ],
  },
  {
    title: 'Employers Management',
    icon: 'nb-edit',
    children: [
      {
        title: 'New Company',
        link: '/pages/employer/add',
      },
      {
        title: 'Approve Company',
        link: '/pages/employer/approve',
      },
      {
        title: 'Edit Company',
        link: '/pages/employer/edit',
      },
      {
        title: 'All Companies',
        link: '/pages/employer/all',
      },
    ],
  },
  {
    title: 'Accounts Management',
    icon: 'nb-edit',
    children: [
      {
        title: 'Company Account',
        link: '/pages/accounts/company',
      },
      {
        title: 'Employee Account',
        link: '/pages/accounts/employee',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
