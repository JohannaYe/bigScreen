FROM nginx
MAINTAINER jeecgos@163.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html \
    && mkdir -p /etc/nginx/templates
COPY config-file/default.conf.template /etc/nginx/templates
ADD dist/ /var/www/html/

EXPOSE 80
EXPOSE 443