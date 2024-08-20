import {useLoaderData} from "react-router-dom";
import {Container, Paper, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseList from "../components/RoseList.tsx";

function RoseIndex() {
  const roses = useLoaderData() as RoseIndexItem[]

  return (
    <>
      <Backdrop imageUrl={backdropImage} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <RoseBreadcrumbs />
        <Typography variant="h1" color='#fff'>Rose Directory</Typography>
        <Paper>
          { roses &&
            <RoseList roses={roses} />
          }
        </Paper>
      </Container>
    </>
  )
}

export default RoseIndex;
