#!/bin/bash
cd "$(dirname "$0")"
npm install
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Bitte OPENAI_API_KEY in .env eintragen und das Skript erneut starten."
  open -e .env
  exit 1
fi
npm run mac