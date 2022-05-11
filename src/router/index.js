import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Log1 from '../components/LognIn/Log1.vue'
import UserLog from '../components/LognIn/UserLog.vue'
import LogPhone from '../components/LognIn/LogPhone.vue'
import Verify from '../components/LognIn/Verify.vue'
import Bio from '../components/LognIn/Bio.vue'
import Page from '../components/Homepage/Page.vue'
import UserSign from '../components/LognIn/UserSign.vue'
import Upprofile from '../components/LognIn/Upprofile.vue'
import Tage from '../components/LognIn/Tage.vue'
import FollowUser from '../components/LognIn/FollowUser.vue'
import UserProfile from '../components/Userprofile/UserProfile.vue'
import WritePost from '../components/Homepage/WritePost.vue'
import Follower from '../components/Userprofile/Follower.vue'
import Following from '../components/Userprofile/Following.vue'
import AccountSetting from '../components/Userprofile/AccountSetting.vue'
import EditProfile from '../components/Userprofile/EditProfile.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Log1',
    name: 'Log1',
    component: Log1
  },
  {
    path: '/Tage',
    name: 'Tage',
    component: Tage
  },
  {
    path: '/upload',
    name: 'UploadProfile',
    component: Upprofile
  },
  {
    path: '/followtage',
    name: 'FollowUser',
    component: FollowUser
  },
  {
    path: '/UserLog',
    name: 'LogIn',
    component: UserLog
  },
  {
    path: '/LogPhone',
    name: 'PhoneLog',
    component: LogPhone
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: UserSign
  },
  {
    path: '/Homepage',
    name: 'Page',
    component:Page
  },
  {
    path: '/Verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/Bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: UserProfile
  },
  {
    path: '/Tittle',
    name: 'Tittle',
    component: WritePost
  },
  {
    path: '/Follow',
    name: 'Follow',
    component: Follower
  },
  {
    path: '/Setting',
    name: 'AccountSetting',
    component: AccountSetting
  },
  {
    path: '/Edit1',
    name: 'Edit',
    component: EditProfile
  },
  {
    path: '/Follow1',
    name: 'Follow1',
    component: Following
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
