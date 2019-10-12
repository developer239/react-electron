import { app } from 'electron'
import { generateWindowObject, createWindow } from '../helpers/windowHelper'

const mainWindowReference = generateWindowObject()

app.on('ready', () => {
  createWindow(mainWindowReference)(
    'main',
    {
      x: 0,
      y: 0,
      height: 600,
      width: 600,
    },
    {
      port: 2005,
      fileName: 'main-window.html',
    }
  )
})

app.on('activate', () => {
  if (!mainWindowReference.isOpen) {
    createWindow(mainWindowReference)
  }
})