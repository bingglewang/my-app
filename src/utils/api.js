//let serverPath = 'https://www.qygongxin.com/evaluate/'
let serverPath = 'https://s.360gujia.com/evaluate/'
//let serverPath = 'http://127.0.0.1:8000/evaluate/'
export function post (url,body) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {
        'content-type':'application/x-www-form-urlencoded'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}

export function post1 (url,body) {
  return new Promise((resolve,reject) => {
    wx.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {
        'content-type':'application/json'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
