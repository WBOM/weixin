// find/find.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    array: ['推荐','绝地求生','PC游戏','手机游戏','硬件推荐', '综盒频道','Artifact','彩虹六号','主机游戏'],
    currentTab: 0,
    boxList: [{
        little:'12月12日正式服与测试服维护公告：优化服务器',
        time:"2018-12-12 15:00:00",
        category:'绝地求生',
        browse:'13468',
        comment:'558',
        promoImg:'../img/promo-2.jpg'
    },{
        little: '美工过剩？雪地之上这些精致的建筑其实进不去',
        time:"2018-12-12 12:00:00",
        category: '绝地求生',
        browse: '8620',
        comment: '201',
        promoImg:'../img/promo-3.jpg'
    },{
        little: '疯狂周三推荐：双十二到啦，你还有钱给G胖嘛？',
        time:"2018-12-12 11:00:00",
        category: 'PC游戏',
        browse: '117984',
        comment: '246',
        promoImg: '../img/promo-4.jpg'
    },{
        little: '新版本评测：第一季已锁定，全新通行证系统上线',
        time: "2018-12-13 9:00:00",
        category: '绝地求生',
        browse: '9587',
        comment: '507',
        promoImg: '../img/promo-5.jpg'
    },{
        little: '周四折扣精选：你离吃土还差一款今日推荐！',
        time: "2018-12-13 10:55:00",
        category: 'PC游戏',
        browse: '96144',
        comment: '185',
        promoImg: '../img/promo-6.jpg'
    },{
        little: '行尸走肉开发商T社游戏回顾：感谢昔日有你陪伴',
        time: "2018-12-13 15:55:00",
        category: 'PC游戏',
        browse: '27993',
        comment: '31',
        promoImg: '../img/promo-7.jpg'
    }]
  },  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time0 = this.data.time;
    console.log(time0);
    var time1 = new Date("2018-12-13 9:00:00");
    console.log(time1);
    var time2 = new Date().getTime();
    var time3 = time2 - time1;
    var time4 = Math.ceil(time3/1000/60/60);

    if (time4 > 24) {
      var time = Math.floor(time4 / 24);
      this.setData({
        time: time+'天'
      })
    } else {
      var time = time4
      this.setData({
        time: time+'小时'
      })
    }
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
});
