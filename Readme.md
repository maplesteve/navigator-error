Repo to reproduce error in context with [this issue](https://github.com/gr2m/universal-user-agent/issues/23).

This uses the serverless framework but nothing gets deployed by the following commands:

### Happy path:
- clone
- run `npm i`
- run `./node_modules/.bin/sls offline start --useSeparateProcesses --region eu-central-1 --stage dev`
- open `http://localhost:3000/testme` in browser

This shows a blank page and no error in console => ok.


### Problem:
- stop the server by pressing ctrl-c
- remove the comments around `const githubClient...`in handler.ts
- run `./node_modules/.bin/sls offline start --useSeparateProcesses --region eu-central-1 --stage dev`
- open `http://localhost:3000/testme` in browser

Error is shown in the browser and the stack trace is displayed in the console.
