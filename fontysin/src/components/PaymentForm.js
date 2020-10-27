import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
    <Typography variant="h6"  gutterBottom>
        Study and work details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="study" label="Current study" fullWidth autoComplete="study" />
        </Grid>
        
        <Grid item xs={12} md={6}>
        <TextField
          id="studyStartDate"
          label="Start date"
          type="date"
          defaultValue="YYYY/MM/DD"
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField id="job" label="Current job" fullWidth autoComplete="job" />
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField
          id="jobStartDate"
          label="Start date"
          type="date"
          defaultValue="YYYY/MM/DD"
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