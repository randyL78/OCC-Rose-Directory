import {Avatar, Box, Button, Drawer, Link, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Form} from "react-router-dom";

function LoginPanel({open, onClose}: {open: boolean, onClose: () => void}) {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box>
          <Form method="post" replace>

          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          </Form>
          <Typography mt={4} align='center'>
            Powered by <Link href="https://randylayne.com" underline="none">Red Eagle Software</Link>
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default LoginPanel;
