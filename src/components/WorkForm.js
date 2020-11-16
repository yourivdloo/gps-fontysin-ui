import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const WorkForm = (props) => {

  return (
    <React.Fragment>
      <Typography variant="h6"  gutterBottom>
        Study and work details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="studyname" 
            name="name"
            label="Current study" 
            fullWidth 
            autoComplete="study" 
            onChange={() => props.onChange("studyname", "studies")}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
        <TextField
          id="studydate"
          name="date"
          label="Start date"
          type="date"
          onChange={() => props.onChange("studydate", "studies")}
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField 
            id="jobname" 
            name="name"
            label="Current job" 
            fullWidth 
            autoComplete="job" 
            onChange={() => props.onChange("jobname", "jobs")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          id="jobdate"
          name="date"
          label="Start date"
          type="date"
          onChange={() => props.onChange("jobdate", "jobs")}
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
          <p>You can always add more of your study and job history later on your profile page!</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default WorkForm;