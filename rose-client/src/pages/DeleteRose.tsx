import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {Link, useFetcher, useParams} from "react-router-dom";
import {useAdminIndex} from "../constants/adminRoseContext.tsx";


export default function DeleteRose() {
  const fetcher = useFetcher();
  const { roseSlug } = useParams()
  const { plants } = useAdminIndex()

  const name = plants.filter(rose => rose.slug === roseSlug)[0].name

  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Delete Rose</DialogTitle>
      <DialogContent>
        Are you sure you want to delete { name }?
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' component={Link} to='/admin/roses' color='secondary' >Cancel</Button>

        <fetcher.Form method="DELETE">
          <Button variant='contained' type='submit'>Confirm</Button>
        </fetcher.Form>
      </DialogActions>
    </Dialog>
  )
}
