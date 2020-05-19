export default {
  path:'/movie',
  component:()=>import('@/views/Movie'),
  children:[
    /*引入二级路由组件 */
    {
      path:'city',
      component:()=>import('@/components/City')
    },
    {
      path:'nowPlaying',
      component:()=>import('@/components/NowPlaying')
    },
    {
      path:'comingSoon',
      component:()=>import('@/components/ComingSoon')
    },
    {
      path:'search',
      component:()=>import('@/components/Search')
    },
    /*重定向默认组件 */
    {
      path:"/movie",
      redirect:"/movie/nowPlaying"
    }
  ]
}