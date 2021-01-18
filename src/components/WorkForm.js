import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const WorkForm = (props) => {
  const handleChange = e => props.onChange(e.target, e.target.dataset.category);

  return (
    <React.Fragment>
      <Typography variant="h6"  gutterBottom>
        Study details
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
            required 
            id="studyschool" 
            name="school"
            label="School name" 
            fullWidth 
            value={props.form.studies[0].school}
            autoComplete="study" 
            onChange={handleChange}
            inputProps={{
              'data-category':'studies'
            }}
          />
        </Grid>
        
      </Grid>
      <Grid container spacing={3}>
        
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="studycity" 
            name="city"
            label="City" 
            fullWidth 
            value={props.form.studies[0].city}
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
          name="startDate"
          label="Start date"
          type="date"
          value={props.form.studies[0].startDate}
          onChange={handleChange}
          InputLabelProps={{
          shrink: true,
          }}
          inputProps={{
            'data-category':'studies'
          }}
        />
        </Grid>
        
      </Grid>

      <br /><br />

      <Typography variant="h6"  gutterBottom>
        Work details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            id="jobname" 
            name="name"
            label="Job description" 
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
            id="jobcompany" 
            name="companyName"
            label="Company name" 
            fullWidth 
            value={props.form.jobs[0].companyName}
            autoComplete="job" 
            onChange={handleChange}
            inputProps={{
              'data-category':'jobs'
            }}
          />
        </Grid>
        
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
              id="jobdate"
              name="startDate"
              label="Start date"
              type="date"
              value={props.form.jobs[0].startDate}
              onChange={handleChange}
              inputProps={{
                'data-category':'jobs'
              }}
              InputLabelProps={{
              shrink: true,
              }}
            />
        </Grid>
      </Grid>
      <br />

      <Grid item xs={12}>
        <p>You can always add your study and job history later on your profile page!</p>
      </Grid>
    </React.Fragment>
  );
}

export default WorkForm;