import { Background } from "~/components/background";
import { PageLayout } from "~/components/page-layout";
import { Text } from "~/components/text";

export default () => (
  <Background color="primary">
    <PageLayout>
      <Text color="primary">Test route with Vanilla Extract</Text>
    </PageLayout>
  </Background>
);
