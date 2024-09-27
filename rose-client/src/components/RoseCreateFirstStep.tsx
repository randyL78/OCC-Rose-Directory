import {Box, TextField} from "@mui/material";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ChangeEventHandler} from "react";

interface stepProps {
  rose: AdminRoseDetailItem,
  handleFieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function RoseCreateFirstStep({ rose, handleFieldChange }: stepProps) {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <TextField
          label="Name"
          name="name"
          value={rose.name}
          onChange={handleFieldChange}
          required
          sx={{mr: 2, width: 600}}
        />
        <TextField
          label="Slug"
          name="slug"
          sx={{ width: 600 }}
          value={rose.slug || "Auto configured"}
          disabled
        />
      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <TextField
          label="Image Url"
          name="imageUrl"
          onChange={handleFieldChange}
          value={rose.imageUrl}
          required
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <TextField
          label="Thumbnail Url"
          name="thumbnailUrl"
          onChange={handleFieldChange}
          value={rose.thumbnailUrl || ''}
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
    </Box>
  )
}
