import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="PCN"
            name="PCN"
            label="PCN"
            fullWidth
            autoComplete="given-name"
            onChange={() => this.handleChange()}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="Prefix"
            name="Prefix"
            label="Prefix"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="street name"
            name="street name"
            label="Street"
            fullWidth
            autoComplete="street name"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="street number"
            name="street number"
            label="Number"
            fullWidth
            autoComplete="street number"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="street addition"
            name="street addition"
            label="Addition"
            fullWidth
            autoComplete="street addition"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="Postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="YYYY/MM/DD"
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone number"
            name="phone number"
            label="Phone number"
            fullWidth
            autoComplete="phone number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="autoFillIn" value="yes" />}
            label="Auto fill-in these fields from the Fontys API"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}