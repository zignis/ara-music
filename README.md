# AraMusic - Customizable Music Bot
Note: Source code is only for educational purposes, DO NOT host your own bot or use this in production.<br/>
A lag-free, feature rich music bot that can search and play tracks from YouTube, or URLs. Does not require `youtube api key`. 
## Usage
### Adding a new track<br />
![alt text](https://media.discordapp.net/attachments/863138501515018240/863138542464925696/imageonline-co-roundcorner_3.png)<br /><br />
### Playing tracks<br />
![alt text](https://media.discordapp.net/attachments/863138501515018240/863138542737162240/imageonline-co-roundcorner_2.png)<br /><br />
### Queue<br />
![alt text](https://media.discordapp.net/attachments/863138501515018240/863138542959067147/imageonline-co-roundcorner_1.png)<br /><br />
### Real-time Filters<br />
![alt text](https://media.discordapp.net/attachments/863138501515018240/863138543160262656/imageonline-co-roundcorner.png)


## Setup
• Download and unzip.<br />• Rename the `example.env.txt` file to `.env` and fill the required values inside it.<br />• [Optional] You can change the emojis and bot's activity in `config/bot.js`. You can add custom emojis as well (even the animated ones), just replace the default names of emojis in `config/bot.js` to your preferred ones. (In order for the bot to use custom emojis, the bot must be in the emoji's guild.)<br />• Open the main project folder.<br />• Run `npm install` to automatically install all the necessary modules.<br />• Make sure you have `ffmpeg` installed on your system/host, if not, get it from https://ffmpeg.org/ (Bot won't be able to play tracks unless you install `ffmpeg`).<br />• Start the bot using `node index.js`.

## Licence
You are allowed to:
- Download and modify the code
- Use the framework in your own client (bot) only for educational purposes.

What you are NOT allowed to do:
- Republish the source code somewhere else.
- Use the framework for commercial purpose.
