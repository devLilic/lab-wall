import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...values) => listener(event, ...values))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...values] = args
    return ipcRenderer.off(channel, ...values)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...values] = args
    return ipcRenderer.send(channel, ...values)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...values] = args
    return ipcRenderer.invoke(channel, ...values)
  },
})
