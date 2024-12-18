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

A ARTIFACT is a

A WebHook Event is a HTTP request sent from your application to another application. 
- Repository webhooks. A series of webhooks in your repo, with a max of 20 hooks individual events
- Organization webhooks. Subscribes to events that happenn within an organization.
- Marketplace webhooks
- Sponsored webhooks
- App webhooks

## Code 

Schedual events: schedule
```
on: schedual:
    - cron 0 5 5 5 5 
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
