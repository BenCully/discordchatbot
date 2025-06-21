# discordchatbot
This is a simple Discord bot that reacts to messages from a specific user.

## Setup

This project requires **Node.js 18** or newer.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the build step to verify the code compiles:
   ```bash
   npm run build
   ```
3. Export your bot token and start the bot:
   ```bash
   export DISCORD_TOKEN=your_token_here
   node index.js
   ```

The bot will react with a down-arrow emoji to every message sent by the
configured user.
