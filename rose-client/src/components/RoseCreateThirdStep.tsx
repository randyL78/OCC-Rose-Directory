import {Box, TextField} from "@mui/material";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ChangeEventHandler} from "react";

interface stepProps {
  rose: AdminRoseDetailItem,
  handleFieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function RoseCreateThirdStep({ rose, handleFieldChange }: stepProps) {
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <TextField
          sx={{width: 1000 }}
          multiline
          required
          rows={3}
          label="Description"
          name="description"
          value={rose.description}
          onChange={handleFieldChange}
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
          value={rose.careInstructions}
          onChange={handleFieldChange}
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
          value={rose.history}
          onChange={handleFieldChange}
          fullWidth
        />
      </Box>
    </>
  )
}
