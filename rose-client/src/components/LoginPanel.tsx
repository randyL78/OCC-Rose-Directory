import {Avatar, Box, Button, Drawer, Link, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {FormEvent} from "react";

function LoginPanel({open, onClose}: {open: boolean, onClose: () => void}) {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose()
  }

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
        <Box component="form" noValidate onSubmit={submit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
          <Typography mt={4} align='center'>
            Powered by <Link href="https://randylayne.com" underline="none">GeminiOneStop</Link>
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default LoginPanel;
