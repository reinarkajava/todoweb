#!/bin/bash

read -p "Faili nimi:" filename

read -p "Sonum:" message

echo $filename
echo $message

git add $filename

git commit -m "$message"

git push -u origin main
