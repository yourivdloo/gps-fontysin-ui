import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

const Review = (props) => {
  const handleChange = e => props.onChange(e.target, null, "array");
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Interests and hobbies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {
            props.interestList.map((val, idx) => {
              var value = props.form.interests[idx];
              return(
                <Grid key={val.index} item md={12}>
                    <TextField 
                      name={val.name} 
                      id={val.name + idx} 
                      label={val.label} 
                      data-tpye={val.label} 
                      autoComplete={val.label} 
                      value={value.name}
                      onChange={handleChange} 
                    />

                    {
                        idx===0? ""
                        : <button 
                            style={{
                              padding: "1px 6px", 
                              verticalAlign: "bottom", 
                              marginLeft: "5px"
                            }} 
                            className="field_manipulation_btn btn btn-danger" 
                            onClick={(() => props.clickOnDelete(val))} 
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                    }
                </Grid>
              )
            })
          }
          <br/>
          <Grid item md={12}>
            <Button onClick={props.addNewinterest} data-type="interest" variant="outlined" color="primary">Add interest</Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          {
            props.hobbyList.map((val, idx) => {
              var value = props.form.hobbies[idx];
              return(
                <Grid key={val.index} item md={12}>
                    <TextField 
                      name={val.name} 
                      id={val.name + idx} 
                      label={val.label} 
                      data-tpye={val.label} 
                      autoComplete={val.label} 
                      value={value.name}
                      onChange={handleChange} 
                    />

                    {
                        idx===0? ""
                        : <button 
                            style={{
                              padding: "1px 6px", 
                              verticalAlign: "bottom", 
                              marginLeft: "5px"
                            }} 
                            className="field_manipulation_btn btn btn-danger" 
                            onClick={(() => props.clickOnDelete(val))} 
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                    }
                </Grid>
              )
            })
          }
          <br/>
          <Grid item md={12}>
            <Button onClick={props.addNewHobby} variant="outlined" color="primary">Add hobby</Button>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default Review