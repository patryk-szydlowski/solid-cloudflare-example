import { type ParentProps } from "solid-js";

import styles from "./text.module.css";

export const Text = (props: ParentProps) => (
  <span class={`${styles["text"]}`}>{props.children}</span>
);
