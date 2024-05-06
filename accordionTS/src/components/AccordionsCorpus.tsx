import { useEffect, useRef, useState } from 'react';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, AccordionSummary, Accordion, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { locations } from '../data/LocationData';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  rootExpanded: {
    flexGrow: 1
  }
}));

export default function MyAccordion(props) {
  const classes = useStyles();
  const { name } = props;
  const [expanded, setExpanded] = useState(false);

  const rootClass = expanded ? classes.rootExpanded : classes.root;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Accordion
      className={rootClass}
      expanded={expanded === name}
      onChange={handleChange(name)}
      sx={{backgroundColor:'green'}}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id={`${name}-header`}
      >
        <Typography className={classes.heading}>General settings</Typography>
        <Typography className={classes.secondaryHeading}>
          I am an accordion
        </Typography>
      </AccordionSummary>
      <AccordionDetails style={{ display: 'flex', flexDirection: 'column',}}>
    <TableContainer style={{ flex: '1 1 auto', overflow: 'auto' }}>
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