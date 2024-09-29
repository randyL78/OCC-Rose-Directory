import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import {Link as RouterLink, useFetcher, useLoaderData} from "react-router-dom";
import {AdminCompanionDetailItem} from "../interfaces/AdminCompanionDetailItem.ts";
import {routes} from "../constants/routes.ts";

export function CompanionCreate() {
  const fetcher = useFetcher();
  const companion = useLoaderData() as AdminCompanionDetailItem

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h5" component="p" pl={2} color="textPrimary">
          { companion.name ?  `Edit ${companion.name}` : 'Add A New Companion Plant' }
        </Typography>
      </DialogTitle>
      <DialogContent>
        <fetcher.Form method='post'>
          <Box display='flex' justifyContent='space-between' flexDirection='column' sx={{ minHeight: '45vh'}}>
            <Box>
              <Box display="flex" justifyContent="space-between" p={2}>
                <TextField
                  label="Name"
                  name="name"
                  defaultValue={companion.name}
                  required
                  sx={{mr: 2, width: 600}}
                />
                <TextField
                  label="Slug"
                  name="slug"
                  sx={{ width: 600 }}
                  defaultValue={companion.slug || "Auto configured"}
                  disabled
                />
              </Box>
              <Box display="flex" justifyContent="space-between" p={2}>
                <TextField
                  label="Image Url"
                  name="imageUrl"
                  defaultValue={companion.imageUrl}
                  required
                  fullWidth
                />
              </Box>
              <Box display="flex" justifyContent="space-between" p={2}>
                <TextField
                  label="QR Code Url"
                  name="qrCodeUrl"
                  disabled
                  defaultValue={companion.qrCodeUrl || "Auto configured"}
                  fullWidth
                />
              </Box>
              <Box display="flex" justifyContent="space-between" p={2}>
                <TextField
                  sx={{width: 1000 }}
                  multiline
                  required
                  rows={3}
                  label="Description"
                  name="description"
                  defaultValue={companion.description}
                  fullWidth
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" p={2}>
              <Button
                component={RouterLink}
                to={routes.CompanionAdmin}
                color="secondary"
                sx={{ mr: 2 }}
                variant="outlined">
                Cancel
              </Button>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  color="primary"
                  type='submit'
                  variant='contained'
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  )
}
