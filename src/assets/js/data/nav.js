const list = [
  // {name: 'WebFtp', com: 'web-ftp', arg: {}},
  {name: 'CCTV', com: 'cctv', arg: {}},
  {name: 'Algorithm', com: 'algo', arg: {}},
  {name: '拉易网', com: 'x-frame', arg: {url: 'https://www.drageasy.com/drag.html'}},
  {name: 'GitHub', com: 'x-frame', arg: {url: 'https://github.com/tianxiaohao1/codding.cn'}},
]
const map = {}

list.forEach((item,) => {
  map[item.com] = item
})

export default {
  list, map
}