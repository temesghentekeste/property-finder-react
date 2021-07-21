import GradeIcon from '@material-ui/icons/Grade';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import { green } from '@material-ui/core/colors';

const dataNotSignedIn = [
  {
    link: 'Sign In',
    url: 'login',
    icon: <FontDownloadIcon style={{ color: green[500] }} />,
  },

  {
    link: 'Sign Up',
    url: 'signup',
    icon: <GradeIcon color="secondary" />,
  },
];

export default dataNotSignedIn;
