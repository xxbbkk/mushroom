<template>
    <div 
    class="vh-market"
    >
        <div class="vh-head">
        <img :src="headPhoto" alt="" class="vh-head-img">
        </div>
        <strong>{{name}}</strong>
        <i>{{title}}</i>
        <ul class="vh-clothe-img">
            <li 
            v-for="list in clotheUrl"
            :key="list"
            >
            <img :src="list" alt="">
            <i class="iconfont icon1">&#xe665;</i>
            <b>{{hot}}</b>
            <i class="iconfont icon2">&#xe668;</i>
            </li>
        </ul>
        <span>KITAYAMA北山制包所</span>
        <span>URBAN REVIVO</span>
        <span>NIKE</span>
    </div>
</template>

<script>
export default {
    name:'VhUser',
    props: {
        id: Number,
        name: String,
        title: String,
        headPhoto: String,
        clotheUrl: Array,
        hot: Number
    },

}
</script>

<style lang="scss" scoped>
.vh {
    &-market {
        width: 100%;
       padding-bottom:3%; 
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        position: relative;
        strong {
            font-weight: bold;
            position: absolute;
            top: 3%;
            left: 18%;
        }
        i {
            font-style: none;
            font-size: 12px;
            color: #666;
            position: absolute;
            top: 12%;
            left: 18%;
        }
        b {
            font-style: none;
        }
        span {
           padding: 5px;
           margin: 0 5px;
           background: #f0f0f0;
           color: #666;
           font-size: 14px;

        }
    }
    &-head {
        width: 13%;
        height: 0;
        padding-top: 13%;
        border: 1px solid #ff9900;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        margin: 1% 0 0 2%;
    &-img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    }
    &-clothe-img {
        width: 100%;
        display: flex;
        margin: 5% 0;
        justify-content: space-between;
        li {
            width: 32%;
            height: 0;
            padding-top: 54%;
            position: relative;
            display: flex;
            overflow: hidden;
        img {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
        i {
            position: absolute;
            z-index: 1;
            font-size: 14px;
            color: #fff;
        }
        .icon1 {
            left: 3%;
            top:88%;
        }
        .icon2 {
           left: 84%;
            top: 88%;
        }
        b {
            position: absolute;
            z-index: 1;
            font-size: 14px;
            color: #fff;
            left:15%;
            bottom: 5%;
        }
        }
    }
}
//引入矢量图标
@font-face {
  font-family: 'iconfont';  /* project id 1053239 */
  src: url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.eot');
  src: url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.woff') format('woff'),
  url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1053239_37nqm6ttel1.svg#iconfont') format('svg');
}
</style>
