<template>
  <div id="app">
    <div class="top_bg clearfix top01" style="min-width: 1000px">
      <div class="w1000 margin_auto">
        <div style="padding-top: 45px; height:50%; width: 50%" class="fl">
          <img src="@/assets/logo/logo-white.svg" >
          <img src="@/assets/image/icon01.png">
          <img src="@/assets/image/dierzhibudangjian.png">
        </div>
        <div class="fr" style="width: 50%; padding-top: 35px;">
          <p class="fr" style="color: white; width: 100%; text-align: right">
            联系方式：x老师
            <img src="@/assets/image/icon04.png" width="16" height="17">
            xxxxxx@shanghaitrust.com
            <img src="@/assets/image/icon03.png" width="11" height="17">
            021-2313xxxx
          </p>
          <p class="fr" style="color: white; width: 100%; text-align: right">
            x老师
            <img src="@/assets/image/icon04.png" width="16" height="17">
            xxxxxx@shanghaitrust.com
            <img src="@/assets/image/icon03.png" width="11" height="17">
            021-2313xxxx
          </p>
          <p class="fr" style="color: white; width: 100%; text-align: right">
            x老师
            <img src="@/assets/image/icon04.png" width="16" height="17">
            xxxxxx@shanghaitrust.com
            <img src="@/assets/image/icon03.png" width="11" height="17">
            021-2313xxxx
          </p>
<!--          <span style="text-align: right">-->
<!--            <input name="keyword" id="keyword" value="站内检索">-->
<!--            <input type="image" :src="require('@/assets/image/icon05.png')" style=" width:39px;height:32px;" alt="">-->
<!--          </span>-->
        </div>
      </div>
    </div>
    <div class="clearfix nav_bg">
      <div class="w1000 nav_cpc">
        <dl class="t01" style="width: 33%">
          <dt>
            <img src="@/assets/image/fabu.png">
          </dt>
          <dd>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">支部动态</a>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">风采展示</a>
          </dd>
        </dl>
        <dl class="t01" style="width: 33%">
          <dt>
            <img src="@/assets/image/huodong.png" >
          </dt>
          <dd>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">活动报名</a>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">党费提交</a>
          </dd>
        </dl>
        <dl class="t01" style="width: 33%">
          <dt>
            <img src="@/assets/image/wode.png">
          </dt>
          <dd>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">登陆</a>
            <a href="	http://dangjian.people.com.cn/GB/394443/index.html">支部信箱</a>
          </dd>
        </dl>

      </div>
    </div>
    <div class="w1000 margin_auto p1_con" style="margin-top: 30px; margin-bottom: 30px">
      <div class="fl" style="width:550px">
        <el-carousel :interval="3000" height="380px">
          <el-carousel-item v-for="item in pics" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="fr" style="width:420px">
        <h1>
          <a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650282.html" target="_blank">
            支部动态大标题
          </a>
        </h1>
        <ul class="list_14 clearfix bor_bt">
          <li><a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650406.html" target="_blank">以行动学习推动新时代党的创新理论武装走深走实</a></li>
          <li><a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650335.html" target="_blank">扎实推进新时代廉洁文化建设 强化全面从严治党政治自觉</a></li>
          <li><a href="http://dangjian.people.com.cn/n1/2021/0713/c117092-32156537.html" target="_blank"><b><font color="#000000">
            中国共产党党徽党旗图案使用规定</font></b></a>
            <a href="http://dangjian.people.com.cn/n1/2021/0713/c117092-32156194.html" target="_blank"><b><font color="#000000">
              标准版本下载</font></b></a>
          </li>
        </ul>
        <h1>
          <a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650353.html" target="_blank">风采展示大标题</a>
        </h1>
        <ul class="list_14 clearfix bor_bt">
          <li><a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650338.html" target="_blank">必须坚持守正创新</a></li>
          <li><a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650323.html" target="_blank">广西打造新时代党员教育“红色港湾”</a></li>
          <li><a href="http://dangjian.people.com.cn/n1/2023/0324/c117092-32650288.html" target="_blank">河北邢台邢东新区：强化基层治理 提升服务能力</a></li>
          <li><a href="http://cpc.people.com.cn/n1/2022/1206/c164113-32581637.html" target="_blank"><b>学习宣传贯彻党的二十大精神征文活动启事</b></a></li>
        </ul>
      </div>

      <div class="clearfloat"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'This is the test',
    meta: [
      { charset: 'utf-8' },
      //{ name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
    ]
  },
  data() {
    return {
      pics: [require("@/assets/image/photo-sample1.jpeg"),
        require("@/assets/image/photo-sample2.jpeg"),
        require("@/assets/image/photo-sample3.jpeg"),
        require("@/assets/image/photo-sample4.jpeg"),],
    }
  },
  photo() {

  }
}


