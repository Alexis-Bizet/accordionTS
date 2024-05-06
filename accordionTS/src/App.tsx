import { Box} from '@mui/material';
import Accordions from './components/AccordionsCorpus';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
}));


export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordions name='first'/>
      <Accordions name='second'/>
    </div>
  );
}