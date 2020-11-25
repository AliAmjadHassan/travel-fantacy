import { CssBaseline, Grid } from '@material-ui/core';
import React from 'react';
import AppBarComponenet from './fragments/AppBar';
import HomeFragment from './fragments/Home';
import SideBarComponent from './fragments/SideBarUser';

    
export default function ClippedDrawer() {
  
  return (
    <div>
      <CssBaseline />
      <AppBarComponenet />
      {/* {home ? <HomeFragment /> : null}   */}
      <SideBarComponent/>
      
    </div>
  );
}
