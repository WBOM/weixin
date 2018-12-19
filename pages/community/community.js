// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postClass:['全部','视频','精华'],
    currentTab: 0,
    postList:[{
      head:'../img/head-1.jpg',
      username:'Uboy',
      title:'《伊苏9》画面公开 明年登陆PS4',
      content: '今日Falcom在股东大会上正式公布了伊苏系列新作《伊苏9：Monstrum Nox》，将于2019年登陆PS4。《伊苏9》将以监狱都市为背景，讲述拥有异能的“怪人”们围绕监狱中隐藏的谜展开的冒险。其中将会有怪人的特殊能力“异能动作”以及“公会运营”等新要素。',
      grade:'13',
      img:['../img/post-img-1.jpg'],
      category:'主机游戏',
      time:''
    },{
        head: '../img/head-2.jpg',
        username: 'Chase❤天天都是甜甜的',
        title: '雪地地图正式开放：官方发布维寒迪专属海报',
        content: '冬天统治了一切，谁敢直面风雪？《绝地求生》维寒迪正式上线！本文来源：微博  作者：PUBG_STEAM如有侵权请联系删除',
        grade: '15',
        img: ['../img/post-img-2.jpg'],
        category: '绝地求生',
        time: ''
    },{
        head: '../img/head-3.jpg',
        username: 'Thronos',
        title: '呃 大家玩游戏有没有哪些场景感到压抑或者暴躁',
        content: '今天玩了一下深海迷航，然后记起来自己有深海恐惧症。。。。玩了两分钟感觉整个人有点奔溃，出了一身冷汗😰',
        grade: '',
        img: [],
        category: '综盒子频道',
        time: ''
    },{
        head: '../img/head-4.jpg',
        username: '小島呀',
        title: '通行证我最快不接受反驳',
        content: '',
        grade: '7',
        img: ['../img/post-img-3.jpg', '../img/post-img-4.jpg'],
        category: '绝地求生',
        time: ''
    },{
        head: '../img/head-5.jpg',
        username: 'kouryβ',
        title: '《告别回忆 无垢少女For Dearest》发售日期确定',
        content: '由gamestalk了解到，5pb宣布《告别回忆 无垢少女 for Dearest》将于2019年3月28日发售于PS4/PSV/NS/PC，多平台登录。普通版价格是7 , 800日元（477rmb），限定版为9 , 800日元（599rmb）。还有超限定版但目前还没有价格公示以及预售消息。请输入图片描述目前本作的详细内容不明，但大可能是8月被宣传的的《告别回忆 无垢少女》Fan Disk版（粉丝向）。所以价格也是相对较高，在Fan Disk中，描写了本篇中选择的女主角的爱情故事。本文由小黑盒作者：kouryβ 原创 转载请注明作者及出处',
        grade: '15',
        img: ['../img/post-img-5.jpg', '../img/post-img-6.jpg'],
        category: '主机游戏',
        time: ''
    }]
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