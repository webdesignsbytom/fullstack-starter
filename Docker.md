# Docker

## Verisons

1. Docker
2. Docker Hub - Online storage hub
3. Docker Compose
4. Docker Enigine

## Commands

`-t` tag a docker project
`-d` detach when running

## Create a project

1. Build a web app or server
2. Add a `Dockerfile` to the root
3. Open Docker Hub desktop
4. `docker build -t [hubname]/[projectname] .` build docker file
5. `docker push [hubname]/[projectname]:latest` push to docker hub
6. `docker pull [hubname]/[projectname]` pull to device
7. `docker run [hubname]/[projectname]` - but more likely `docker run -d --name project-instance1 -p 50:50 [hubname]/[projectname]:latest`
8. Remove when done with `rm project-instance1`
