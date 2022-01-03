FROM nginx
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY dist/photoframe-control /usr/share/nginx/html