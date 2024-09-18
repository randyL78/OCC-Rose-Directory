import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import {Link as RouterLink, useFetcher} from "react-router-dom";

export default function RoseCreate() {
  const fetcher = useFetcher()

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h5" component="p" pl={2} color="textPrimary">
          Add A New Rose
        </Typography>
      </DialogTitle>
      <DialogContent>
        <fetcher.Form method='post'>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Name"
              name="name"
              required
            />
            <TextField
              label="Slug"
              name="slug"
              disabled
              defaultValue="Auto configured"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Image Url"
              name="imageUrl"
              required
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Thumbnail Url"
              name="thumbnailUrl"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="QR Code Url"
              name="qrCodeUrl"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Reblooms"
              name="reblooms"
              required
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Primary Color"
              name="colorPrimary"
              required
            />
            <TextField
              label="Secondary Color"
              name="colorSecondary"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              type="number"
              label="Intensity"
              name="fragranceIntensity"
              required
            />
            <TextField
              sx={{ ml: 2 }}
              label="Fragrance Description"
              name="fragranceDescription"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              multiline
              required
              rows={3}
              label="Description"
              name="description"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              multiline
              required
              rows={3}
              label="Care Instructions"
              name="careInstructions"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              multiline
              required
              rows={3}
              label="History"
              name="history"
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button
              component={RouterLink}
              to='/admin/roses'
              color="secondary"
              sx={{ mr: 2 }}
              variant="outlined">
              Cancel
            </Button>
            <Button
              type='submit'
              variant="contained">
              Submit
            </Button>
          </Box>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  )
}
