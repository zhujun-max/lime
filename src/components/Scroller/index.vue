<template>
<div class="wrapper" ref="wrapper">
  <!-- 插槽 -->
  <slot></slot>
</div>  
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:'Scroller',
  props:{
    //两个方法
    handleToScroll:{
      type:Function,
      default:function(){}
    },
    handleToTouchEnd:{
      type:Function,
      default:function(){}
    },
  },
  mounted(){

    let scroll=new BScroll(this.$refs.wrapper,{
      tap:true,
      probeType:1
    });
    //添加属性
    this.scroll=scroll;

    //添加方法
    scroll.on('scroll',(pos)=>{
      // pos回调出去
      this.handleToScroll(pos);
    });

    scroll.on('touchEnd',(pos)=>{
      // pos回调出去
      this.handleToTouchEnd(pos);
    });  
  },
  methods:{
    toScrollTop(y){
      this.scroll.scrollTo(0,y);
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
}

</style>