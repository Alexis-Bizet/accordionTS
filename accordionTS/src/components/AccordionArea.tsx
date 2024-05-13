import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionAreaProps } from '../type';

export default function AccordionArea({ expandedArea, setExpandedArea }: AccordionAreaProps) {

  const [inputValue, setInputValue] = useState('');

  const handleExpand = () => {
    setExpandedArea(!expandedArea);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Accordion expanded={expandedArea} onChange={handleExpand} sx={{height: expandedArea ? '18vh' : '8vh'}}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        Aires
      </AccordionSummary>
      <AccordionDetails sx={{minHeight:'10vh'}}>
        <TextField 
          label="Méthode de calcul" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
      </AccordionDetails>
    </Accordion>
  );
}