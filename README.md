# JARVIS NEXUS 3.0

Eine deutlich umfangreichere JARVIS-Umgebung mit:

- futuristischem HUD
- echter OpenAI Responses API
- optionaler Websuche für aktuelle Fragen
- lokaler Memory
- Tasks / Erinnerungen
- Sprach-Eingabe
- Sprach-Ausgabe
- installierbarer iPhone-PWA
- macOS-Electron-App
- responsive Desktop-/Mobile-Oberfläche
- serverseitigem API-Key

## 1. Voraussetzungen

- macOS
- Node.js 20+
- OpenAI API Key

## 2. Installation

```bash
cd JARVIS_NEXUS
npm install
cp .env.example .env
```

Dann `.env` öffnen und `OPENAI_API_KEY` eintragen.

## 3. Web-/iPhone-Version

```bash
npm start
```

Auf dem Mac:
`http://localhost:3000`

Für das iPhone muss der Server über eine erreichbare URL laufen (z. B. Deployment auf einem Node-fähigen Hosting). Danach Safari öffnen → Teilen → Zum Home-Bildschirm.

## 4. macOS-App

```bash
npm run mac
```

Die Electron-App startet den lokalen JARVIS-Server automatisch und öffnet das HUD als eigene Mac-App.

## 5. Was noch ausgebaut werden kann

- echte Realtime Speech-to-Speech-Verbindung
- Wake Word
- Kalender-/Mail-Anbindung
- Spotify-Steuerung
- Wetter-API
- F1-/Fußball-Daten
- iCloud/Google Calendar
- persistente Datenbank
- Benutzer-Login
- echte native iOS-App
- Computer-Control über freigegebene Aktionen

Wichtig: Der API-Key bleibt ausschließlich auf dem Server und gehört nicht in das Frontend.