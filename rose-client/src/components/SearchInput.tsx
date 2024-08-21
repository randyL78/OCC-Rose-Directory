import {InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import {ChangeEvent} from "react";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

function SearchInput({value, setValue}: SearchInputProps) {
  const onChangHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <TextField
      label="Search"
      size="small"
      variant="outlined"
      type="search"
      InputProps={{
        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
        value,
        onChange: onChangHandler,
      }}
    />
  )
}

export default SearchInput;
