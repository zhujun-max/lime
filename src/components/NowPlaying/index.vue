<template>
	<div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"/>
    <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
          <ul>				
            <li class="pullDwon">{{pullDownMsg}}</li>	
            <li v-for="item in movieList" :key="item.id">
              <div class="pic_show" @tap="handleToDetail"><img :src="item.img | setWH('128.180')"></div>
              <div class="info_list">
                <h2>{{item.nm}}
                  <img v-if="item.version" src="@/assets/maxs.png" alt=""/>
                </h2>
                <p>观众评 <span class="grade">{{item.sc}}</span></p>
                <p>主演:{{item.star}}</p>
                <p>今日{{item.wish}}家影院放映{{item.showst}}场</p>              
              </div>
              <div class="btn_mall">  
                购票
              </div>
            </li>			
          </ul>
        </Scroller>
			</div>	
</template>

<script>
// import BScroll from 'better-scroll';

export default {
	name:"NowPlaying",
	data(){
		return{
      movieList:[],
      pullDownMsg:'',
      isLoading:true,
      prevCityId:-1,
		}
	},
	activated(){
    let cityId=this.$store.state.city.id;
    if(this.prevCityId===cityId){      
      return;
    }
    this.isLoading=true;

    console.log('切换城市成功，调用数据成功');
		this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
			let msg=res.data.msg;
			if(msg ==="ok"){
        this.movieList=res.data.data.movieList;
        this.isLoading=false;
        this.prevCityId=cityId;
        // 数据渲染完毕调用
        // this.$nextTick(()=>{
        //  let scroll=new BScroll(this.$refs.movie_body,{
        //     tap:true,
        //     probeType:1
        //   });
        //     scroll.on('scroll',(pos)=>{              
        //       // console.log('下拉成功')
        //       if(pos.y>30){
        //         this.pullDownMsg='正在更新中……';
        //       }
              
        //     });
        //      scroll.on('touchEnd',(pos)=>{
        //       // console.log('结束滑动')
        //       if(pos.y>30){
        //         this.axios.get('/api/movieOnInfoList?cityId=17').then((res)=>{
        //           	let msg=res.data.msg;
		    //           	if(msg ==="ok"){
        //                this.pullDownMsg='更新完毕……';
        //                //延迟一秒
        //                setTimeout(()=>{
        //                  this.movieList=res.data.data.movieList;
        //                  this.pullDownMsg='';
        //                },1000);
        //           }                  
        //         })               
        //       }
        //     });
        // });        
			}
		});		
  },
  methods:{
    handleToDetail(){
      console.log('点击成功')
    },
    handleToScroll(pos){
      if(pos.y>30){
        this.pullDownMsg='正在更新中……';
      }
    },  
    handleToTouchEnd(pos){
      if(pos.y>30){
        this.axios.get('/api/movieOnInfoList?cityId=17').then((res)=>{
          let msg=res.data.msg;
          if(msg ==="ok"){
              this.pullDownMsg='更新完毕……';
              //延迟一秒
              setTimeout(()=>{
                this.movieList=res.data.data.movieList;
                this.pullDownMsg='';
              },1000);
          }                  
        });

      }
    }
  }
}
</script>

<style scoped>

#content .movie_body{ 
  flex:1; 
  overflow:auto;
  }
.movie_body ul{ 
  margin:0 12px; 
  overflow: hidden;
  }
.movie_body ul li{ 
  margin-top:12px; 
  display: flex; 
  align-items:center; 
  border-bottom: 1px #e6e6e6 solid; 
  padding-bottom: 10px;}
.movie_body .pic_show{ 
  width:64px; 
  height: 90px;
  }
.movie_body .pic_show img{ 
  width:100%;
  }
.movie_body .info_list { 
  margin-left: 10px; 
  flex:1; 
  position: relative;
  }
.movie_body .info_list h2{ 
  font-size: 17px; 
  line-height: 24px; 
  width:150px; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow:ellipsis;
  }
.movie_body .info_list p{ 
  font-size: 13px; 
  color:#666; 
  line-height: 22px; 
  width:200px; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow:ellipsis;
  }
.movie_body .info_list .grade{ 
  font-weight: 700; 
  color: #faaf00; 
  font-size: 15px;
  }
.movie_body .info_list img{ 
  width:50px; 
  position: absolute; 
  right:10px; 
  top: 5px;
  }
.movie_body .btn_mall , 
.movie_body .btn_pre{ 
  width:47px; 
  height:27px; 
  line-height: 28px; 
  text-align: center; 
  background-color: #f03d37;
  color: #fff; 
  border-radius: 4px; 
  font-size: 12px; 
  cursor: pointer;
  }
.movie_body .btn_pre{ 
  background-color: #3c9fe6;
  }
.movie_body .pullDwon{
  margin: 0;
  padding: 0;
  border: none;
}
</style>