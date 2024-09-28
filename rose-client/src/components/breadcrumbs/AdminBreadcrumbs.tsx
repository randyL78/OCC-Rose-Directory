import {Breadcrumbs, Link} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {Link as RouterLink} from "react-router-dom";
import {routes} from "../../constants/routes.ts";

interface RoseBreadcrumbsProps {
  slug?: string
  name?: string
  color?: string
  path?: string
}

function AdminBreadcrumbs({slug, name, color = '#fff', path}: RoseBreadcrumbsProps) {
  const showDetailLink = slug && name && path

  return (
    <Breadcrumbs
      color={color}
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.Home}>Home</Link>
      <Link component={RouterLink} underline="hover" color="inherit" to={routes.Admin}>Admin</Link>
      {
        path &&
        <Link
          component={RouterLink}
          underline="hover"
          color="inherit"
          to={path === 'rose' ? routes.RoseAdmin : '/admin/companion'}
        >{ path === 'rose' ? 'Rose' : 'Companion' } Index</Link>
      }
      {
        showDetailLink && (
          <Link component={RouterLink} underline="hover" color="inherit" to={`${routes.RoseAdmin}/${slug}`}>{name}</Link>
        )
      }
    </Breadcrumbs>
  )
}

export default AdminBreadcrumbs;
