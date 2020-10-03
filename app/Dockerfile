FROM php:7.4-apache

COPY php.ini /usr/local/etc/php/
COPY 000-default.conf /etc/apache2/sites-enabled/

RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim \
libpng-dev \
libpq-dev \
&& docker-php-ext-install pdo_mysql

RUN apt-get install -y locales \
&& locale-gen ja_JP.UTF-8 \
&& localedef -f UTF-8 -i ja_JP ja_JP \
&& echo "export LANG=ja_JP.UTF-8" >> ~/.bashrc \
&& echo "export LANGUAGE=ja_JP:jp" >> ~/.bashrc \
&& echo "export LC_ALL=ja_JP.UTF-8" >> ~/.bashrc

RUN apt-get install -y \
    curl \
    gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN npm install npm@latest -g

RUN echo "LoadModule rewrite_module /usr/lib/apache2/modules/mod_rewrite.so" > /etc/apache2/mods-available/rewrite.load \
&& a2enmod rewrite \
&& service apache2 restart