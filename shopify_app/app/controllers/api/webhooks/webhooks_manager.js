import config from "../../../config.js";;

const serverUrl = config.serverUrl;
const route = config.serverRoutes.webhooks.createOrder;
const endpoint = serverUrl + route;

async function makeQuery(graphql, queryString) {
    const response = await graphql(queryString);
    const responseJson = await response.json();
    const data = responseJson.data;
    return data;
}

async function getAll(graphql, topic) {
    const query = `
    query {
        webhookSubscriptions(first: 50, topics: ${topic}) {
            edges {
                node {
                    id
                }
            }
        }
    }
    `;
    try {
        const response = await makeQuery(graphql, query);
        return { ids: response?.webhookSubscriptions?.edges?.map(s => s?.node?.id) };
    } catch (e) {
        return { error: e };
    }
}

async function createOne(graphql, topic) {
    const query = `
    mutation {
        webhookSubscriptionCreate(
            topic: ${topic}
            webhookSubscription: {
                callbackUrl: "${endpoint}"
            }
        ) {
            webhookSubscription {
                id
            }
        }
    }
    `;
    try {
        const response = await makeQuery(graphql, query);
        if (!response) return { error: "CREATE_WEBHOOK_SUBSCRIPTION_ERROR" };
        return {};
    } catch (e) {
        return { error: e };
    }
}

async function deleteOne(graphql, id) {
    const query = `
    mutation {
        webhookSubscriptionDelete(id: "${id}") {
            deletedWebhookSubscriptionId
            userErrors {
                field
                message
            }
        }
    }
    `;
    try {
        const response = await makeQuery(graphql, query);
        if (!response) return { error: "DELETE_WEBHOOK_SUBSCRIPTION_ERROR" };
        return {};
    } catch (e) {
        return { error: e };
    }
}

export default { getAll, createOne, deleteOne };
