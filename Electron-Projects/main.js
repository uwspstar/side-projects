const { app, BrowserWindow, Menu } = require('electron')

process.env.NODE_ENV = 'dev'
const isDev = process.env.NODE_ENV === 'dev' ? true : false
const isMac = process.platform === 'darwin' ? true : false

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "image shrike",
        width: 800,
        height: 600,
        //icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: isDev
    })

    mainWindow.loadFile('index.html')
    // mainWindow.loadURL('http://google.com')
    // console.log('${__dirname}', `${ __dirname }`)
    // mainWindow.loadURL(`file//${__dirname}/app/index.html`) //NOT working
}

const menu = [
    ...(isMac ? [{ role: 'appMenu' }] : []),
    {
        label: "File",
        submenu: [{
            label: "Quit",
            click: () => app.quit()
        }]
    }]
// app.whenReady().then(createWindow)

app.on('ready', () => {
    createWindow()

    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    mainWindow.on('closed', () => mainWindow === null)
})

/*
if (isMac) {
    menu.unshift({ role: 'appMenu' })
}
*/


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (!isMac !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})