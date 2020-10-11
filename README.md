# Analyzer

Analyzer is a discord.js bot which retrieves information, links, and content for series created by Leiji Matsumoto.

Can be repurposed for use with any series or content creator.

## Installation
1. Make sure [Node](https://nodejs.org/en/) is installed
2. Clone this repository
3. Install npm (globally or locally to the containing folder)
4. Rename configDefault.json to config.json and add your bot's token where specified.
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
!content-warning SERIES```  
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