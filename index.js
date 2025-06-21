const { Client, Events, GatewayIntentBits } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('DISCORD_TOKEN environment variable is not set.');
  process.exit(1);
}
const targetUserId = '195714819549167617';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, c => {
  console.log(`Logged in as ${c.user.tag}!`);
});

client.on(Events.MessageCreate, message => {
  if (message.author.id !== targetUserId) return;
  message.react('⬇').catch(console.error);
});

client.login(token);
