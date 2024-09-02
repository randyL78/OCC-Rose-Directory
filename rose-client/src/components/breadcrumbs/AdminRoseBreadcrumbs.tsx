import {Breadcrumbs, Link} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Link as RouterLink} from "react-router-dom";
import {routes} from "../../constants/routes.ts";

interface RoseBreadcrumbsProps {
  slug?: string
  name?: string
  color?: string
}

function AdminRoseBreadcrumbs({slug, name, color = '#fff'}: RoseBreadcrumbsProps) {
  const showDetailLink = slug && name

  return (
    <Breadcrumbs
      color={color}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.Home}>Home</Link>
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.RoseAdmin}>Rose Index</Link>
      {
        showDetailLink && (
          <Link component={RouterLink} underline="hover" color="inherit" to={`${routes.RoseAdmin}/${slug}`}>{name}</Link>
        )
      }
    </Breadcrumbs>
  )
}

export default AdminRoseBreadcrumbs;
