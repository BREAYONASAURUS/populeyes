FROM 		nginx
MAINTAINER 	Luke Geiken <luke.geiken@gmail.com>

RUN 		apt-get update
RUN 		apt-get -y install supervisor nodejs-legacy nodejs npm build-essential git 
RUN			npm install -g bower
ADD 		/app /app
ADD 		/app/supervisord.conf /etc/app/conf.d/supervisord.conf

WORKDIR 	/app
		

EXPOSE 		9001

ENTRYPOINT  nginx -g "daemon off;"