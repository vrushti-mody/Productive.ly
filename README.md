# Productive.ly
![Productive.ly](https://boringrails.com/images/github-actions-ci.png)


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]() 
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/vrushti-mody/Productive.ly/pulls)
[![Issues](https://img.shields.io/github/issues-raw/vrushti-mody/Productive.ly)](https://github.com/vrushti-mody/Productive.ly/issues) 


Productive.ly is a gamified sprint system with a goal to make open source contribution and team collaboration more fun and less tedious.

By integrating a simple points system in the GitHub issues tab, it encourages coders to meet their tasks to earn the maximum points possible from their manager. These points can then be used to offer incentives, which will inevitably boost productivity.


## How is this tool helpful?

- Github gives us the option to milestone issues. Our application will help keep track of issues belonging to a milestone.
- Our application will assign points to issues. The points can be redeemed once a successful Pull Request (PR) is made and merged. Additional Points are also given to reviewers once a Pull Request is merged.
- In order to boost the morale of the employees, the points that they gain for a task can be used to defeat a monster. If 90% of the tasks are finished, then the sprint will be considered successful and the monster will be defeated.


## Key Features

- Keep Track of Sprints
- Assigning points to issues
- Gamifying the Sprint
- Recognising top performers

## Technology Stack
![Languages](https://img.shields.io/github/languages/count/vrushti-mody/Productive.ly)
- Javascript
- React
- Node.js
- MongoDB
- GraphQL
- Git/Github APIs


## Getting Started

### File Structure

| Directory                                                                                         | Content                      |
| --------------------------------------------------------------------------------------------------| ---------------------------- |
| [frontend](https://github.com/vrushti-mody/Productive.ly/tree/master/frontend) | contains frontend components |
| [backend](https://github.com/vrushti-mody/Productive.ly/tree/master/backend)   | contains backend api         |
| [docs](https://github.com/vrushti-mody/Productive.ly/tree/master/docs)         | contains all docs (schemas, api routes, usage) |

### Setup

- Fork and clone the repo

```
$ git clone https://github.com/vrushti-mody/Productive.ly.git
$ cd CodeOfDuty
```

#### Frontend:
- Install dependencies
```
$ cd frontend
$ npm install
```
- Add the .env file
```
REACT_APP_REDIRECT_URI= http://localhost:3000/
REACT_APP_OAUTH_CLIENT_ID= <YOUR CLIENT ID>
REACT_APP_OAUTH_SCOPES=user public_repo admin:repo_hook
```

- Run the server and react app

```
$ npm run dev
```

#### Backend:
- Install dependencies
```
$ cd backend
$ npm install
```

- Add the .env file
```
ATLAS_URI=<YOUR MONGODB URI>
OAUTH_CLIENT_ID=<YOUR GITHUB OAUTH CLIENTID>
OAUTH_CLIENT_SECRET=<YOUR OAUTH SECRET>

```

- Run the server
```
$ npm start
```

## Contribution Guidelines
[![PR's Welcome](https://img.shields.io/github/issues-pr-raw/vrushti-mody/Productive.ly)]()
[![Contributors](https://img.shields.io/github/contributors/vrushti-mody/Productive.ly)]()

If you have suggestions for how CodeOfDuty could be improved, or want to report a bug, open an issue! Contributions of all kinds are welcomed!

For more, check out the [Contributing Guide](./CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2020 MLH Fellowship

Made with 💕 by [Vrushti Mody](https://github.com/vrushti-mody) and [Rohan Poojari](https://github.com/RoRogers7) for the Woman Techies hackathon!

Some change
