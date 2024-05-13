export interface Props {
        expandedInput: boolean;
        setExpandedInput: React.Dispatch<React.SetStateAction<boolean>>;
        expandedArea: boolean;
        setExpandedArea: React.Dispatch<React.SetStateAction<boolean>>;
        expandedTbl1: boolean;
        setExpandedTbl1: React.Dispatch<React.SetStateAction<boolean>>;
        expandedTbl2: boolean;
        setExpandedTbl2: React.Dispatch<React.SetStateAction<boolean>>;
      }

export interface AccordionInputProps {
        expandedInput: boolean;
        setExpandedInput: React.Dispatch<React.SetStateAction<boolean>>;
      }

export interface AccordionAreaProps {
        expandedArea: boolean;
        setExpandedArea: React.Dispatch<React.SetStateAction<boolean>>;
      }

