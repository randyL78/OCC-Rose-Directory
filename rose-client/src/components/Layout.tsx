import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

function Layout() {
  return (
    <Box
      sx={{
        position: 'relative',
        pb: 4,
        minHeight: '100vh',
      }}
    >
      <Outlet />
    </Box>
  )
}

export default Layout
