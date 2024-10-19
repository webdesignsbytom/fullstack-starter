# Docker

## Verisons

1. Docker
2. Docker Hub - Online storage hub
3. Docker Compose
4. Docker Enigine

## Terminology

1. Image - Similar to a git repository

- Base images are images that have no parent image, usually images with an OS like ubuntu, busybox or debian.

- Child images are images that build on base images and add additional functionality.

Then there are official and user images, which can be both base and child images.

- Official images are images that are officially maintained and supported by the folks at Docker. These are typically one word long. In the list of images above, the python, ubuntu, busybox and hello-world images are official images.

- User images are images created and shared by users like you and me. They build on base images and add additional functionality. Typically, these are formatted as user/image-name.

## Commands

`-t` tag a docker project
`-d` detach when running
`-it` flag specifies an interactive terminal which makes it easier to kill the container with Ctrl+C
`-P` will publish all exposed ports to random ports

`--rm` flag automatically removes the container when it exits
`--name` corresponds to a name we want to give

`docker images` list of images

## Create a project

1. Build a web app or server
2. Add a `Dockerfile` to the root
3. Open Docker Hub desktop
4. `docker build -t [hubname]/[projectname] .` build docker file
5. `docker push [hubname]/[projectname]:latest` push to docker hub
6. `docker pull [hubname]/[projectname]` pull to device
7. `docker run [hubname]/[projectname]` - but more likely `docker run -d --name project-instance1 -p 50:50 [hubname]/[projectname]:latest`
8. Remove when done with `rm project-instance1`

## Remove docker image

`docker stop 3c8f23826c9f` name or id
`docker rm 3c8f23826c9f` name or id
`docker rmi dummyserver:latest` remove image
`docker container prune`
`docker image prune`