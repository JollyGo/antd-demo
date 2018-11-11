export default{
    // singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes:[{
            path:'/',
            component:'./'
        },{
            path:'/home',
            component:'home'
        },{
            path:'/user',
            component:'user'
        },{ 
            path: 'puzzlecards', 
            component: './puzzlecards' 
        },{
            path:'list',
            component:'list'
        }]
      }],
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva:true,
            mock:true
        }],
      ],
    // proxy: {
    //     // '/dev': {
    //     //   target: 'http://localhost:8000',
    //     //   changeOrigin: true,
    //     // },
    //   },
}