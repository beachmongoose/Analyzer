<img width="191" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="REPORTING FOR DUTY." src="https://imgur.com/6WYVm3G.png">  

# Analyzer
![](https://img.shields.io/github/package-json/v/beachmongoose/analyzer) [![](https://img.shields.io/badge/discord.js-v12.0.0-blue.svg)](https://github.com/discordjs)<br/><br/><br/>
A JavaScript Discord bot which retrieves information, links, and content for series created by Leiji Matsumoto.

Can be repurposed for use with any series or content creator.

## Installation
1. Make sure Node is installed either from the [website](https://nodejs.org/en/) or via the terminal with [Homebrew](https://brew.sh/).
2. Clone this repository
3. Install discord.js with Node
4. Rename configDefault.json to config.json and add your bot's token where specified.
5. Make sure gitignore covers the config.json file
5. To reskin for a different purpose, just replace the character names, series info (including aliases), and image links.

## Commands
> Accessed by using a specified prefix (! by default)

```!all ```  
Posts a list of all series contained in the bot's database.

```!calculate ARGUMENT```  
Calculates the probability of a given argument (1-100%).

```!character-check is CHARACTER in SERIES```  
Confirms whether or not a recycled Leiji character appears in a series.

```!characters in SERIES```  
Provides list of characters that appear in specified series (limited to recurring characters)

```!content-warning SERIES```  
Provides content warnings for specified series

```!file CHARACTER```  
Provides a random photo of requested character

```!help```  
Posts the help page with list of commands/uses

```!op SERIES```  
Posts a YouTube link to the opening of the specified series.

## Responses
> Accessed by mentioning the bot and including certain words/phrases.

```@Analyzer about```  
Analyzer will tell you about himself.

```@Analyzer calculate```  
Same as !calculate command.

```@Analyzer cursed image alert```  
Posts a "delete this" image. (Can also be called by any messages containing "thanks I hate it" or "delete this")

Analyzer will also respond to certain greetings, thank yous, and compliments.

Specific easter egg phrases in unformatted messages will also prompt responses.

## Acknowledgements
Thank you to the Sea of Stars discord server for bug testing.