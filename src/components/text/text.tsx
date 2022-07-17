import { type RecipeVariants } from "@vanilla-extract/recipes";
import { type ParentProps } from "solid-js";

import { text } from "./text.css";

type Variants = Required<RecipeVariants<typeof text>>;

export const Text = (props: ParentProps<Variants>) => (
  <span class={text({ color: props.color })}>{props.children}</span>
);
