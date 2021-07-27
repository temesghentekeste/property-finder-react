import LockIcon from '@material-ui/icons/Lock';
import GradeIcon from '@material-ui/icons/Grade';
import ViewListIcon from '@material-ui/icons/ViewList';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import { green } from '@material-ui/core/colors';

const data = [
  {
    link: 'All Properties',
    url: 'properties',
    icon: <FontDownloadIcon style={{ color: green[500] }} />,
  },

  {
    link: 'Your Favorites',
    url: 'favorites',
    icon: <GradeIcon color="secondary" />,
  },

  {
    link: 'Dashboard',
    url: `dashboard/${localStorage.getItem('PropertyFinderUsername')}`,
    icon: <ViewListIcon color="primary" />,
  },

  {
    link: 'Sign Out',
    url: '/',
    icon: <LockIcon />,
  },
];

export default data;
