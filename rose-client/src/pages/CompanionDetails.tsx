import {useLoaderData} from "react-router-dom";
import {CompanionDetailItem} from "../interfaces/CompanionDetailItem.ts";
import Backdrop from "../components/Backdrop.tsx";
import HeroImage from "../components/HeroImage.tsx";
import {Container, Stack, Typography} from "@mui/material";
import CompanionBreadcrumbs from "../components/breadcrumbs/CompanionBreadcrumbs.tsx";
import DescriptionCard from "../components/cards/DescriptionCard.tsx";

export function CompanionDetails() {
  const companion = useLoaderData() as CompanionDetailItem;
  const breadcrumbs = <CompanionBreadcrumbs slug={companion.slug} name={companion.name} />

  return (
    <>
      <Backdrop imageUrl={companion.imageUrl} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <HeroImage imageUrl={companion.imageUrl} breadcrumb={breadcrumbs}/>

        <Stack spacing={4}>
          <Typography align="center" variant="h1" color="#fff">{companion.name}</Typography>
        </Stack>
        <DescriptionCard>{companion.description}</DescriptionCard>
      </Container>
    </>
  )
}
