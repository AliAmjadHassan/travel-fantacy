import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { AccountCircleRounded, Add, AddIcCallOutlined, Assignment, BeachAccess, Category, ConfirmationNumber, Dashboard, Delete, Event, ExitToApp, ExploreSharp, Home, Hotel, HotelRounded, LocalOffer, Place, Settings } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import HomeFragment from ""
import { createStyles, Icon, makeStyles, withStyles } from '@material-ui/core';
import AppBarComponenet from '../fragments/AppBar';
import AddHotel from './AddHotel';
import HomeFragment from './Home';
import Hotels from '../../Hotels/Hotels';
import AllHotel from './AllHotelsFragment';
import AllHotelCategory from './AllHotelCategory';
import AddHotelCategory from './AddHotelCategory';
import AddRoomCategory from './AddRoomCategory';
import AllRoomCategory from './AllRoomCategory';
import AddRoom from './AddRoom';
import AllHotelsAllRooms from './AllHotelsAllRooms';
const drawerWidth = 240;
const useStyles = theme => ({
                  
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icon: {
        color: "blue",
    },
  
});
        

class SideBarComponent extends Component {
     constructor(){
        super();
         this.state = {
             render: '',
             openHotel: false,
             home: true,
             openTour: false,
             openPackage: false,
             openBooking: false,
             openUser: false,
             openBlog: false,
         }

         this.handleHotelClick = this.handleHotelClick.bind(this);    
         this.handleTourClick = this.handleTourClick.bind(this);  
         this.handlePackageClick = this.handlePackageClick.bind(this);   
         this.handleBookingClick = this.handleBookingClick.bind(this);
         this.handleUserClick = this.handleUserClick.bind(this);
         this.handleBlogClick = this.handleBlogClick.bind(this);
    }
        

    handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});        
    }
    handleHotelClick() {
        this.setState({openHotel: !this.state.openHotel});
    };
    handleTourClick() {
        this.setState({ openTour: !this.state.openTour });
    }
    handlePackageClick() {
        this.setState({ openPackage: !this.state.openPackage });
    }
    handleBookingClick() {
        this.setState({ openBooking: !this.state.openBooking });
    }
    handleUserClick() {
        this.setState({ openUser: !this.state.openUser });
    }
    handleBlogClick() {
        this.setState({ openBlog: !this.state.openBlog });
    }
    _renderSubComp(){
        switch(this.state.render){
            case 'addHotel': return <AddHotel/>
            case 'AllHotel': return <AllHotel/>
            case 'Home': return <HomeFragment /> 
            case 'AllHotelCategory': return <AllHotelCategory />
            case 'AddHotelCategory': return <AddHotelCategory />
            case 'AddRoomCategory': return <AddRoomCategory />
            case 'AllRoomCategory': return <AllRoomCategory />
            case 'AllRooms': return <AllHotelsAllRooms/>
            default: return <HomeFragment />
        }
    }
    
 
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper:classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button  onClick={this.handleClick.bind(this, 'Home')}>
                                <ListItemIcon> <Home className={classes.icon} /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <ListItemIcon> <Home className={classes.icon} /></ListItemIcon>
                                <ListItemText primary="Posts" />
                            </ListItem>
                            <Divider />
                            {/* <ListItem button >
                                <ListItemIcon> <BeachAccess className={classes.icon} /></ListItemIcon>
                                <ListItemText primary="Tours" />
                            </ListItem> */}
                            
                            <ListItem button  onClick={this.handleTourClick} >
                                <ListItemIcon className={classes.icon}>
                                    <BeachAccess />
                                </ListItemIcon>
                                <ListItemText primary="Tour" />
                                {this.state.openTour ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openTour} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Tours" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Tour" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem>
                                   
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Category className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Tour Categories" />
                                    </ListItem>
                                
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Tour Category" />
                                    </ListItem>
                                     
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem button  onClick={this.handlePackageClick} >
                                <ListItemIcon className={classes.icon}>
                                    <LocalOffer />
                                </ListItemIcon>
                                <ListItemText primary="Packages" />
                                {this.state.openPackage ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openPackage} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Packages" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Package" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem button >
                                <ListItemIcon> <Event className={classes.icon} /></ListItemIcon>
                                <ListItemText primary="Events" />
                            </ListItem>
                            <Divider />
                            
                            <ListItem button  onClick={this.handleBookingClick} >
                                <ListItemIcon className={classes.icon}>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="Bookings" />
                                {this.state.openBooking ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openBooking} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Bookings" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Hotel className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Hotel Bookings" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                     <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Tour Bookings" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem button >
                                <ListItemIcon> <Place className={classes.icon} /></ListItemIcon>
                                <ListItemText primary="Places" />
                            </ListItem>
                            <Divider />
                        
                            <ListItem button  onClick={this.handleHotelClick} >
                                <ListItemIcon className={classes.icon}>
                                    <Hotel />
                                </ListItemIcon>
                                <ListItemText primary="Hotel" />
                                {this.state.openHotel ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openHotel} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Hotels" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Hotel" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem>
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'AllRooms')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Hotel Rooms" />
                                      {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem>
                                   
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'AllHotelCategory')}>
                                        <ListItemIcon>
                                            <Category className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Hotels Categories" />
                                    </ListItem>
                                     <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllRoomCategory')}>
                                        <ListItemIcon>
                                            <Category className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Rooms Categories" />
                                    </ListItem>
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'AddHotelCategory')}>
                                        <ListItemIcon>
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Hotel Category" />
                                    </ListItem>
                                     <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AddRoomCategory')}>
                                        <ListItemIcon>
                                            <Add className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add Room Category" />
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Divider />
      
                             <ListItem button  onClick={this.handleUserClick} >
                                <ListItemIcon className={classes.icon}>
                                    <AccountCircleRounded />
                                </ListItemIcon>
                                <ListItemText primary="Users" />
                                {this.state.openUser ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openUser} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Users" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Hotel className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new User" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                     <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Admins" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Admin" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Guides" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Guide" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                </List>
                            </Collapse>
                            <Divider />
                             <ListItem button  onClick={this.handleBlogClick} >
                                <ListItemIcon className={classes.icon}>
                                    <Assignment />
                                </ListItemIcon>
                                <ListItemText primary="Blog" />
                                {this.state.openBlog ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={this.state.openBlog} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}  onClick={this.handleClick.bind(this, 'AllHotel')}>
                                        <ListItemIcon>
                                            <StarBorder className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="All Blog Posts" />
                                    </ListItem>
                                    {/* // onClick={handleTabClick} */}
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <Hotel className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Blog Post" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                     <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Blog Categories" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                    <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'addHotel')}>
                                        <ListItemIcon >
                                            <BeachAccess className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText primary="Add new Blog Category" />
                                        {/* {this.state.home ? <HomeFragment /> : null} */}
                                    </ListItem> 
                                </List>
                            </Collapse>
                            <Divider />
                            <ListItem button >
                                <ListItemIcon> <Settings style={{ color: "blue" }} /></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                            <Divider />
                            <ListItem button >
                                <ListItemIcon> <ExitToApp style={{ color: "blue" }} /></ListItemIcon>
                                <ListItemText primary="Logout" />
                                <Divider />
                            </ListItem>
                        </List>
                        <Divider />
                    </div>
                </Drawer>
                {this._renderSubComp()}
            </div>
        );
    }
    }
   

export default withStyles(useStyles)(SideBarComponent)
