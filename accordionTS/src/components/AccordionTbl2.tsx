import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Accordion, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { locations } from '../data/LocationData';
import { Props } from '../type';

export default function AccordionTbl2(
  {expandedTbl1, expandedArea, expandedInput, expandedTbl2, setExpandedTbl2}: Props)  {

    const calculateHeight = () => {
      if (expandedTbl2 && !expandedArea && !expandedInput && !expandedTbl1) {
        return '66vh';
      } else if (expandedTbl2 && expandedArea && !expandedInput && !expandedTbl1) {
        return '56vh';
      } else if (expandedTbl2 && !expandedArea && expandedInput && !expandedTbl1) {
        return '50vh';
      } else if (expandedTbl2 && expandedArea && expandedInput && !expandedTbl1) {
        return '40vh';
      } else if (expandedTbl2 && expandedArea && expandedInput && expandedTbl1) {
        return '18vh';
      } else if (expandedTbl1 && expandedTbl2 && !expandedArea && !expandedInput) {
        return '32vh';
      } else if (expandedTbl1 && expandedTbl2 && expandedArea && !expandedInput) {
        return '27vh';
      } else if (expandedTbl1 && expandedTbl2 && !expandedArea && expandedInput) {
        return '23vh';
      }else {
        return '10vh'; 
      }
    };
    
    const height = calculateHeight();
  
    const handleExpand = () => {
      setExpandedTbl2(!expandedTbl2);
    };


  return (
    <Accordion
      sx={{backgroundColor:'#512da8'}}
      expanded={expandedTbl2} onChange={handleExpand}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography color='white' fontWeight={'bold'}>Distances</Typography>
      </AccordionSummary>
        <AccordionDetails>
          <TableContainer   sx={{height, overflowY: 'scroll'}}>
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