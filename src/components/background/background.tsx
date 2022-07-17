import { type RecipeVariants } from "@vanilla-extract/recipes";
import { type ParentProps } from "solid-js";

import { background } from "./background.css";

type Variants = Required<RecipeVariants<typeof background>>;

export const Background = (props: ParentProps<Variants>) => (
  <div class={background({ color: props.color })}>{props.children}</div>
);
