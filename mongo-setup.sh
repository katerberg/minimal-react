#!/bin/sh

echo "making sure your home brew is up to date"
brew update

echo "#################################"
echo "installing mongoDB"

brew install mongodb

echo "#################################"
echo "making the /data/db directory for local storage"

mkdir -p /data/db
sudo chown -R `id -un` /data/db


echo "#################################"
echo "checking if mongo installed correctly"
echo "Stdout should be `mongodb stopped`"

brew services list | grep mongodb

echo "#################################"
echo "use `brew services start mongodb`"
echo "this starts the mongod process"
echo "use `brew services stop mongodb`"
echo " this stops the mongod process"

echo "once mongo process is running....$ `mongo` to access mongo shell"