</script>

<style>
#app {
  padding: 0;
  margin: 0;
  font: normal 12px/200% "微软雅黑";
  color: #000000;
  text-align: center;
}

.top_bg {
  background: url(assets/image/bg05.gif);
  height: 152px;
}
.clearfix:before,.clearfix:after {content:"";display:table;}
.clearfix:after{clear:both;overflow:hidden;}
.clearfix{zoom:1;}
.w1000 {
  width:1000px;
}
.margin_auto {
  margin-left:auto;
  margin-right:auto;
}
h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, button, input, textarea, th, td {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  text-align: left;
  font: normal 12px/200% "微软雅黑";
}
p {
  text-align: left;
  font: normal 12px/200% "微软雅黑";
}
a:link, a:visited {
  color: #000000;
  text-decoration: none;
}
div {
  margin: 0 auto;
  text-align: left;
  font: normal 12px/200% "微软雅黑";
}
ol, ul, li {
  list-style: none;
}

.fl {
  float:left;
}
.fr {
  float:right;
}

.top01 .fl img {
  float: left;
  margin-right: 25px;
  margin-bottom: 10px;
  height: 60px;
}
.top01 .fr {
  width: 420px;
}
.top01 .fr p {
  display: block;
  font-size: 14px;
  font-weight: 400;
}
.top01 .fr p img {
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
}
.top01 .fr span {
  width: 260px;
  padding: 20px 15px 0 0;
  float: right;
  display: block;
}
.top01 .fr span input{
  display: inline-block;
  float: left;
  height: 32px;
  width: 200px;
  border: none;
  background: #e78b81;
  color: #af0b02;
  line-height: 32px;
  padding-left: 5px;
}
.nav_bg {
  border-bottom: #cecece 1px solid;
  height: 65px;
  border-top: #fff 1px solid;
}
.nav_cpc dl.t01 {
  width: 350px;
}
.nav_cpc dl {
  float: left;
}
.nav_cpc dl dt {
  width: 80px;
  float: left;
}
.nav_cpc dt img {
  height: 65px;
}
.nav_cpc dl dd a {
  padding: 10px;
}
.nav_cpc dl dd {
  font-size: 15px;
  float: left;
  width: 240px;
  padding: 15px 0 0 10px;
  line-height: 220%;
}
.p1_con .fr h1 {
  font-size: 24px;
  line-height: 140%;
}
.p1_con .fr ul.bor_bt {
  border-bottom: #dcdcdc 1px solid;
}
.p1_con .fr ul {
  margin: 15px auto;
  padding-bottom: 20px;
}
.p1_con .fr ul li {
  line-height: 220%;
  font-size: 16px;
}
.list_14 li {
  background: url(assets/image/dot.gif) no-repeat 0 center;
  padding-left: 12px;
  font-size: 14px;
}

.el-carousel__item {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}

.el-carousel__item img {
  height: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.el-carousel__item {
  background-color: #A52116;
}

.clearfloat {
  clear:both;
}


</style>
