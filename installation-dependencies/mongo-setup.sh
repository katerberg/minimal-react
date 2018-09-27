#!/bin/sh
# functions

is_mongo_installed () {
  command -v mongod > /dev/null
  if [ $? -eq 0 ]; then
    return 0
  fi
  return 1
}

is_sudo () {
  if [ "$(id -u)" -ne 0 ]; then
    return 1
  fi
  return 0
}  

is_brew_installed () {
  command -v brew > /dev/null
  if [ $? -eq 0 ]; then
    return 0
  fi
  return 1
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

is_brew_installed
if [ $? -ne 0 ]
  echo "you need to install brew before you can continue!"
  exit 1
fi

is_sudo
if [ $? -ne 0 ]; then
  echo "$0 requires escalated priviliges to run"
  exit 1
fi


install_mongo
is_mongo_installed
if [ $? -ne 0 ]; then
  echo "failed to install mongo"
  exit 1
fi

echo "mongo was installed"
echo "use 'brew services start mongodb' to begin mongod process"
echo "use 'brew services stop mongodb' to end mongod process"
echo "use 'mongo' to access the mongo shell"
