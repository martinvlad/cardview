import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button, SHAPE } from "baseui/button";

export default function Header() {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem
          style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "37px",
            color: "#add8e6"
          }}
        >
          Meet the team
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink style={{ color: "#add8e6" }} href="#projects">
            Projects
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink style={{ color: "#add8e6" }} href="#contributors">
            Popular Contributers
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button
            style={{ marginRight: "10px", color: "#add8e6" }}
            shape={SHAPE.pill}
          >
            View Skills
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}
