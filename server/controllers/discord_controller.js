const { Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js");
const token = process.env.DISCORD_BOT_TOKEN;
const intents = [
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent
];
const client = new Client({ intents });

function getOrderEmbed(order) {
  const embed = new EmbedBuilder()
    .setTitle("New Order :money_with_wings:")
    .setDescription(`# ${order.revenue} ${order.currency} \n **${order.storeId}**`)
    .setFooter({
      text: `id: ${order.id}`
    })
    .setColor(0x96BF48);
  return embed;
}

function getOrderButtonRow(order) {
  const row = new ActionRowBuilder();
  row.addComponents(
    new ButtonBuilder()
      .setLabel("View Order")
      .setURL(order.url)
      .setStyle(ButtonStyle.Link)
  );
  return row;
}

function init() {
  try {
    client.login(token);
  } catch (error) {
    return { error: error.message };
  }
  return {};
}

function sendOrderUpdate(channelId, order) {
  const channel = client.channels.cache.get(channelId);
  if (!channel) return { error: "CHANNEL_NOT_FOUND" };
  try {
    channel.send({
      embeds: [getOrderEmbed(order)],
      components: [getOrderButtonRow(order)]
    });
  } catch (error) {
    return { error: error.message };
  }
  return {};
};

module.exports = { init, sendOrderUpdate };
