Vim�UnDo� ��Ll�{an�ڭr=y��	����d~_v��z=   '                  )       )   )   )    _�=�    _�                             ����                                                                                                                                                                                                                                                                                                                                                V       _k,Z    �             	     {       path: "/about",       name: "About",   !    // route level code-splitting   G    // this generates a separate chunk (about.[hash].js) for this route   6    // which is lazy-loaded when the route is visited.       component: () =>   B      import(/* webpackChunkName: "about" */ "../views/About.vue")     }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k,h    �                 },5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       _k0�     �                �             5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                 v       _k1     �             �             5�_�                           ����                                                                                                                                                                                                                                                                                                                            
                     v       _k1     �               $import Cats from "../views/Cats.vue"5�_�                           ����                                                                                                                                                                                                                                                                                                                            
                     v       _k1     �               $import Dogs from "../views/Cats.vue"5�_�                           ����                                                                                                                                                                                                                                                                                                                            
                     v       _k1$     �               $import Cats from "../views/Cats.vue"5�_�      	                     ����                                                                                                                                                                                                                                                                                                                            
                     v       _k16    �               $import Cats from "../views/Pets.vue"5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                V       _k1c     �                 }5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                V       _k1f     �             �             5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       _k1l     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1n     �             �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          name: "Home",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          component: Home5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          path: "/",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          path: "/",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          name: "Home",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "          component: Home5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "        }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "        },�         "    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "      	  }, Home5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         "    �         "    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         '          name: "Home",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         '          path: "/",5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _k1�    �         '          component: Home5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         '      $import Cats from "../views/Cats.vue"5�_�                        $    ����                                                                                                                                                                                                                                                                                                                                                V       _k1�     �         '      $import Dogs from "../views/Dogs.vue"5�_�      "                 $    ����                                                                                                                                                                                                                                                                                                                                                V       _k�"    �         '      $import Pets from "../views/Pets.vue"5�_�       #   !       "          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _ldR    �         '          path: "/pets",5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _ldn   	 �         '            path: "/pets/:id",5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _ldt   
 �         '          path: "/pets/:id",5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _lr�     �         '          path: "/pets/:id",5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _lr�     �         '      "      path: "/pets/:/species/:id",5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _lr�    �         '      !      path: "/pets//species/:id",5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                          %       v   %    _lr�    �   '   (           �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              '   import Vue from "vue";   #import VueRouter from "vue-router";   %import Home from "../views/Home.vue";   %import Cats from "../views/Cats.vue";   %import Dogs from "../views/Dogs.vue";   %import Pets from "../views/Pets.vue";       Vue.use(VueRouter);       const routes = [     {       path: "/",       name: "Home",       component: Home     },     {       path: "/cats",       name: "cats",       component: Cats     },     {       path: "/dogs",       name: "dogs",       component: Dogs     },     {   !      path: "/pets/:species/:id",       name: "pets",       component: Pets     }   ];       const router = new VueRouter({     mode: "history",     base: process.env.BASE_URL,     routes   });       export default router;�         '      !      path: "/pets/:species/:id",5�_�   (               )           ����                                                                                                                                                                                                                                                                                                                                                             _�=�    �   '   (           �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              '   import Vue from "vue";   #import VueRouter from "vue-router";   %import Home from "../views/Home.vue";   %import Cats from "../views/Cats.vue";   %import Dogs from "../views/Dogs.vue";   %import Pets from "../views/Pets.vue";       Vue.use(VueRouter);       const routes = [       {           path: "/",           name: "Home",           component: Home,       },       {           path: "/cats",           name: "cats",           component: Cats,       },       {           path: "/dogs",           name: "dogs",           component: Dogs,       },       {   #        path: "/pets/:species/:id",           name: "pets",           component: Pets,       },   ];       const router = new VueRouter({       mode: "history",       base: process.env.BASE_URL,       routes,   });       export default router;�         '      %import Dogs from "../views/Dogs.vue";5�_�               "   !      $    ����                                                                                                                                                                                                                                                                                                                                                V       _k�-     �         '    �         '      6import Pets from "../views/Pets.vue";This is home page5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                V       _k1�    �         '      %import Pets from "../views/Pets.vue";5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                V       _k2     �         '      &import Pets from "../views/Pets.vue";5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                             _k2$    �         '      %import Pets from "../views/Pets.vue";5�_�                     !       ����                                                                                                                                                                                                                                                                                                                                                             _k�     �         '      $import Pets from "../views/Pets.vue"5��