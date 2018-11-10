// pages/tools/tools.js
Page({
  data: {
    tools: []
  },
  clickTool: function(e) {
    console.log("xxxxxx" + e)
  },
  onLoad: function(options) {
    this.setData({
      tools: [{
          "name": "汇率",
          "image": "/res/img/exchange_rate.png"
        },
        {
          "name": "二维码生成",
          "image": "/res/img/create_qr_code.png"
        },
        {
          "name": "历史上的今天",
          "image": "/res/img/history_today.png"
        },
        {
          "name": "简/繁/火星字体转换",
          "image": "/res/img/text_conversion.png"
        }
      ]
    })
  }
})