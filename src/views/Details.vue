<template>
<div class="detailsBox">
  <div class="views">
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="img in imgs"
          :key="img.id"
        >
          <img :src="img.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    
    <div class="price-mgj-normal">
      <div class="price">
        <div class="price-now">
          <span class="price-now--unit">￥</span>
          <span class="price-now--price">{{detail.bottomPrice}}</span>
        </div>
        <div class="price-old">
          <span class="price-old--price" style="opacity: .7;">￥{{detail.originPrice}}</span>
          <div class="price-old--tags"> 
            <span class="tag">优惠价</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sq-product-details-title">
      <span class="sq-product-details-title__product-title">{{detail.title}}</span>
    </div>
    <div class="list">
      <div class="item">免邮费</div>
    </div>
    <div class="bg-color">
      <div class="service-content">
        <div 
          class="service-content--item"
          v-for="img in detail.accessoryHints"
          :key="img.id"
        >
          <span class="item-icon">
            <img src="https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_60x60.webp" alt="">
          </span>
          <span class="item-name">{{img}}</span>
        </div>
        <span class="service-content--more">></span>
      </div>
    </div>
    <div class="component-moresku">
      <span class="text">请选择：颜色 尺码</span>
      <span class="m-icon-arrow-right">></span>
    </div>
    <div class="component-rate">
      <a href="javescript:void(0)" class="head">
        <span class="head-title">暂无评价 | 月销量 {{detail.shop.categoryId}}</span>
      </a>
    </div>
    <div class="component-shop">
      <div class="meili-all-vue-detail-base-shop">
        <div class="head">
          <a href="#" class="head--avater">
            <img :src="detail.shop.picUrl" :alt="detail.shop.nickname" class="lazyload-bind">
          </a>
          <div class="head--info">
            <p class="info-title">
              <span class="info-title--name">{{detail.shop.nickname}}</span>
            </p>
            <div class="info-star">
              <div class="info-star--level">
                <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png" alt="" class=" lazyload-bind">
              </div>
              <div class="info-star--level">
                <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png" alt="" class=" lazyload-bind">
              </div>
              <div class="info-star--level">
                <img src="https://s10.mogucdn.com/p2/161122/upload_580e3fdj2l1d6ihdhh96d4i8fg9li_18x18.png" alt="" class=" lazyload-bind">
              </div>
            </div>
          </div>
          <div class="entry">
            <a href="#" class="entry-text">
              <span class="entry-text--text">进店</span>
              <span class="entry-text--arrow">></span>
            </a>
          </div>
        </div>
        <div class="desc">
          <div class="desc-sale">
            <span class="desc-sale--num">52132</span>
            <span class="desc-sael--text">总销量</span>
          </div>
          <div class="desc-sale">
            <span class="desc-sale--num">1999</span>
            <span class="desc-sael--text">收藏数</span>
          </div>
          <div class="desc-score">
            <span class="desc-score--text">
              <span class="score-text">描述相符</span>
              <span class="score-num">4.52</span>
            </span>
            <span class="desc-score--text">
              <span class="score-text">质量满意</span>
              <span class="score-num">4.58</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="meili-all-vue-base-tab tabs">
      <div class="tabs-bar">
        <div class="tabs-nav--container">
          <div class="tabs-nav--wrap">
            <div class="tabs-nav--animated">
              <div data-key="0" class="tabs-tab ">图文详情</div>
              <div data-key="1" class="tabs-tab ">商品参数</div>
              <div data-key="2" class="tabs-tab ">热卖推荐</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs-content">
        <div data-key="0" class="tabs-tabpane-active">
          <div class="meili-all-vue-detail-base-graphic">
            <div class="desc">
              <div class="desc--start lineBar">
                <i class="lineBar--dot"></i>
              </div>
              <div class="desc--text">温馨提示：小店默认百世快递，需要中通拍下留言即可，全国包邮，免费赠送运费险，小仙女们请放心购买哦。拍下付款24小时内发货哦~~~</div>
              <div class="desc--end lineBar">
                <i class="lineBar--dot"></i>
              </div>
            </div>
            <ul class="lists">
              <li class="list-item">
                <div class="list-item--title">穿着效果</div>
                <div class="split-image">
                  <img 
                    v-for="item in descContentList"
                    :key="item.photo.id"
                    :id="item.photo.id"
                    :src="item.photo.url"
                    alt="" style="width: 100%;height: auto;visibility: inherit;display: inherit;"> 
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 返回顶部 -->
  <div>
    <back-top
      class="sq-cate-right__top"
      scroll-container=".views"
      :distance-to-show="300"
    >
      &#xe6d7;
    </back-top>
  </div>
  <!-- 底部 -->
  
    <div class="footbar">
    <div class="footbar-icons">
      <div class="icon-wrapper">
        <span class="m-icon-shop iconfont">
         &#xe650;
        </span>
        <span class="text">店铺</span>
      </div>
      <div class="icon-wrapper">
        <span class="m-icon-shop iconfont">
           &#xe70d;
        </span>
        <span class="text">客服</span>
      </div>
      <div class="icon-wrapper">
        <span class="m-icon-shop iconfont">
         &#xe60f;
        </span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="footbar-btns">
      <div class="btn-pink">
        <span
           @click.stop="addToCart({
          id: detail.id,
          title: detail.title,
          img: detail.image,
          price: detail.price,
          isChecked: false
        })"
        >加入购物车</span>
      </div>
      <div class="btn-red">
        <div>立即购买</div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import Vue from 'vue'

