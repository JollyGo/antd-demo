export default{
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
        },{
            path:'upload',
            component:'upload'
        }]
      }],
    
    plugins: [
        ['umi-plugin-react', {
            antd:true,
            dva:true,
            mock:true
        }],
      ],
    
    theme:{
        "@primary-color":"#30b767"
    }
    // proxy: {
    //     // '/dev': {
    //     //   target: 'http://localhost:8000',
    //     //   changeOrigin: true,
    //     // },
    //   },
}