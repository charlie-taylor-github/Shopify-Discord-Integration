import { authenticate } from "../shopify.server";
import { Card, Page, Text, Layout, Button } from "@shopify/polaris";
import { useLoaderData, useSubmit } from "@remix-run/react";
import webhooks from "../controllers/api/webhooks/webhooks_interface.js";

export async function loader({ request }) {
  const { admin } = await authenticate.admin(request);
  const { error, ids } = await webhooks.getAll(admin.graphql, "ORDERS_CREATE");
  return { error, ids };
}

export async function action({ request }) {
  const { admin } = await authenticate.admin(request);
  const data = await request.formData();
  const action = await data.get("action");

  let error;
  if (action === "create-subscription") {
    const { error: createError } = await webhooks.createOne(
      admin.graphql, "ORDERS_CREATE"
    );
    if (createError) error = createError;
  }

  if (action === "delete-subscriptions") {
    const { error: deleteError } = await webhooks.deleteAll(
      admin.graphql, "ORDERS_CREATE"
    );
    if (deleteError) error = deleteError;
  }

  return { error };
}

export default function Index() {
  const loaderData = useLoaderData();
  const submit = useSubmit();

  return (
    <Page>
      <Text as="h1" variant="headingLg">{loaderData?.error}</Text>

      <Button onClick={() => {
        submit(
          { action: "delete-subscriptions" },
          { method: "POST" });
      }}
      >
        Delete All Webhook Subscriptions
      </Button>
      <Button onClick={() => {
        submit(
          { action: "create-subscription" },
          { method: "POST" });
      }}
      >
        Create a Webhook Subscription
      </Button>

      <Card>
        <Layout>
          {
            loaderData?.ids && loaderData.ids.map(id => (
              <Layout.Section>
                <Text as="h3" variant="bodyLg">{id}</Text>
              </Layout.Section>
            ))
          }
        </Layout>
      </Card>
    </Page >
  );
}