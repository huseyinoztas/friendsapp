import Pets from '@mui/icons-material/Pets';
import { InputBase, AppBar, Box, styled, Toolbar, Typography,Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import Mail from '@mui/icons-material/Mail';
import { NotificationAdd } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme})=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center", 
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
          Navbar
        </Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search..'/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <Mail/>
        </Badge>
        <Badge badgeContent={2} color="error">
          <NotificationAdd/>
        </Badge>
        <Avatar sx={{width:30, height:30}} 
                src="https://media.licdn.com/dms/image/C4D03AQEbOLFSUY4dyw/profile-displayphoto-shrink_400_400/0/1631081483326?e=1677110400&v=beta&t=O0Tkoyh13JskYo7-XSxw1pBxJOGeOoJsJi1R5H1WHCs"
                onClick={e=>setOpen(true)}
                />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="https://media.licdn.com/dms/image/C4D03AQEbOLFSUY4dyw/profile-displayphoto-shrink_400_400/0/1631081483326?e=1677110400&v=beta&t=O0Tkoyh13JskYo7-XSxw1pBxJOGeOoJsJi1R5H1WHCs"/>
        <Typography>Huseyin Oztas</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
     
  )
}

export default Navbar
