FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz \
    libssl-dev \
    openssh-server

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get install -y nodejs && apt-get install -y npm
#RUN mkdir /var/run/sshd

# user:password to have access to container from pycharm
RUN echo 'root:screencast' | chpasswd
#RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
#RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

RUN mkdir -p /backend
COPY ./backend/requirements.yml /backend/requirements.yml
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/register_guest/bin:$PATH

ENV PYTHONDONTWRITEBYTECODE 1
RUN echo "source activate register_guest" >~/.bashrc

COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./backend /backend

#RUN mkdir /frontend_code
#COPY ./frontend/package.json /frontend_code/
#WORKDIR frontend_code
#RUN npm i
#COPY ./frontend /frontend_code
#RUN npm run build

WORKDIR /backend
