# Azure

https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/pool?view=azure-pipelines

You can create a Pipeline using 3 methods.

1. YAML
2. YAML Task
3. Classic view

Pipelines cannot generate output as files or folders. To address this you publish Pipeline Artifacts

ARTIFACTS -

1. `Publish Pipeline Artifact` package can be searched for in azure.
2. By default artifacts are downloaded at Pipeline Workspace
![image](https://github.com/user-attachments/assets/54915fc3-a544-4eeb-ab81-f658750b1115)

Give the 'targetPath' location as the 'packDestination'
Name the artifact

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
