import {IconButton} from "@mui/material";
import {ExpandLess, ExpandMore, Search} from "@mui/icons-material";

interface SearchButtonProps {
  open: boolean;
  clickHandler: () => void;
}

function SearchButton({open, clickHandler}: SearchButtonProps) {
  return (
    <IconButton aria-label="search" size="large" onClick={clickHandler}>
      <Search />
      { open ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  )
}

export default SearchButton;
