<template>
  <div id="app">
    <header>
      <!-- 路由头部组件  -->
      <router-view name='header'></router-view>
    </header>
    <main>
      <!-- 路由默认组件 -->
      <router-view></router-view>
    </main>
    <footer>
      <!-- 路由footer组件 -->
      <router-view name='footer'></router-view>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
//重置样式
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul, li {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, 
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
main {
  width: 100%;
  flex: 1;
  overflow-x: hidden;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
// 引入矢量图标库
@font-face {
  font-family: 'iconfont';  /* project id 1169720 */
  src: url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.eot');
  src: url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.woff') format('woff'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1169720_b63c4o4q3be.svg#iconfont') format('svg');
}
//矢量图样式
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
