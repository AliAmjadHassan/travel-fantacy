export default AddGuide;
import { CssBaseline, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import hotelService from "../../../services/HotelService";
import ImageUploader from 'react-images-upload';
import AppBarComponenet from "./AppBar";
import hotelCategoryService from "../../../services/HotelCategoryService";

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: 130,
    backgroundColor: "white",
  },
}));

class addHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        GuideName: " ",
        Image: " ",
        Contactno: " ",
        Gender: " ",
        CompanyName: " ",
        Guide_Type: " ",
        Cost: " ",
        Status: "Yes",
        Guide_location: 0,
        Experience:" ",
        Visited_Places: [],
        Description: " ",
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleGuideNameChange = this.handleGuideNameChange.bind(this);
    this.handleContactnoChange = this.handleContactnoChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
    this.handleGuide_TypeChange = this.handleGuide_TypeChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleGuide_locationChange = this.handleGuide_locationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);

  }
  componentDidMount() {
    hotelCategoryService
      .getHotelCategory(this.props.page, this.props.perPage)
      .then((data) => {
        this.setState({ Categories: data });
        console.log(this.state.Categories);
        // setTotal(data.total);
        // setPerPage(10);
      })
      .catch((err) => {
        console.log(err);
      });
  } 
  handleGuideNameChange(event) {
    this.setState({ GuideName: event.target.value });
  }

  handleContactnoChange(event) {
    this.setState({ Contactno: event.target.value });
  }
  handleGenderChange(event) {
    this.setState({ Gender: event.target.value });
  }
  handleCompanyNameChange(event) {
    this.setState({ CompanyName: event.target.value });
  }

  handleGuide_TypeChange(event) {
    this.setState({ Guide_Type: event.target.value });
  }
  handleCostChange(event) {
    this.setState({ Cost: event.target.value });
  }

  handleStatusChange(event) {
    this.setState({ Status: event.target.value });
  }

   handleGuide_locationChange(event) {
    this.setState({Guide_location : event.target.value });
  }

  handleExperienceChange(event) {
    this.setState({Experience: event.target.value });
  }
  
  
  onDrop(event) {
    this.setState({
        selectedFile: event.target.files,     
        });
  }
   change = async (event) => {
         this.setState({ SelectedCategory: event.target.value });
    };
  
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
     formData.append("HotelName", this.state.HotelName);
     formData.append("Location", this.state.Location);
     formData.append("Address", this.state.Address);
     formData.append("Contactno", this.state.Contactno);
     formData.append("Status", this.state.Status);
     formData.append("Cost", this.state.Cost);
     formData.append("Website", this.state.Website);
    formData.append("Facilities", this.state.Facilities);
     formData.append("Category", this.state.SelectedCategory);
     for(var x = 0; x<this.state.selectedFile.length; x++) {
       formData.append('file', this.state.selectedFile[x])
   }
    console.log(this.state);
    console.log(formData);
    const data = this.state;
    hotelService
      .addHotel(formData)
      .then((response) => {
        alert(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ marginTop: "100px", marginLeft: "200px" }}>
        <CssBaseline />
      <AppBarComponenet />
        <h1 style={{ position: "relative", textAlign: "center", fontSize: 50 }}>
          Add New Hotel
        </h1>
        
        <form
          onSubmit={this.handleSubmit}
           enctype="multipart/form-data"
          style={{
            marginBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "300px",
            borderColor: "black",
            borderRadius: "30px",
            borderStyle: "bold",
          }}
        >
          
          <Grid container spacing={4}>
<Grid item xs={1}></Grid>
            <Grid item xs={5}>
            <h3>Select Hotel Category</h3>
            <select onChange={this.change} value={this.state.SelectedCategory}>
                {this.state.Categories.map((Category, index) => (
                     <option  key={Category._id} value={Category._id}> {Category.CategoryName} </option>
          
            ))}
            </select>
</Grid>

            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Hotel Name:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Hotel_Name"
                    fullWidth
                    value={this.state.HotelName}
                    onChange={this.handleHotelNameChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <label>
                      <h3>Location:</h3>
                    </label>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      name="Location"
                      fullWidth
                      value={this.state.Location}
                      onChange={this.handleLocationChange}
                    />
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3> Contact Number:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="Contact_No"
                    value={this.state.Contactno}
                    onChange={this.handleContactnoChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Address: </h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="Address"
                    value={this.state.Address}
                    onChange={this.handleAddressChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Website:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Website"
                    fullWidth
                    value={this.state.Website}
                    onChange={this.handleWebsiteChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Facilities to be Provided:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    name="Facilities"
                    rows={4}
                    cols={3}
                    // defaultValue="Default Value"
                    variant="outlined"
                    value={this.state.Facilities}
                    onChange={this.handleFacilitiesChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                             {/* //className={classes.formControl} */}
                    <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Availability Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.Status}
          onChange={this.handleStatusChange}
                  label="Age"
                  fullWidth
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"Yes"}>Yes</MenuItem>
          <MenuItem value={"No"}>No</MenuItem>
        </Select>
      </FormControl>
                  {/* <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Status_status"
                    fullWidth
                    value={this.state.Status}
                    onChange={this.handleStatusChange}
                  /> */}
               
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3>Cost:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="Overall_Rating"
                    value={this.state.Ratings}
                    onChange={this.handleCostChange}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              <div class="row">
                <div class="col-sm">
                  <label>
                    <h3> Images:</h3>
                  </label>
                </div>
                <div class="col-sm">
                  <input type="file" name="file" multiple onChange={this.onDrop} />
                </div>
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <button variant="contained" style={{color: "blue" , position:"absolute", left:"50%" , justifyContent: "center" , alignItems: "center"}}>
            {" "}
            Add new Hotel{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default addHotel;