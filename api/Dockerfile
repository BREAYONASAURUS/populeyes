FROM 		node:5.6.0
MAINTAINER 	Luke Geiken <luke.geiken@gmail.com>

ADD     	/ /api

WORKDIR 	/api
RUN			npm install 

EXPOSE  	3001

ENTRYPOINT 	node server.js