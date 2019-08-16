import request from "../../utils/request.js"


Page({
   data:{
     autoplay : true,
     //轮播图的数据
        imgUrls:[
          
        ],
        //菜单的数据
        menus:[],
        //楼层的数据
        floors:[]
   },
   onLoad(){
     //轮播图的数据请求
     request({
       url:"/home/swiperdata"
     }).then( res =>{
       const {message} = res.data;
       this.setData({
         imgUrls : message
       })
     });
     //请求菜单的数据
     request({
       url:"/home/catitems"
     }).then( res =>{
       
       const {message} = res.data;

       this.setData({
         menus:message
       })
     })
     //请求楼层的数据
     request({
       url:"/home/floordata"
     }).then( res =>{
       
       const {message} = res.data;
       this.setData({
         floors:message
       })
     })
   }
})
