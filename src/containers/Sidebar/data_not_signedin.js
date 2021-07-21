import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { green } from '@material-ui/core/colors';

const dataNotSignedIn = [
  {
    link: 'Sign In',
    url: 'login',
    icon: <VpnKeyIcon style={{ color: green[500] }} />,
  },

  {
    link: 'Sign Up',
    url: 'signup',
    icon: <PersonAddIcon color="secondary" />,
  },
];

export default dataNotSignedIn;
