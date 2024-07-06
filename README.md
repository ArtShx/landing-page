# Landing Page
This is my landing page made with React / Typescript.
You can access it [here](http://arthurmiada.com).


### TODO
- [ ]: Fill out my curriculum:
    - [x]: Photo;
    - [x]: Projects;
    - [x]: Education;
    - [x]: Skills;
    - [x]: Optimize size of images;
    - [x]: Embbed the videos on html and not use gdrive link directly
- [x]: Send mail on contact me form;
- [x]: Pick a host provider and deploy;
    - [x]: Buy domain;
    - [x]: Steps for deploying new version;
    - [x]: Use SSL
- [x]: Make sure analytics is working;
- [ ]: Support other languages besides english;

### Deploy

```
ssh into ec2 instance
cd landind-page
git pull
npm run build
sudo systemctl restart landing-page
```
