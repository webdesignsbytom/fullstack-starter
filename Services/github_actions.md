# Github Actions

A CI CD Pipeline

## Terminology

A WORKFLOW is a YAML file with a collection.
A workflow is a coilection of

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

A ARTIFACT is a

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
