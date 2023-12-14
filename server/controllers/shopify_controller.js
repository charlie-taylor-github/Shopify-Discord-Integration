const stores = require("../models/stores.js");
const bot = require("./discord_controller.js");

function getOrderData(requestBody) {
  try {
    const order = {
      id: requestBody.id,
      storeId: requestBody.order_status_url.match(/\/\/([a-zA-Z0-9-]+)\./)[1],
      revenue: requestBody.current_total_price,
      currency: requestBody.currency
    }
    return { order };
  } catch (error) {
    return { error: error.message };
  }
}

async function setOrderHandledInDB(order) {
  const {
    error: getOrderHandledError,
    previouslyHandled
  } = await stores.getOrderHandled(order.storeId, order.id);
  if (getOrderHandledError) return { error: getOrderHandledError };
  if (previouslyHandled) return { error: "ORDER_PREVIOUSLY_HANDLED" };
  const {
    error: setOrderHandledError
  } = await stores.setOrderHandled(order.storeId, order.id);
  if (setOrderHandledError) return { error: setOrderHandledError };
  return {};
}

async function handleOrderCreated(requestBody) {
  const { order, error: orderDataError } = getOrderData(requestBody);
  if (orderDataError) return { error: orderDataError }
  const { error: dbSetError } = await setOrderHandledInDB(order);
  if (dbSetError) return { error: dbSetError };
  const { error: channelIdError, channelId } = await stores.getChannelId(order.storeId);
  if (channelIdError) return { error: channelIdError };
  if (!channelId) return { error: "STORE_NOT_FOUND" };

  order.url = `https://admin.shopify.com/store/${order.storeId}/orders/${order.id}`;
  const { error: botError } = bot.sendOrderUpdate(channelId, order);
  if (botError) return { error: botError };
  return {};
}

module.exports = {
  handleOrderCreated
};
