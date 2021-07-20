// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
    list:[
      {
        img:"/static/images/icons/home.png",
        selectedImg:"/static/images/icons/home-active.png",
        path:"/pages/home/index"
      },
      {
        img:"/static/images/icons/movie.png",
        selectedImg:"/static/images/icons/movie-active.png",
        path:"/pages/movie/index"
      },
      {
        img:"/static/images/icons/ticket-active.png",
        selectedImg:"/static/images/icons/ticket-active.png",
        path:"/pages/ticket/index"
      },
      {
        img:"/static/images/icons/cinema.png",
        selectedImg:"/static/images/icons/cinema-active.png",
        path:"/pages/cinema/index"
      },
      {
        img:"/static/images/icons/main.png",
        selectedImg:"/static/images/icons/main-active.png",
        path:"/pages/main/index"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPage(e){
      var path = e.currentTarget.dataset.path;
      wx.switchTab({
        url: path,
      })
    }
  }
})
