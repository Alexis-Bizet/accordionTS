import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionInputProps } from '../type';


export default function AccordionInput( {expandedInput, setExpandedInput}:AccordionInputProps) {

  const [inputValue, setInputValue] = useState('');

  const handleExpand = () => {
    setExpandedInput(!expandedInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Accordion expanded={expandedInput} onChange={handleExpand}  sx={{height: expandedInput ? '18vh' : '8vh'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Volumes
      </AccordionSummary>
      <AccordionDetails>
        <TextField 
          label="Méthode de calcul" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
      </AccordionDetails>
    </Accordion>
  );
}