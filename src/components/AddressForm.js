import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const AddressForm = (props) => {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="pcn"
            name="pcn"
            label="pcn"
            fullWidth
            autoComplete="given-name"
            onChange={() => props.onChange("pcn")}
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
            onChange={() => props.onChange("firstName")}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="prefix"
            name="prefix"
            label="Prefix"
            fullWidth
            autoComplete="given-name"
            onChange={() => props.onChange("prefix")}
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
            onChange={() => props.onChange("lastName")}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="street"
            name="street"
            label="street"
            fullWidth
            autoComplete="street name"
            onChange={() => props.onChange("street")}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="addressnumber"
            name="addressnumber"
            label="Number"
            fullWidth
            autoComplete="house number"
            onChange={() => props.onChange("addressnumber")}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="addressaddition"
            name="addressaddition"
            label="Addition"
            fullWidth
            autoComplete="street addition"
            onChange={() => props.onChange("addressaddition")}
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
            onChange={() => props.onChange("city")}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip / Postal code"
            fullWidth
            autoComplete="zipcode"
            onChange={() => props.onChange("zipCode")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          id="birthday"
          name="birthday"
          label="Birthday"
          type="date"
          onChange={() => props.onChange("birthday")}
          InputLabelProps={{
          shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
            autoComplete="phoneNumber"
            onChange={() => props.onChange("phoneNumber")}
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
  )
}


export default AddressForm;