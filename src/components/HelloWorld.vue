<template>
  <div>
    <div class="mouderList">
      <div class="headerBox">
        <div class="header">
          <p class="left">渠道模板列表</p>
          <p class="right">刷新</p>
        </div>
      </div>
      <div class="content">
        <div class="dataList">
          <p>数据列表</p>
        </div>
        <div class="tableList">
          <div class="left">
            <img src="../assets/image/page.jpg" alt="">
          </div>
          <div class="right">
            <div class="top">
              <div>
                <p>底色： </p>
                <input type="text" placeholder="默认为白色商城导航底色" />
              </div>
            </div>
            <div class="content">
              <p><span class="name">首页</span><span class="display">显示</span></p>
              <div>
                <div>
                  <div>
                    <p>默认</p>
                    <img src="" alt="">
                  </div>
                  <div>
                    <p>点击</p>
                    <img src="" alt="">
                  </div>
                </div>
                  <p>图片尺寸要求：不大于xx像素，支持Jpg、png、gif</p>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>

</script>

<style>
  body{
    width:100%;
    height:100%;
    background: rgba(249, 249, 249, 1);
  }
 .mouderList{
   width: 100%;
   height:auto;
 }
 .mouderList .headerBox{
   width:100%;
   height: 50px;
   margin:0 auto;
   background: rgba(243, 243, 243, 1);
   box-sizing: border-box;
   border-top:1px solid rgba(228, 228, 228, 1);
   color: #666;
 }
  .mouderList .header{
    width:80%;
    margin:0 auto;
  }
 .mouderList .header p{
   position: relative;
 }
 .mouderList .header .left{
   float: left;
   margin-top: 14px;
   padding-left: 7px;
   font-width:400;
   color: #999999;
   font-size: 14px;
 }
 .mouderList .header .left:after{
   content: '';
   display: block;
   width: 5px;
   height: 16px;
   top: 2px;
   position: absolute;
   left: 0;
   background: rgba(26, 188, 156, 1);
 }
 .mouderList .header .right{
   height: 30px;
   width: 50px;
   float: right;
   margin-top: 10px;
   border:1px solid rgba(228, 228, 228, 1);
   padding-left: 40px;
   line-height: 30px;
   background: #fff;
 }
 .mouderList .header .right:after{
   content: '';
   display: block;
   width: 15px;
   height: 13px;
   position: absolute;
   left: 10px;
   top: 11px;
   background: url("../assets/u318.png") no-repeat;
 }
 .mouderList .header .right:before{
   content: '';
   display: block;
   width: 15px;
   height: 13px;
   position: absolute;
   left: 14px;
   top: 6px;
   background: url("../assets/u319.png") no-repeat;
 }
 .mouderList>.content{
   margin: 20px auto 0;
   width:80%;
   border-bottom: none;
 }
 .mouderList .content  .dataList{
   height: 50px;
   border: 1px solid rgba(228, 228, 228, 1);
   background: rgba(243, 243, 243, 1);
   border-left:0;
   border-right:0;
  margin-bottom: 40px;
 }
 .mouderList .content  .dataList>p{
   padding-left: 20px;
   margin-left: 10px;
   line-height: 50px;
 }

 .mouderList .content .tableList{
   width:100%;
   margin-bottom: 20px;
   clear: both;
   overflow: hidden;
 }
 .mouderList .content .tableList .left {
   width: 45%;
   height: 885px;
   float: left;
 }
  .mouderList .content .tableList .left >img{
    width:100%;
  }
  .mouderList .content .tableList .right{
   float: right;
   width: 50%;
 }
 .mouderList .content .tableList .right .top{
   width:100%;
   height: 127px;
   border: 1px solid rgba(228, 228, 228, 1);
   background: #ffffff;
   box-sizing: border-box;
 }
  .mouderList .content .tableList .right .top>div{
    width: 300px;
    height: 35px;
    margin-top: 46px;
  }
  .mouderList .content .tableList .right .top>div p{
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    text-align: right;
    width: 110px;
    padding-right: 10px;
    float: left;
    height: 35px;
    line-height: 35px;
  }
  .mouderList .content .tableList .right .top>div input{
    float: left;
    width: 180px;
    height: 35px;
    line-height: 35px;
    border:1px solid rgba(228, 228, 228, 1);
    border-radius: 2px;
    box-sizing: border-box;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size:14px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size:14px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size:14px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size:14px;
  }

  .mouderList .content .tableList .right .content{
    width:100%;
  }
  .mouderList .content .tableList .right .content >p{
    height:41px;
    width:100%;
    background: rgba(243, 243, 243, 1);
    border-left:1px solid rgba(228, 228, 228, 1);
    border-right:1px solid rgba(228, 228, 228, 1);
    box-sizing: border-box;

  }
  .mouderList .content .tableList .right .content >p .name ,   .mouderList .content .tableList .right .content >p .display {
    padding-left: 20px;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    text-align: left;
    line-height: 41px;
    color: #666;
  }
  .mouderList .content .tableList .right .content >p .display {
    margin-right: 50px;
    float: right;
    cursor: pointer;
  }
  .mouderList .content .tableList .right .content >div{
    position: relative;
    width:100%;
    height: 222px;
    background: #fff;
    border:1px solid rgba(228, 228, 228, 1);
  }
  .mouderList .content .tableList .right .content >div>div{
    height: 100px;
    width:100%;
    margin-top: 30px;
  }
  .mouderList .content .tableList .right .content >div>div>div {
    float: left;
  }
  .mouderList .content .tableList .right .content >div>div>div p{
    width: 100px;
    height: 100px;
    text-align: right;
    line-height: 100px;
    color: #666666;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    float: left;
  }
  .mouderList .content .tableList .right .content >div>div>div img{
    width: 100px;
    margin-left: 10px;
    height: 100px;
    display: block;
    float: left;
  }
  .mouderList .content .tableList .right .content>div>p{
   display: inline-block;
    font-family: 'PingFangSC-Regular', 'PingFang SC';
    font-weight: 400;
    font-style: normal;
    margin-left: 50px;
    margin-top: 20px;
    font-size: 12px;
    color: #999999;
  }
  .mouderList .content .tableList .right .content>div>button{
    position: absolute;
    width: 20px;
    height: 20px;
    display: block;
    background: url("../assets/image/u8239.png") no-repeat;
    right: 30px;
    top: 80px;
    cursor: pointer;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }










</style>