import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem);

import { mapMutations } from 'vuex'

export default {
  name: 'Details',
  data () {
    return {
     descContentList: [],
      detail: {
        shop: {},
      },
      imgs: [],
    }
  },
  created () {
    const { id } = this.$route.params
    this.$http.getProductDetails(id)
      .then(resp => {
        this.$nextTick(() => {
          this.detail = resp.data.data.detail
          this.imgs = this.detail.photo
          this.descContentList = resp.data.data.detail.descContentList.filter(item => item.photo)
           
          this.$store.commit('changeHeaderTitle',this.detail.title)
        })
      })
  },
  methods: {
    ...mapMutations([
      'addToCart'
    ]),        
  }
}
</script>

<style lang="scss" scoped>
.detailsBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;

  & .views {
    width: 100%;
    margin: 0 auto;
    background-color: #eaeaea;
    font-size: 12px;
    overflow-x: hidden;
    flex: 1;
    
    & .swiper {
      width: 100%;

      & .van-swipe {
        max-width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    & .price-mgj-normal {
      padding: 9px 15px 0;
      background-color: #fff;
      line-height: 43px;
    }

    & .price-mgj-normal .price {
      display: flex;
      height: 43px;

      & .price-now{
        color: #333;
        align-items: flex-start;
        display: flex;
        height: 28px;
        line-height: 28px;

        & .price-now--unit {
          font-size: 12px;
          width: 6px;
          height: 14px;
          line-height: 14px;
          text-align: center;
          display: inline-block;
          margin-right: 2px;
        }

        & .price-now--price {
          font-size: 28px;
        }
      }

      & .price-old{
        display: flex;
        flex-flow: column nowrap;
        margin-left: 4px;

        & .price-old--price {
          display: block;
          font-size: 14px;
          height: 28px;
          text-decoration: line-through;
          color: #999;
          line-height: 28px;
        }

        & .price-old--tags {
          height: 15px;
          display: flex;

          & .tag{
            background-color: rgb(225, 232, 238);
            color: rgb(255, 34, 85);
            font-size: 12px;
            height: 15px;
            line-height: 15px;
            padding: 0 3px;
            text-align: center;
          }
        }
      }

    }

    & .sq-product-details-title {
      padding: 8px 14px 0;
      height: 36px;
      display: block;
      text-align: left;
      color: #333;
      background: #fff;

      &__product-title {
        height: 35px;
        font-size: 16px;
        line-height: 16px;
      }
    }

    & .list {
      height: 33px;
      display: flex;
      flex-flow: wrap;
      padding: 0 15px;
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid #eeeeee;
      font-size: 0.22rem;
      color: #999999;
    }

    & .bg-color {
      height: 36px;
      margin: 9px 0;
      color: #5e5e5e;
      background-color: #fff;

      & .service-content {
        margin: 0 15px;
        height: 36px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-start;

        & .service-content--item {
          height: 18px;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: flex-start;
          flex: 1;

          & .item-icon{
            width: 14px;
            height: 14px;
            display: block;

            & img{
              width: 14px;
              height: 14px;
              visibility: inherit;
              display: inherit;
              border: none;
              vertical-align: middle;
            }
          }

          & .item-name{
            height: 18px;
            font-size: 14px;
            line-height: 18px;
            color: #666666;
            display: block;
            white-space: nowrap;
            margin-left: 2px;
          }
        }

        & .service-content--more {
          font-size: 14px;
          width: 12px;
          height: 18px;
        }
      }
    }

    & .component-moresku {
      margin: 9px 0;
      padding: 0 15px;
      height: 43px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      line-height: 43px;
      background: #fff;

      & .text{
        display: block;
        font-size: 14px;
        color: #666;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    & .component-rate {
      margin: 9px 0;
      padding: 0 15px;
      height: 43px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      line-height: 43px;
      background: #fff;

      & .head {
        height: 12px;
        line-height: 12px;
        color: #5e5e5e;

        & .heda-title{
          height: 12px;
          font-size: 12px;
          line-height: 12px;
          color: #5e5e5e;
        }
      }
    }

    & .component-shop {
      margin: 9px 0; 
      height: 134px;
      background-color: #fff;
      overflow: hidden;

      & .meili-all-vue-detail-base-shop {
        height: 98px;
        padding: 0 14px 16px;

        & .head {
          margin-top: 19px;
          display: flex;
          height: 46px;

          & .head--avater {
            width: 46px;
            height: 46px;
            margin-right: 9px;
            display: flex;
            box-sizing: content-box;
            color: #5e5e5e;
            border-radius: 2px;

            & .lazyload-bind {
              width: 100%;
              height: auto;
              visibility: inherit;
              display: inherit;
            }
          }

          & .head--info {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: flex-start;
            flex-flow: column nowrap;

            & .info-title {
              height: 19px;
              line-height: 19px;
              color: #333;
              font-size: 14px;

              & .info-title--name {
                height: 15px;
                font-size: 14px;
                line-height: 14px;
              }
            }

            & .info-star {
              height: 9px;
              font-size: 9px;
              margin-bottom: 5px;
              color: #999999;
              display: flex;
              align-items: center;

              & .info-star--level {
                width: 9px;
                height: 9px;
                line-height: 9px;
                font-size: 9px;
                margin-right: 4px;

                & .lazyload-bind {
                  width: 100%;
                  height: auto;
                  visibility: inherit;
                  display: inherit;
                }
              }
            }
          }

          & .entry {
            height: 26px;
            padding: 0 12px;
            display: flex;
            justify-content: center;
            border: 1px solid #ff5777;
            border-radius: 2px;

            & .entry-text {
              display: inline-block;
              color: #ff5777;
              font-size: 14px;
              line-height: 26px;
              text-align: center;
              text-decoration: none;

              & span {
                color: black;
              }
            }
          }
        }

        & .desc {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          margin-top: 10px;
          display: flex;
          height: 43px;

          & .desc-sale {
            display: flex;
            flex-flow: column nowrap;
            flex: 1;
            width: 100%;
            align-items: center;
            border-right: 1px solid #E5E5E5;

            & .desc-sale--num {
              display: flex;
              font-size: 16px;
              color: #333333;
              height: 25px;
              color: black;
              line-height: 25px;
            }
            & .desc-sael--text {
              display: flex;
              font-size: 14px;
              color: #999999;
              height: 18px;
              line-height: 18px;
            }
          }

          & .desc-score {
            display: flex;
            flex-flow: column nowrap;
            flex: 1;
            width: 100%;
            align-items: center;

            & .desc-score--text {
              display: flex;
              flex-flow: row nowrap;
              align-items: center;
              height: 18px;

              & .score-text {
                font-size: 14px;
                color: #999999;
              }
              & .score-num {
                font-size: 14px;
                color: #00cc00;
                margin-left: 4px;
              }
            }
          }
        }
      }
    }

    & .meili-all-vue-base-tab {
      background: #fff;
    }

    & .tabs {
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      zoom: 1;
      color: #666;

      & ::before {
        content: " ";
        display: table;
      }

      & .tabs-bar {
        border-bottom: 1px solid #d9d9d9;
        box-sizing: border-box;
        background-color: #fff;
        outline: none;
        height: 42px;
        z-index: 1;
        left: 0 !important;
        width: 100% !important;
        position: inherit;

        & .tabs-nav--container {
          overflow: hidden;
          font-size: 16px;
          line-height: 42px;
          box-sizing: border-box;
          position: relative;
          white-space: nowrap;
          margin-bottom: -1px;
          zoom: 1;

          & ::before {
            content: " ";
            display: table;
          }
          & :after {
            clear: both;
            visibility: hidden;
            font-size: 0;
            height: 0;
            content: " ";
            display: table;
          }
          & .tabs-nav--wrap {
            overflow: hidden;
            margin-bottom: -0.4px;

            & .tabs-nav--animated {
              display: flex;
              padding-left: 0;
              position: relative;
              margin: 0;
              list-style: none;

              & ::before {
                display: table;
                content: " ";
              }
              & ::after {
                display: table;
                content: " ";
                clear: both;
              }
              & .tabs-tab {
                // color: #ff5777;
                flex: 1;
                display: block;
                height: 43px;
                margin: 0 6px;
                box-sizing: border-box;
                position: relative;
                cursor: pointer;
                text-decoration: none;
                text-align: center;
                font-size: 16px;
                color: black;
              }
            }
          }
        }
      }
      & .tabs-content {
        color: black;

        & .tabs-tabpane-active {
          width: 100%;
          flex-shrink: 0;
          max-height: none;

          & .meili-all-vue-detail-base-graphic {
            margin-top: 22px;

            & .desc {
              margin-bottom: 8px;
              padding: 0 16px;
              color: #727272;
              font-size: 16px;
              height: 102px;

              & .desc--start {
                float: left;

                & i {
                  left: 0;
                  font-style: normal;
                }
              }

              & .desc--end {
                float: right;

                & i {
                  right: 0;
                  font-style: normal;              
                }
              }
              & .lineBar {
                width: 100px;
                height: 1px;
                background: #a3a3a5;
                position: relative;

                & .lineBar--dot {
                  display: inline-block;
                  width: 5px;
                  height: 5px;
                  background: #000;
                  border-radius: 50%;
                  position: absolute;
                  top: -2px;
                }
              }

              & .desc--text {
                white-space: pre-wrap;
                padding: 16px 0;
                color: #727272;
                font-size: 16px;
              }
            }

            & .lists {
              width: 100%;

              & .list-item {
                & .list-item--title {
                  margin-top: 8px;
                  height: 27px;
                  width: 100%;
                  line-height: 27px;
                  text-indent: 0.3rem;
                  color: #303030;
                  font-weight: 400;
                  font-size: 16px;
                  padding-left: 16px;

                  & .split-image {
                    margin-top: 10px;
                    width: 414px;
                    height: 414px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  & .footbar {
    width: 100%;
    height: 55px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    border-top: 1px solid #ededed;

    & .footbar-icons {
      width: 45%;
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      justify-content: space-around;
      // flex: none;

      & .icon-wrapper {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #ededed;
        height: 55px;
        width: 33%;

        & .m-icon-shop {
          color: #666;
          display: flex;
          width: 20px;
          font-size: 20px;
          margin-top: -5px;
          & ::after {
            contain: "\e611"
          }
        }
        & .text {
          display: flex;
          font-size: 12px;
          color: #666;
        }
      }
    }
    & .footbar-btns {
      display: flex;
      width: 55%;
      flex-flow: row nowrap;

      & .btn-pink {
        color: #ff5777;
        background-color: #ffe6e8;
        flex: 1;
        font-size: 16px;
        height: 55px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
      }
      & .btn-red {
        color: #fff;
        background: linear-gradient(90deg,#ff5777,#ff468f);
        flex: 1;
        font-size: 16px;
        height: 55px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;
      }
    }
  }
  & .sq-cate-right__top {
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 50;
  }
}
</style>
