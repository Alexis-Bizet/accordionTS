import AccordionInput from './components/AccordionInput';
import AccordionArea from './components/AccordionArea';
import AccordionTbl1 from './components/AccordionTbl1';
import AccordionTbl2 from './components/AccordionTbl2';
import { useState } from 'react';


export default function App() {

  const [expandedInput, setExpandedInput] = useState(false);
  const [expandedArea, setExpandedArea] = useState(false);
  const [expandedTbl1, setExpandedTbl1] = useState(false);
  const [expandedTbl2, setExpandedTbl2] = useState(false);

  return (
    <div 
      style={{    
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
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