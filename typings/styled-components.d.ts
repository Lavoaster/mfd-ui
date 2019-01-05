import { ThemeInterface } from "../src/app/themes/ThemeInterface";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

declare module "styled-components/macro" {
  export interface DefaultTheme extends ThemeInterface {}
}
