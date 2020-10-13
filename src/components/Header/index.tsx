import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <div>Hello</div>
      <div>
        <Switch
          onChange={toggleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.primary)}
          onColor={colors.secondary}
        />
      </div>
    </Container>
  );
};

export default Header;
