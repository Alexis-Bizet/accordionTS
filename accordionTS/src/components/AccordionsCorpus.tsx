import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, AccordionSummary, Accordion, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { locations } from '../data/LocationData';


export default function Accordions() {
  return (
    <Box >
      <Accordion disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Aires
        </AccordionSummary>
        <AccordionDetails >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion >
      <Accordion disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Volumes
        </AccordionSummary>
        <AccordionDetails >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion >
      <Accordion disableGutters={true} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Coordonnées
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight:'70vh', overflow:'auto'}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{fontWeight:"bold"}}>lat</TableCell>
                <TableCell sx={{fontWeight:"bold"}}>lng</TableCell>
                <TableCell sx={{fontWeight:"bold"}}>alt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations.map((location, index) => (
                <TableRow key={index}>
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
    <Accordion disableGutters={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Coordonnées
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight:'70vh', overflow:'auto'}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{fontWeight:"bold"}}>lat</TableCell>
                <TableCell sx={{fontWeight:"bold"}}>lng</TableCell>
                <TableCell sx={{fontWeight:"bold"}}>alt</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations.map((location, index) => (
                <TableRow key={index}>
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
    </Box>
  );
}
