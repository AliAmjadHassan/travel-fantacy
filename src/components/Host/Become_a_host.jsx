
import React from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
      width: '50ch',
    },
  },
}));

const Become_a_host = (props) => {
  console.log(props);

    return ( 
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <h1>Create a your tour</h1>
           </Grid>
              
              <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                 <TextField  label="Host_Name" fullWidth/>
                 <TextField  label="Gender" fullWidth/>
                 <TextField  label="Contact_No" fullWidth/>
                 <TextField  label="Host_Email" fullWidth/>
                 <TextField  label="Company_Name" fullWidth/>
                 <TextField  label="Company_ContactNo" fullWidth/>
                 <TextField  label="Place_Name"fullWidth />
                 <TextField  label="Tour_Category"fullWidth />
                 <TextField  label="Cost"fullWidth />
                 <TextField  label="No_of_people"fullWidth />
                 <TextField  label="No_of_days" fullWidth/>
                 <TextField  label="Arival_location" fullWidth/>
                 <TextField  label="Departure_location" fullWidth/>
                 <TextField  label="Description/Facilities"fullWidth />
               </Grid>

               

                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}></Grid>

                         <Grid item xs={6}>
                            <Button variant="contained" colour="primary">
                             Create Tour
                            </Button>
                         </Grid>
        
        </Grid>
     );
}
 
export default Become_a_host;