import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const WorkForm = (props) => {
  const handleChange = e => props.onChange(e.target, e.target.dataset.category);

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
            value={props.form.studies[0].name}
            autoComplete="study" 
            onChange={handleChange}
            inputProps={{
              'data-category':'studies'
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
        <TextField
          id="studydate"
          name="date"
          label="Start date"
          type="date"
          value={props.form.studies[0].date}
          onChange={handleChange}
          InputLabelProps={{
          shrink: true,
          }}
          inputProps={{
            'data-category':'studies'
          }}
        />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField 
            id="jobname" 
            name="name"
            label="Current job" 
            fullWidth 
            value={props.form.jobs[0].name}
            autoComplete="job" 
            onChange={handleChange}
            inputProps={{
              'data-category':'jobs'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          id="jobdate"
          name="date"
          label="Start date"
          type="date"
          value={props.form.jobs[0].date}
          onChange={handleChange}
          inputProps={{
            'data-category':'jobs'
          }}
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12}>
          <p>You can always add your study and job history later on your profile page!</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default WorkForm;