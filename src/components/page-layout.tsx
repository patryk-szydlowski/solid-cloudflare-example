import { type ParentProps } from "solid-js";

import { Background } from "~/components/background";
import { Text } from "~/components/text";

export const PageLayout = (props: ParentProps) => (
  <Background color="primary">
    <Text color="primary">{props.children}</Text>
  </Background>
);
