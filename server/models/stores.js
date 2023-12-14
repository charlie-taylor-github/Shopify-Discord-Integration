const stores = [
  {
    storeId: "development-store-12345",
    discordChannelId: "990244675988361226",
    handledOrderIds: []
  }
];

async function getChannelId(storeId) {
  const match = stores.find(c => c.storeId === storeId);
  return { channelId: match?.discordChannelId };
};

async function getOrderHandled(storeId, orderId) {
  const match = stores.find(c => c.storeId === storeId);
  if (!match) return { error: "STORE_NOT_FOUND" };
  const previouslyHandled = match.handledOrderIds?.includes(orderId);
  return { previouslyHandled };
}

async function setOrderHandled(storeId, orderId) {
  const { previouslyHandled } = await getOrderHandled(storeId, orderId);
  if (previouslyHandled) return {};
  const match = stores.find(c => c.storeId === storeId);
  match?.handledOrderIds.push(orderId);
  return {};
};

module.exports = { getChannelId, getOrderHandled, setOrderHandled };
