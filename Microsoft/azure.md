# Azure

## Glossary

https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/pool?view=azure-pipelines

## Why DevOps

To continuiously test the code and test the code in environments.
To prevent code working in a development env but not a Operation env.

## About DevOps

You can create a Pipeline using 3 methods.

1. YAML
2. YAML Task
3. Classic view

Pipelines cannot generate output as files or folders. To address this you publish Pipeline Artifacts

ARTIFACTS - the output of a CI/DC process, any type of file.
Reports or results can be output.

1. `Publish Pipeline Artifact` package can be searched for in azure.
2. By default artifacts are downloaded at Pipeline Workspace

![image](https://github.com/user-attachments/assets/54915fc3-a544-4eeb-ab81-f658750b1115)

Give the 'targetPath' location as the 'packDestination'
Name the artifact

## Tools in DevOps

1. Git
2. Maven
3. Selenium
4. Jenkins
5. Docker
6. Ansible
7. Nagios


## Workflows

YAML Workflow

```
trigger:
  - main # pull on main

pool:
  vmImage: ubuntu-latest

- stage: Name
  jobs:
  - job: PublishXyz
    steps:
    - download: current
      artifact: App

    - task: PowerShell@2
      inputs:
        filePath: '$(Pipeline.Workspace)\App
```

![image](https://github.com/user-attachments/assets/af85cb09-20b6-4f88-9973-1e88993a96b6)
![image](https://github.com/user-attachments/assets/daeb704b-aa03-4374-ba81-20daa53a4dda)

## Workflow Examples

### Build

```
- stage: 'DeployDev'
  displayName: 'Deploy to dev environment'
  dependsOn: Build
  jobs:
  - deployment: Deploy
    pool:
      vmImage: 'ubuntu-20.04'
    environment: dev
    variables:
    - group: 'Release Pipeline'
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            displayName: 'Azure App Service Deploy: website'
            inputs:
              azureSubscription: 'Resource Manager - Tailspin - Space Game'
              appName: '$(WebAppName)'
              package: '$(Pipeline.Workspace)/drop/$(buildConfiguration)/*.zip'
```
### Publish 

```
trigger:
- '*'

variables:
  buildConfiguration: 'Release'

stages:
- stage: 'Build'
  displayName: 'Build the web application'
  jobs: 
  - job: 'Build'
    displayName: 'Build job'
    pool:
      vmImage: 'ubuntu-20.04'
      demands:
      - npm

    variables:
      wwwrootDir: 'Tailspin.SpaceGame.Web/wwwroot'
      dotnetSdkVersion: '6.x'

    steps:
    - task: UseDotNet@2
      displayName: 'Use .NET SDK $(dotnetSdkVersion)'
      inputs:
        version: '$(dotnetSdkVersion)'

    - task: Npm@1
      displayName: 'Run npm install'
      inputs:
        verbose: false

    - script: './node_modules/.bin/node-sass $(wwwrootDir) --output $(wwwrootDir)'
      displayName: 'Compile Sass assets'

    - task: gulp@1
      displayName: 'Run gulp tasks'

    - script: 'echo "$(Build.DefinitionName), $(Build.BuildId), $(Build.BuildNumber)" > buildinfo.txt'
      displayName: 'Write build info'
      workingDirectory: $(wwwrootDir)

    - task: DotNetCoreCLI@2
      displayName: 'Restore project dependencies'
      inputs:
        command: 'restore'
        projects: '**/*.csproj'

    - task: DotNetCoreCLI@2
      displayName: 'Build the project - $(buildConfiguration)'
      inputs:
        command: 'build'
        arguments: '--no-restore --configuration $(buildConfiguration)'
        projects: '**/*.csproj'

    - task: DotNetCoreCLI@2
      displayName: 'Publish the project - $(buildConfiguration)'
      inputs:
        command: 'publish'
        projects: '**/*.csproj'
        publishWebProjects: false
        arguments: '--no-build --configuration $(buildConfiguration) --output $(Build.ArtifactStagingDirectory)/$(buildConfiguration)'
        zipAfterPublish: true

    - publish: '$(Build.ArtifactStagingDirectory)'
      artifact: drop

- stage: 'Deploy'
  displayName: 'Deploy the web application'
  dependsOn: Build
  jobs:
  - deployment: Deploy
    pool:
      vmImage: 'ubuntu-20.04'
    environment: dev
    variables:
    - group: Release
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop
          - task: AzureWebApp@1
            displayName: 'Azure App Service Deploy: website'
            inputs:
              azureSubscription: 'Resource Manager - Tailspin - Space Game'
              appName: '$(WebAppName)'
              package: '$(Pipeline.Workspace)/drop/$(buildConfiguration)/*.zip'
```
