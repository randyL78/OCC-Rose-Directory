import {Link, useFetcher, useParams} from "react-router-dom";
import {useAdminIndex} from "../constants/adminRoseContext.tsx";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {routes} from "../constants/routes.ts";

export function DeleteCompanion() {
  const fetcher = useFetcher();
  const { slug } = useParams()
  const { plants } = useAdminIndex()

  const name = plants.filter(plant => plant.slug === slug)[0].name

  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Delete Companion Plant</DialogTitle>
      <DialogContent>
        Are you sure you want to delete { name }?
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' component={Link} to={routes.CompanionAdmin} color='secondary' >Cancel</Button>

        <fetcher.Form method="DELETE">
          <Button variant='contained' type='submit'>Confirm</Button>
        </fetcher.Form>
      </DialogActions>
    </Dialog>
  )
}
