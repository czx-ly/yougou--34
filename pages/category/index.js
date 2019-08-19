import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs:[
     
    ],

    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
     request({
       url:"/categories"
     }).then( res =>{
       const {message} = res.data

       this.setData({
         navs:message
       })
     })
  },
  //菜单点击的时候触发
  handleChange(event){

 const {index} = event.currentTarget.dataset;

 this.setData({
   current:index
 })
  }
})


