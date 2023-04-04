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
          <Typography> Mini Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Friendbook: A Semantic-based Friend Recommendation System for Social networks
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
            Product Sales Data Analysis
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
          Insurance Decisioning system
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}