/**
 * 封装一个类似axios的请求工具库，
 * 
 * axios的例子，
 * 
 * 1：设置基准路径
 * axios.defaults.baseURL=""
 * 
 * 2:发起请求。返回的是promise
 * axios（{参数}）.then().catch()
 * 
 * 3:监听错误，
 * axios.onError(回调函数)
 * 
 * 封装思路。
 * 采用单例的封住模式
 * 
 */
 /**
  * 发起请求
  */

const request = function (config = {}){

   if(!config.url){
    throw new Error("请输入url地址");
    return;
   }
   //拼接上baseURL

   // 看config.url开头是否包含http或者https
  if (config.url.search(/^http/) === -1){
    config.url = request.defaults.baseURL + config.url;

   }


  //返回一个promise  resole是成功的回调，reject是失败
  return new Promise((resolve,reject) =>{
    //发送小程序请求
    wx.request({
      //用调用传入的对象解构
      ...config,
      success(res){
        //成功之后出发then的回调函数
        resolve(res);
      },
      fail(){},

      //后台接口可能会自定义 错误，错误的处理函数放到complete来执行
      complete(res){
        //循环调用错误的错误函数
        request.errors.forEach( fn =>{
          fn(res);
        })
      }
    })
  })
};



 
  //request的默认的属性
  request.defaults ={
    //基准路径
    baseURL:""

  };
//保存错误函数
request.errors = [];
  /**
   * 接收错误的触发函数
   * @参数：callback | 传入的错误函数
   */
request.onError = function(callback){
 //先保存到错误的数组中。请求错误的时候在同一调用
  request.errors.push(callback);
}

export default request



