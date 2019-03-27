# Store Checkout PoC

## Project goals

Build base for **scalable front-end architecture** -- easy to work with for developers and QA, fully transparent for stakeholders. **Automate** as many processes as possible and make their results easily available.
Make frontend communicate with backend API only by thin layer of services, making it more resilient to inevitable changes.

### 🤝 Workflow 🤝

Small, easy to estimate tasks in backlog. Code crafted and delivered according to [git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows) -- commit and issue pull requests often for easy collaboration between programmers, designers and QA (no one should be afraid to participate in PRs review process). Because only small chunks of code are merged it's easier and faster to recover from bugs or discover **accessibility and usability** problems.

### ⚙️ Solutions ⚙️

List of proven, backed by big communities solutions, which help to deliver **high-quality** code without too much friction:

- [Travis](https://travis-ci.com/) as CI tool
  - production build of application automatically deployed to web after each successful merge; **fast feedback loop** -- could be easily previewed by stakeholders / designers / QA at any time
  - set of various test suites (unit tests, linter, prettier) run on each pull request -- impossible to merge changes if something goes wrong
  - automatically deployed to cloud provider (such as AWS)
- [Jest](https://jestjs.io/) as automated unit test runner
  - unit tests collocated with components
- e2e testing environment with [Cypress](https://www.cypress.io/)
  - easy to write and maintain ent-to-end tests
  - front-end engineers encourage to write their own tests
  - possibility to enroll visual regression tests
- [Rollbar](https://rollbar.com/) as JavaScript error reporting tool
  - when some unfortunate error appears on production it's automatically reported
- [Codecov](https://codecov.io/) test coverage reporting tool
  - make sure unit tests coverage for app pass declared threshold
  - if certain threshold is not satisfied code can't be merged
- Performance / accessibility insights with [Lighthouse](https://github.com/GoogleChromeLabs/lighthousebot)
  - done on each pull request automatically
- Mocked API with [json-server](https://github.com/typicode/json-server)
  - no need to wait for full backend API implementation
  - just after frontend-backend contract is established front-end engineers could start implementing components
- Application styled with [styled-components](https://www.styled-components.com/)
  - each component has it's own isolated style
  - compose components not styles -- prevents huge amount of duplication in large codebases
- Automatic code formatting with [prettier](https://prettier.io/)
  - no more arguments such as tabs vs spaces, single quotes vs double, etc.
  - more pleasant to work with codebase

Most of listed tools provide good integration with Slack and Jira.

### Taking it further

Because of React's component-based architecture it is easy to reuse them, keep **user interface consistent** and reduce overall duplication. In future it will be possible to introduce fully featured **Design System** -- company-wide guideline of how to build digital products ([design system example](https://www.lightningdesignsystem.com/)).
