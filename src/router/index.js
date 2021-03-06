import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Faq from '../views/Faq.vue'
import Privacy from '../views/Privacy.vue'
import ContactUs from '../views/ContactUs.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ResetPassword from '../views/ResetPassword.vue'
import PersonalityTest from '../views/PersonalityTest.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Pokedex from '../views/Pokedex.vue'
import EditProfile from '../views/EditProfile.vue'
import SearchProfile from '../views/SearchProfile.vue'
import MockTestEasy from '../views/MockTestEasy.vue'
import MockTestMedium from '../views/MockTestMedium.vue'
import MockTestHard from '../views/MockTestHard.vue'
import ErrorPage from '../views/ErrorPage.vue'
import firebase from "firebase/app";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login/resetpassword',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'Sign-Up',
    component: Signup,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/personalitytest',
    name: 'PersonalityTest',
    component: PersonalityTest,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/pokedex',
    name: 'Pokedex',
    component: Pokedex,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/profile/editprofile',
    name: 'EditProfile',
    component: EditProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/profile/searchprofile',
    name: 'SearchProfile',
    component: SearchProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/mocktesteasy',
    name: 'MockTestEasy',
    component: MockTestEasy,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/mocktestmedium',
    name: 'MockTestmedium',
    component: MockTestMedium,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/mocktesthard',
    name: 'MockTestHard',
    component: MockTestHard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'ErrorPage',
    component: ErrorPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/dashboard/pokedex',
    name: 'Pokedex',
    component: Pokedex,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }else{
    next();
  }
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
      }, reject);
  })
};

export default router
