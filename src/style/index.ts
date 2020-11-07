import baseStyled, { ThemedStyledInterface } from "styled-components";
import theme from "./theme";

type Theme = typeof theme;

const styled = baseStyled as ThemedStyledInterface<Theme>;
export default styled;
