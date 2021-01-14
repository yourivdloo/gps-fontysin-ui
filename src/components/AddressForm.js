import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MuiPhoneNumber from "material-ui-phone-number";

const styles = theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

const AddressForm = (props) => {

  

  const handleChange = e => props.onChange(e.target);
  const handleLanguageChange = e => props.onChange(e.target, null, "language_array")

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
            onChange={handleChange}
            value={props.form.pcn}
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
            onChange={handleChange}
            value={props.form.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="prefix"
            name="prefix"
            label="Prefix"
            fullWidth
            autoComplete="given-name"
            onChange={handleChange}
            value={props.form.prefix}
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
            onChange={handleChange}
            value={props.form.lastName}
          />
        </Grid>
        
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="street name"
            onChange={handleChange}
            value={props.form.street}
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
            onChange={handleChange}
            value={props.form.addressnumber}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="addressaddition"
            name="addressaddition"
            label="Addition"
            fullWidth
            autoComplete="street addition"
            onChange={handleChange}
            value={props.form.addressaddition}
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
            onChange={handleChange}
            value={props.form.city}
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
            onChange={handleChange}
            value={props.form.zipCode}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            fullWidth
            autoComplete="emailAddress"
            onChange={handleChange}
            value={props.form.emailAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPhoneNumber
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
            autoComplete="phoneNumber"
            onChange={handleChange}
            value={props.form.phoneNumber}

            data-cy="user-phone"
            defaultCountry={"nl"}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <InputLabel shrink id="birthday-label">Birthday</InputLabel>
          <TextField
            id="birthday"
            name="birthday"
            type="date"
            onChange={handleChange}
            value={props.form.birthday}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
            <InputLabel shrink id="nationality-label">Nationality</InputLabel>
            <Select
              required
              id="nationality"
              name="nationality"
              value={props.form.nationality}
              fullWidth
              onChange={handleChange}
              displayEmpty
              className={styles.selectEmpty}
            >
            {
              props.nationalities.map((val, idx) => {
                return (
                  <MenuItem key={val.code} value={val.code} data={val.language}>{val.language}</MenuItem>
                )
              })
            }
            </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
            <InputLabel shrink id="languages-label">Languages</InputLabel>
            <Select
              required
              multiple
              id="languages"
              name="languages"
              value={props.form.languages}
              fullWidth
              onChange={handleLanguageChange}
              displayEmpty
              className={styles.selectEmpty}
              input={<Input />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>select languages</em>;
                }
    
                return selected.join(', ');
              }}
            >
              {
                props.languages.map((val, idx) => {
                  return (
                    <MenuItem key={val.code} value={val.code} data={val.language}>{val.language}</MenuItem>
                  )
                })
              }
            </Select>
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


export default withStyles(styles)(AddressForm);