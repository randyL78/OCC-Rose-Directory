import {Box} from "@mui/material";

function Backdrop({imageUrl}: {imageUrl: string}) {
  return (
    <>
      <Box
        sx={{
          zIndex: -2,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#121212'
        }}
      />
      <Box
        sx={{
          zIndex: -1,
          opacity: .3,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundAttachment: 'fixed',
          backgroundColor: '#bcbcbc',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </>
  )
}

export default Backdrop;
