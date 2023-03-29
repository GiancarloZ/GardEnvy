import React from "react";
import getGardens from "@wasp/queries/getGardens";
import { useQuery } from "@wasp/queries";

// Components
import { GardenCard, FloatingAddGarden } from "../../components/Gardens";
import { AddGardenModal } from "../../components/Modals";

// Styled
import { Wrapper } from "./styled";

export default function GardensPage() {
  const [open, setOpen] = React.useState(false);
  const { data: gardens, isFetching, error } = useQuery(getGardens);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 500);
    }
  }, [open]);
  console.log(open, "open");
  console.log(gardens, "gardens");
  return (
    <Wrapper>
      <FloatingAddGarden onClick={() => setOpen((o) => !o)} />
      {gardens?.length > 0 ? (
        <GardenCard />
      ) : (
        <div>There are no gardens :'(</div>
      )}
      {isFetching && <div>...loading</div>}
      {error && <div>{error?.message}</div>}
      <AddGardenModal
        open={open}
        closeModal={() => setOpen((o) => !o)}
        mounted={mounted}
      />
    </Wrapper>
  );
}
