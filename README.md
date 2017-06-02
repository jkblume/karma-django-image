This image is aimed to run karma tests on django projects.

You can run it with:
1. `docker build -t karma-docker .`
1. `docker run -it -v --rm PATH_TO_APP:/app/under_test karma-docker`
