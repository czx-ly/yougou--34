  import request from "./utils/request.js";

//app.js
App({
  //项目运行时触发，执法执行一次
onLaunch:function(){
    //初始化reqeust 基准路径
  request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1"
}
})