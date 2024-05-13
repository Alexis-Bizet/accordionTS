import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Accordion, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { locations } from '../data/LocationData';
import { Props } from '../type';

export default function AccordionTbl1(

    {expandedTbl1, setExpandedTbl1, expandedArea, expandedInput, expandedTbl2}: Props) {

      const calculateHeight = () => {
        if (expandedTbl1 && !expandedArea && !expandedInput && !expandedTbl2) {
          return '68vh';
        } else if (expandedTbl1 && expandedArea && !expandedInput && !expandedTbl2) {
          return '56vh';
        } else if (expandedTbl1 && !expandedArea && expandedInput && !expandedTbl2) {
          return '56vh';
        } else if (expandedTbl1 && expandedArea && expandedInput && !expandedTbl2) {
          return '40vh';
        } else if (expandedTbl1 && expandedArea && expandedInput && expandedTbl2) {
          return '18vh';
        } else if(expandedTbl1 && expandedTbl2 && !expandedArea && !expandedInput) {
          return '32vh';
        }else if (expandedTbl1 && expandedTbl2 && expandedArea && !expandedInput) {
          return '27vh';
        } else if (expandedTbl1 && expandedTbl2 && !expandedArea && expandedInput) {
          return '23vh';
        }
        else {
          return '10vh'; 
        }
      };
      
      const height = calculateHeight();
    const handleExpand = () => {
        setExpandedTbl1(!expandedTbl1);
    };

  return (
    <Accordion
      expanded={expandedTbl1} onChange={handleExpand}
      sx={{backgroundColor:'#283593'}}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography color='white' fontWeight={'bold'}>Coordonées</Typography>
      </AccordionSummary>
        <AccordionDetails >
          <TableContainer       
          sx={{height, overflowY: 'auto'}}
          >
            <Table stickyHeader >
              <TableHead >
                <TableRow >
                  <TableCell>ID</TableCell>
                  <TableCell>Latitude</TableCell>
                  <TableCell>Longitude</TableCell>
                  <TableCell>Altitude</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {locations.map((location) => (
                  <TableRow key={location.id}>
                    <TableCell>{location.id}</TableCell>
                    <TableCell>{location.latitude}</TableCell>
                    <TableCell>{location.longitude}</TableCell>
                    <TableCell>{location.altitude}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
    </Accordion>
    
  );
}