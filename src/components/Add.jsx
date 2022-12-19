import { Avatar, Fab, Modal, styled, Tooltip, Typography, Box, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
   
})

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
    title="Delete" 
    sx={{position:"fixed", 
    bottom:20, left:{xs:"calc(80%)", md:30}}}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Craete Post</Typography>
          <UserBox>
          <Avatar sx={{width:30, height:30}} 
                src="https://media.licdn.com/dms/image/C4D03AQEbOLFSUY4dyw/profile-displayphoto-shrink_400_400/0/1631081483326?e=1677110400&v=beta&t=O0Tkoyh13JskYo7-XSxw1pBxJOGeOoJsJi1R5H1WHCs"           
                />
                <Typography fontWeight={500} variant="span">Huseyin Oztas</Typography>
          </UserBox>
          <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on Your Mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary"/>
        <Image color="secondary"/>
        <VideoCameraBack color="success"/>
        <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
  
</ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
