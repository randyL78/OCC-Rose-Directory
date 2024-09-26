import {
  Autocomplete,
  Box,
  Button, createFilterOptions,
  Dialog,
  DialogContent,
  DialogTitle,
  FilterOptionsState,
  TextField,
  Typography
} from "@mui/material";
import {Link as RouterLink, useFetcher, useLoaderData} from "react-router-dom";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {RoseResponse} from "../interfaces/Response.ts";
import {SyntheticEvent, useState} from "react";
import {MuiColorInput} from "mui-color-input";

const filter = createFilterOptions<rebloomTypes>()
interface rebloomTypes {
  value?: string,
  title: string
}

export default function RoseCreate() {
  const fetcher = useFetcher()
  const { rose, rebloomTypes } = (useLoaderData() as RoseResponse).data as { rose: AdminRoseDetailItem, rebloomTypes: string[] }

  const [primaryColor, setPrimaryColor] = useState(rose.colorPrimary)
  const [secondaryColor, setSecondaryColor] = useState(rose.colorSecondary)
  const [reblooms, setReblooms] = useState<rebloomTypes | null>({ title: rose.reblooms || ''})

  const rebloomOptions = rebloomTypes.map(rebloomType => ({ title: rebloomType }))

  const handleRebloomsChange = (_event: SyntheticEvent<Element, Event>, value: string | rebloomTypes | null) => {
    if(typeof value === 'string') {
      setReblooms({ title: value})
    } else if (value && value.value) {
      // Create a new value from the user input
      setReblooms({
        title: value.value,
      });
    } else {
      setReblooms(value)
    }
  }

  const handleFilterOptions = (options: rebloomTypes[], params: FilterOptionsState<rebloomTypes>) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option: rebloomTypes) => inputValue.toLowerCase() === option.title.toLowerCase());
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        value: inputValue,
        title: `Add "${inputValue}"`
      });
    }

    return filtered;
  }

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h5" component="p" pl={2} color="textPrimary">
          { rose.name ?  `Edit ${rose.name}` : 'Add A New Rose' }
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
              value={rose.slug || "Auto configured"}
              disabled
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
              disabled
              value={rose.qrCodeUrl || "Auto configured"}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <Autocomplete
              renderInput={(params) => <TextField name="reblooms" required {...params} label='Reblooms' />}
              onChange={handleRebloomsChange}
              filterOptions={handleFilterOptions}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <li key={key} {...optionProps}>
                    {option.title}
                  </li>
                );
              }}
              getOptionLabel={(option) => {
                if (typeof option === 'string') {
                  return option;
                }
                if (option.value) {
                  return option.value;
                }
                return option.title;
              }}
              value={reblooms}
              freeSolo
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              options={rebloomOptions}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="space-between" p={2}>
            <MuiColorInput
              format='hex'
              label='Primary Color'
              value={primaryColor}
              name='colorPrimary'
              sx={{ mr: 2}}
              onChange={(value) => setPrimaryColor(value)}
            />
            <MuiColorInput
              format='hex'
              label='Secondary Color'
              name='colorSecondary'
              value={secondaryColor || ''}
              onChange={(value) => setSecondaryColor(value)}
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
