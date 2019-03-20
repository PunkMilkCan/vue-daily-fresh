import store from '@/store'
/*
  下面两个函数将用于生成一个随机的uuid
  */
function S4 () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid () {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

export function setLocalStorage (key, value) {
  if (window.localStorage) window.localStorage.setItem(key, value)
}

export function getLocalStorage (key) {
  if (window.localStorage) return window.localStorage.getItem(key)
}

export function setUuid (key) {
  let uuid = getLocalStorage('uuid') || guid()
  store.commit('uuid', uuid)
  if (!getLocalStorage('uuid')) {
    setLocalStorage('uuid', uuid)
  }
}

export function loadScript (url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = function () {
      resolve()
    }
    script.onerror = function (err) {
      reject(err)
    }
    document.body.appendChild(script)
  })
}
