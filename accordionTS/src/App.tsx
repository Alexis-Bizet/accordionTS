import { Props } from './type';
import { makeStyles } from '@mui/styles';
import AccordionInput from './components/AccordionInput';
import AccordionArea from './components/AccordionArea';
import AccordionTbl1 from './components/AccordionTbl1';
import AccordionTbl2 from './components/AccordionTbl2';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
}));

export default function App({}: Props) {

  const [expandedInput, setExpandedInput] = useState(false);
  const [expandedArea, setExpandedArea] = useState(false);
  const [expandedTbl1, setExpandedTbl1] = useState(false);
  const [expandedTbl2, setExpandedTbl2] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccordionArea expandedArea={expandedArea} setExpandedArea={setExpandedArea} />
      <AccordionInput expandedInput={expandedInput} setExpandedInput={setExpandedInput} />
      <AccordionTbl1 
      expandedInput={expandedInput} 
      setExpandedInput={setExpandedInput}  
      expandedArea={expandedArea} 
      setExpandedArea={setExpandedArea}
      expandedTbl1={expandedTbl1}
      setExpandedTbl1={setExpandedTbl1}
      expandedTbl2={expandedTbl2}
      setExpandedTbl2={setExpandedTbl2}
      />
      <AccordionTbl2
      expandedInput={expandedInput}
      setExpandedInput={setExpandedInput}
      expandedArea={expandedArea}
      setExpandedArea={setExpandedArea}
      expandedTbl1={expandedTbl1}
      setExpandedTbl1={setExpandedTbl1}
      expandedTbl2={expandedTbl2}
      setExpandedTbl2={setExpandedTbl2}
       />
    </div>
  );
}