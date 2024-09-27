import {Autocomplete, Box, createFilterOptions, FilterOptionsState, TextField} from "@mui/material";
import {MuiColorInput} from "mui-color-input";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {ChangeEventHandler, Dispatch, SetStateAction, SyntheticEvent} from "react";
import {useLoaderData} from "react-router-dom";
import {RoseResponse} from "../interfaces/Response.ts";


const filter = createFilterOptions<rebloomTypes>()

interface stepProps {
  rose: AdminRoseDetailItem,
  handleFieldChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  setRose: Dispatch<SetStateAction<AdminRoseDetailItem>>
}

interface rebloomTypes {
  value?: string,
  title: string
}

export function RoseCreateSecondStep({ rose, handleFieldChange, setRose }: stepProps) {
  const { rebloomTypes } = (useLoaderData() as RoseResponse).data as { rose: AdminRoseDetailItem, rebloomTypes: string[] }
    const rebloomOptions = rebloomTypes.map(rebloomType => ({ title: rebloomType }))

  const handleRebloomsChange = (_event: SyntheticEvent<Element, Event>, value: string | rebloomTypes | null) => {
    if(typeof value === 'string') {
      setRose(prevState => ({
        ...prevState,
        reblooms: value
      }))
    } else if (value && value.value) {
      setRose(prevState => ({
        ...prevState,
        reblooms: value.value as string
      }))
    } else if (value && value.title) {
      setRose(prevState => ({
        ...prevState,
        reblooms: value.title
      }))
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


  function handleSetPrimaryColor(value: string): void {
    setRose(prevState => ({
      ...prevState,
      colorPrimary: value,
    }))
  }

  function handleSetSecondaryColor(value: string): void {
    setRose(prevState => ({
      ...prevState,
      colorSecondary: value,
    }))
  }

  return (
    <>
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
          value={rose.reblooms}
          freeSolo
          handleHomeEndKeys
          options={rebloomOptions}
          fullWidth
        />
      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <MuiColorInput
          format='hex'
          label='Primary Color'
          value={rose.colorPrimary}
          name='colorPrimary'
          sx={{ mr: 2}}
          onChange={handleSetPrimaryColor}
        />
        <MuiColorInput
          format='hex'
          label='Secondary Color'
          name='colorSecondary'
          value={rose.colorSecondary || ''}
          onChange={handleSetSecondaryColor}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>
        <TextField
          type="number"
          label="Intensity"
          name="fragranceIntensity"
          value={rose.fragranceIntensity}
          onChange={handleFieldChange}
          required
        />
        <TextField
          sx={{ ml: 2 }}
          label="Fragrance Description"
          name="fragranceDescription"
          value={rose.fragranceDescription}
          onChange={handleFieldChange}
          fullWidth
        />
      </Box>
    </>
  )
}
