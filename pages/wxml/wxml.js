// pages/wxml/wxml.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
markers:[
  {
    id:0,
    longitude:117.0311013,
    latitude:36.662447,
    iconPath:'/assets/icons/pin.png',
    width:20,
    height:40,
    callout:{
     content:'黑虎泉',
     fontSize:22,
     color:'#000',
     padding:8,
     bgColor:'#ffffff',
     borderRadius:4,
     boxShadow:'4px 8px 16px 0 rgba(0,0,0,0.18)'

    }
  }
]


},

play(event){
  console.log(event)
},
pause(event) {
  console.log(event)
},
ended(event) {
  console.log(event)
},

formSubmit(event){
console.log(event.detail.value)
},

inputHandler(event) {
  this.setSata({
    pick:event.detail.value
  })
  console.log(event.detail.value)
},

setScrollView(event){
  this.setData({
    currentView:event.target.dataset.view
  })
},



  tapHandler(event){
    console.log(event)
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