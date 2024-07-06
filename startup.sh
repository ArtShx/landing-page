#!/bin/bash
cd /home/ec2-user/landing-page
git pull
npm run build
systemctl restart landingpage

