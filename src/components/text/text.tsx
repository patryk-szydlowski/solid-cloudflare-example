import { type ParentProps } from "solid-js";

import { text } from "./text.css";

export const Text = (props: ParentProps) => <span class={text}>{props.children}</span>;
