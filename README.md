<p align="center">
  <a href="https://github.com/Technoweebs/zebi/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Technoweebs/zebi.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/Technoweebs/zebi/graphs/commit-activity">
    <img src="https://img.shields.io/github/last-commit/Technoweebs/zebi?style=for-the-badge">
  </a>
  <a href="https://github.com/Technoweebs/zebi/stargazers">
    <img src="https://img.shields.io/github/stars/Technoweebs/zebi.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/Technoweebs/zebi/issues">
    <img src="https://img.shields.io/github/issues/Technoweebs/zebi.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/Technoweebs/zebi/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/Technoweebs/zebi.svg?style=for-the-badge">
  </a>
  <br>
  <a href="https://github.com/Technoweebs/zebi">
    <img src=".github/zebi.gif" alt="Logo" width="300" height="150">
  </a>

  <p align="center">
	Zebi is my personal template for future Discord Bots.
  </p>
</p>


<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
	  	<li><a href="#whats-that">What's that ?</a></li>
		<li><a href="#why">Why ?</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
    	<li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li><a href="#todo-list">ToDo List</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project
### What's that ?
Zebi is a Discord bot template designed to create a simple but effective architecture for your bot.  
It's available to everyone and was designed basically so that I can create Discord bots by reusing a clean, solid base so that I can focus on the essential part of the bot.

### Why ?
Because I needed to take my mind off things and also because I needed it for my team of developers (the [@Oyle](https://twitter.com/_OyleM) team), so that they too could use it.

### Built With
* [NodeJS](https://nodejs.org/)
* [Yarn (the best Node.JS package manager 😇)](https://yarnpkg.com/)
* [A lot of packages 😏](https://github.com/Technoweebs/zebi/blob/main/package.json)

## Getting Started
### Prerequisites
Have NodeJS and Yarn (or NPM) installed.  
I coded this template with NodeJS v14, so I don't know if it works with older versions (normally it shouldn't be a problem).

### Installation
1. Download the project with [Git](https://git-scm.com/)
   ```bash
   git clone https://github.com/Technoweebs/zebi.git
   ```
2. Then, install the packages with...
   * ... NPM:
     ```bash
	 npm i
     ```
   * ... Yarn:
     ```bash
	 yarn install
     ```
3. All done ! Go to the ["Usage"](#usage) section to be able to launch the bot.

### Usage
When you have finished installing the bot, you must now configure it for the first launch.  
The configuration file looks like this :
```json
{
	"bot": {
		"token": "XXX",
		"activity": {
			"type": "PLAYING",
			"content": "Super Mario Odyssey"
		},
		"prefix": "%"
	},
	"modules": {
	}
}
```
Here's the documentation of the config :
| Name         | Function                                                                                                                |
|--------------|-------------------------------------------------------------------------------------------------------------------------|
| `bot{}`      | All the configuration related to the bot itself.                                                                        |
| `token:`     | The token of your bot. Not to be shared !                                                                               |
| `activity{}` | All the configuration related to the activity of the bot.                                                               |
| `type:`      | The type of activity of the bot. Can be `PLAYING`, `WATCHING`, `LISTENING`, `STREAMING` or `NONE` (not case sensitive). |
| `content:`   | The text that will be displayed as activity.                                                                            |
| `prefix:`    | The prefix of the bot.                                                                                                  |
| `modules{}`  | All the configuration related to the modules of the bot. See the required configuration of the installed modules.       |

## ToDo List
  * Create more example commands 💻
  * Add activity manager 🐟
  * Finish the README 📄

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the GPL-3.0 License. See `LICENSE.md` for more information.

## Contact
TomaruDev - [@MrTomaru](https://twitter.com/MrTomaru) - contact@tomaru.dev  
Project Link: [https://github.com/Technoweebs/zebi](https://github.com/Technoweebs/zebi)

## Acknowledgements
Thanks to the Discord team for creating it and allowing people to re-create social bonds with their loved ones,  
to the DiscordJS team for creating a more than complete framework,  
to @iLigueYT for the name of the project,  
and thanks to my friends for the moral support.  
Finally, thanks to you, who support and encourage me in these small projects.  