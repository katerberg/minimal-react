#!/bin/sh
# functions

is_mongo_installed () {
  command -v mongod > /dev/null
  if [ $? -eq 0 ]; then
    return 0
  fi
  return 1
}

is_privileged () {
if [ "$(id -u)" -ne 0 ]; then
  echo "Sorry, you need to run $0 as root"
  exit 1
fi
}  

install_mongo () {
  brew update
  brew install mongodb
  mkdir -p /data/db
  chown -R `id -un` /data/db 
}

# running code

is_mongo_installed
if [ $? -eq 0 ]; then
  echo "mongo is already installed"
  exit 0
fi

is_privileged
if [ $? -ne 0 ]; then
  echo "please run $0 as sudo"
  exit 1
fi


install_mongo
is_mongo_installed
if [ $? -ne 0 ]; then
  echo "failed to install mongo"
  exit 1
fi
# i am confused on where I should be putting these echos. I only want them to print if mongo was successfully installed
echo "mongo was installed"
echo "use brew services start mongodb to begin mongod process"
echo "use brew services stop mongodb to end mongod process"
echo "use mongo to access the mongo shell"
