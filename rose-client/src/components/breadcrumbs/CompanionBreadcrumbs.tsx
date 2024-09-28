import {Breadcrumbs, Link} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Link as RouterLink} from "react-router-dom";
import {routes} from "../../constants/routes.ts";

interface CompanionBreadcrumbsProps {
  slug?: string
  name?: string
  color?: string
}

function CompanionBreadcrumbs({slug, name, color = '#fff'}: CompanionBreadcrumbsProps) {
  const showDetailLink = slug && name

  return (
    <Breadcrumbs
      color={color}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.Home}>Home</Link>
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.CompanionIndex}>Companion Directory</Link>
      {
        showDetailLink && (
          <Link component={RouterLink} underline="hover" color="inherit" to={`${routes.CompanionDetails}/${slug}`}>{name}</Link>
        )
      }
    </Breadcrumbs>
  )
}

export default CompanionBreadcrumbs
