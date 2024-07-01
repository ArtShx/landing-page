# Landing Page
This is my landing page made with React / Typescript.
You can access it [here](http://arthurmiada.com).


### TODO
- [ ]: Fill out my curriculum:
    - [ ]: Photo;
    - [x]: Projects;
    - [x]: Education;
    - [x]: Skills;
- [x]: Send mail on contact me form;
- [ ]: Pick a host provider and deploy;
    - [x]: Buy domain;
    - [x]: Steps for deploying new version;
    - [ ]: Use SSL
- [ ]: Make sure analytics is working;
- [ ]: Support other languages besides english;

### Deploy

```
docker build -f Dockerfile -t landing-page:latest .
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 211125655451.dkr.ecr.us-east-2.amazonaws.com
docker push 211125655451.dkr.ecr.us-east-2.amazonaws.com/landing-page:{VERSION}

// Create new version on Task Defninition on AWS ECS
// Update Service using new task definition
```
