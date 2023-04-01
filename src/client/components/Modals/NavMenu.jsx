import React from "react";

// Styled
import {
  ModalSlideContainer,
  ModalBackground,
  NavItem,
  ItemWrapper,
} from "./styled";

export function NavMenu({ open }) {
  console.log(open, "openNav");
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

  return (
    <ModalSlideContainer open={open} mounted={mounted}>
      <ModalBackground
        onClick={(e) => e.stopPropagation()}
        bg="#939600"
        align="top"
        padding="72px 0 0 0"
        open={open}
      >
        <ItemWrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/gardens">Gardens</NavItem>
          <NavItem to="/seeds">Seeds</NavItem>
        </ItemWrapper>
      </ModalBackground>
    </ModalSlideContainer>
  );
}
