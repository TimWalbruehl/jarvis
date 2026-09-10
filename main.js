import { app, BrowserWindow, shell, Menu } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let server;

function createWindow() {
  const win = new BrowserWindow({
    width: 1480,
    height: 940,
    minWidth: 1100,
    minHeight: 720,
    title: "JARVIS NEXUS",
    backgroundColor: "#05080d",
    webPreferences: {
      contextIsolation: true,
      sandbox: true
    }
  });

  win.loadURL("http://127.0.0.1:3000");
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: "JARVIS", submenu: [
      { label: "Reload", role: "reload" },
      { label: "Toggle Full Screen", role: "togglefullscreen" },
      { type: "separator" },
      { label: "Quit", role: "quit" }
    ]},
    { label: "View", submenu: [
      { label: "Developer Tools", role: "toggleDevTools" }
    ]},
    { label: "Links", submenu: [
      { label: "Open localhost", click: () => shell.openExternal("http://localhost:3000") }
    ]}
  ]));
}

app.whenReady().then(() => {
  server = spawn(process.execPath, [path.join(__dirname, "..", "server.js")], {
    cwd: path.join(__dirname, ".."),
    env: process.env,
    stdio: "inherit"
  });
  setTimeout(createWindow, 900);
});

app.on("window-all-closed", () => {
  if (server) server.kill();
  if (process.platform !== "darwin") app.quit();
});
app.on("before-quit", () => { if (server) server.kill(); });