import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/index'
import Works from '@/views/works/index'
import Collections from '@/views/collections/index'
import Resume from '@/views/resume/index'
import Comment from '@/views/comment/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/works',
      component: Works
    },
    {
      path: '/collections',
      component: Collections
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/comment',
      component: Comment
    }
  ]
})
