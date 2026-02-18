#!/bin/bash

text="$1"

translated=$(curl -s "https://libretranslate.com/translate" \
  -d "q=$text" \
  -d "source=zh" \
  -d "target=en" \
  -d "format=text")

echo "$translated"
