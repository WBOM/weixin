// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    library:['最新优惠','优惠促销','当前在线','最新发布','最高评分'], 
    currentTab: 0,
    gameList: [{
      gameName: '绝地求生',
      price: '￥98',
      score:'6.8',
      img: '../img/game-1.jpg'
  },{
      gameName: '侠盗猎车手5',
      price: '￥189',
      score:'9.6',
      img: '../img/game-2.jpg'
  },{
    gameName: '叛逆：沙漠风暴',
    price: '￥98',
    score:'9.2',
    img: '../img/game-3.jpg'
  },{
    gameName: '反恐精英：全球攻势',
    price: '免费',
    score:'9.2',
    img: '../img/game-4.jpg'
  },{
    gameName: '人类一败涂地',
    price: '￥24',
    score:'9.4',
    img: '../img/game-5.jpg'
  },{
    gameName: '刀塔2',
    price: '免费',
    score:'9.8',
    img: '../img/game-6.jpg'
  },{
    gameName: '拳皇14',
    price: '￥249',
    score:'8.4',
    img: '../img/game-7.jpg'
  },{
    gameName: 'Artifact',
    price: '￥138',
    score:'7.4',
    img: '../img/game-8.jpg'
  }],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  }
})