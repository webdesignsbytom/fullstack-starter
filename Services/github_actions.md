# Github Actions

A CI CD Pipeline

## Terminology

A WORKFLOW is a YAML file with a collection.
A workflow is a YAML file that configures the tests and what happens when an event triggers.

- EVENTS
- JOBS
- RUNNERS
- STEPS
- ACTIONS

Workflows: Autoomated processes defined in your repo that coordinate jobs, triggered by events or scheduals
Actions: Reusable tasks that perform jobs within a workflow
Jobs: Groups of steps that execute on the same runner, typically runnning in parallel
Steps: Individual tasks within a job that run commands or actions sequentailly.
Runs: Instances of workflow execution triggered by events, representing the complete run-though of a workflow
Runners: Servers that host the environment where the jobs are executed
Marketplace: A platform to find and share reusable actions, enhancing workflow capabilities with community developed tools.
Caller: A workflow that uses another workflow if reffered to as a caller.
Path: A

A ARTIFACT is a

A WebHook Event is a HTTP request sent from your application to another application. 
- Repository webhooks. A series of webhooks in your repo, with a max of 20 hooks individual events
- Organization webhooks. Subscribes to events that happenn within an organization.
- Marketplace webhooks
- Sponsored webhooks
- App webhooks

Strategy:
Matrix: 
on: trigger workflow || on: ['thing, 'thing2']


## Code 

Schedual events: schedule
```
on: schedual:
    - cron 0 5 5 5 5 
```

```
strategy:
  matrix:
    node-version: ['18.x', '20.x']
```

```
on:
  pull_request:
    # Sequence of patterns matched against refs/heads
    branches:
      - main
      - 'mona/octocat'
      - 'releases/**'
```

```
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches-ignore:
      - 'mona/octocat'
      - 'releases/**-alpha'
    # Sequence of patterns matched against refs/tags
    tags-ignore:
      - v2
      - v1.*
```

```
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

## How To Use

`on: push` - Event

```
jobs:                 -- Jobs
    steps:            -- Steps
        - name:       -- Actions
          uses:
```

The event runs the jobs which run the rest

## YAML Lines

`on: push` - Trigger the workflow to run the jobs on push
`runs-on: ubuntu-latest` set the machine to run on

## CI/CD Pipeline

0. Precommit checks

1. 'SOURCE STAGE' - Getting your code from a repo like github
Define branch protection rules. A review before merging to main branch.
Linting - Checking code for syntax errors. Have a github action to check the linting

2. 'BUILD STAGE' - Creating an Artifact you can test and release
Compiling the code and building container images of application
Build docker image first then compile code if required.
The output is a container image we can run tests on.

3. 'CONTAINER IMAGE' The built version of your application
Run unit test
Check for code coverage (80-90%)

4. 'TESTING STAGE' where the real heavy testing starts to fully test the application
Intergration test - test the functionality - can a user post a message/upload photos/sign up

5. 'RELEASE STAGE' release the application so servers can use it
Ship the image to the registery, you can run the application for QA testing
Staging and production evnironments get the iamge

6. 'OUTPUT' - This will normally be an image
You need the continuous deployment aspect for this to be deployed from the registry.
Create another repo called 'Config Repo' and can have docker compose files or kubernetes manifest files

![image](https://github.com/user-attachments/assets/48929bab-272b-4aff-9662-55032593d6c4)
![image](https://github.com/user-attachments/assets/1a528b09-8286-4753-9839-afec56abab5e)
![image](https://github.com/user-attachments/assets/e2d86e14-bfa5-44f2-a16e-0cc3d49ff288)


7. 'STAGING AND PRODUCTION'
Staging is the prerelease of the main file
Push to production env
Manually or auto trigger the update to production



