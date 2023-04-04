import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> C Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have learned through online websites
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Power BI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Certified from ICT ACADEMY
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Artificial Intelligence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Certified from Techsaksham online course
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}