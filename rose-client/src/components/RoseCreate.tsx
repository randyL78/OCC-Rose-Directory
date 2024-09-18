import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import {Link as RouterLink, useFetcher, useLoaderData} from "react-router-dom";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {RoseResponse} from "../interfaces/Response.ts";

export default function RoseCreate() {
  const fetcher = useFetcher()
  const rose = (useLoaderData() as RoseResponse).data as AdminRoseDetailItem

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
              defaultValue={rose.name}
              required
            />
            <TextField
              label="Slug"
              name="slug"
              value={rose.slug}
              disabled
              defaultValue="Auto configured"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Image Url"
              name="imageUrl"
              defaultValue={rose.imageUrl}
              required
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Thumbnail Url"
              name="thumbnailUrl"
              defaultValue={rose.thumbnailUrl}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="QR Code Url"
              name="qrCodeUrl"
              defaultValue={rose.qrCodeUrl}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Reblooms"
              name="reblooms"
              defaultValue={rose.reblooms}
              required
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              label="Primary Color"
              name="colorPrimary"
              defaultValue={rose.colorPrimary}
              required
            />
            <TextField
              label="Secondary Color"
              name="colorSecondary"
              defaultValue={rose.colorSecondary}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <TextField
              type="number"
              label="Intensity"
              name="fragranceIntensity"
              defaultValue={rose.fragranceIntensity}
              required
            />
            <TextField
              sx={{ ml: 2 }}
              label="Fragrance Description"
              name="fragranceDescription"
              defaultValue={rose.fragranceDescription}
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
              defaultValue={rose.description}
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
              defaultValue={rose.careInstructions}
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
              defaultValue={rose.history}
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
