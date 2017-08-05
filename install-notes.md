sudo su
# start: Vertico Cli installation 
sudo apt-get update
# Install build-essentials:

sudo apt-get install build-essential libssl-dev
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
source ~/.profile
# nvm ls-remote
nvm install 8.2.1

git clone https://github.com/iitc/vertico-cli.git
cd vertico-cli
npm install -g

vertico

# end: Vertico Cli installation


sudo apt install -y docker.io



  1  dockerd
    2  ls /var/run/
    3  udo systemctl is-active docker
    4  sudo systemctl is-active docker
    5  docker
    6  docker --version
    7  docker version
    8  clear
    9  docker pull ajaycs14/hello-world
   10  docker images
   11  docker run --name static-site -e AUTHOR="Aj" -d -p 80:80 ajaycs14/hello-world
   12  curl localhost:80
   13  docker run --name verticodb -p 5432:5432 -e POSTGRES_PASSWORD=pw1234 -d postgres
   14  docker ps
   15  clear
   16  docker cp
   17  docker cp --help
   18  filezilla
   19  ls
   20  cd vf/
   21  ls
   22  docker build -t ajaycs14/vf .
   23  docker build -t tomcat-vf:v1 .
   24  docker images
   25  docker run -d tomcat-vf -p 6765:8080
   26  docker run -d tomcat-vf:v1 -p 6765:8080
   27  docker run tomcat-vf:v1 -p 6765:8080  -d
   28  docker run  -p 6765:8080  -d tomcat-vf:v1
   29  docker ps
   30  docker logs aedeee815a7a
   31  docker ps
   32  curl localhost:6765
   33  docker ps
   34  cd ..
   35  ls
   36  cd vf
   37  cd ..
   38  cd cli/
   39  ls
   40  tar -xvf vertico-cli-linux64-binaries.zip
   41  unzip vertico-cli-linux64-binaries.zip
   42  sudo apt install unzip
   43  unzip vertico-cli-linux64-binaries.zip
   44  l
   45  ls
   46  cd vertico-cli-linux64-binaries
   47  ls
   48  ./run-vertico.sh
   49  ./build-vertico.sh
   50  ls
   51  ls bin/
   52  bin/node
   53  bin/node --version
   54  bin/npm --version
   55  ./bin/npm --version
   56  cd bin/
   57  ls
   58  node --version
   59  ./node --version
   60  ./npm --version
   61  ls
   62  cd ..
   63  ./bin/node lib/main.js
   64  node
   65  npm
   66  sudo apt-get update
   67  sudo apt-get install build-essential libssl-dev
   68  curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
   69  source ~/.profile
   70  nvm ls-remote
   71  nvm install 8.2.1
   72  node --version
   73  npm --version
   74  ls
   75  npm install
   76  ./bin/node --version
   77  ./bin/node lib/main.js
   78  vertico
   79  node lib/main.js
   80  history