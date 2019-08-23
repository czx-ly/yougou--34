  import request from "./utils/request.js";

//app.js
App({
  //项目运行时触发，执法执行一次
onLaunch:function(){
    //初始化reqeust 基准路径
  request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1";

  //错误拦截
  request.onError(function(res){

    if(res.data.meta.status === 401){
       //跳转到授权页面
       wx.navigateTo({
         url: '/pages/auth/index',
       })
    }
  })
}
})