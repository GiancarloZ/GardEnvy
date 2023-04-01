import React from "react";
import fetchAllGardens from "@wasp/queries/fetchAllGardens";
import { useQuery } from "@wasp/queries";

// Components
import { GardenCard, FloatingAddGarden } from "../../components/Gardens";
import { AddGardenModal } from "../../components/Modals";

// Styled
import { Wrapper } from "./styled";

export default function GardensPage() {
  const [open, setOpen] = React.useState(false);

  const { data: gardens, isFetching, error } = useQuery(fetchAllGardens);

  console.log(open, "open");
  console.log(gardens, "gardens");
  return (
    <Wrapper>
      <FloatingAddGarden onClick={() => setOpen((o) => !o)} />
      {gardens?.length > 0 &&
        gardens.map((garden) => <GardenCard garden={garden} />)}
      {!gardens?.length && isFetching && <div>...loading</div>}
      {!gardens?.length && !isFetching && <div>There are no gardens :' </div>}
      {error && <div>{error?.message}</div>}
      <AddGardenModal open={open} closeModal={() => setOpen((o) => !o)} />
    </Wrapper>
  );
}
