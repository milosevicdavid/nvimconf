Vim�UnDo� ��)^5{���ݹ^���i�*\�� ���*��          	                           _{B    _�                             ����                                                                                                                                                                                                                                                                                                                                       
           V        _z�z     �                module.exports = {     siteName: 'Gridsome',     plugins: []   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _z�{     �                  �               �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _z�    �                  �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _z�     �                (        space: 'YOUR_SPACE', // required   5        accessToken: 'YOUR_ACCESS_TOKEN', // required5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _z�"     �               #        host: 'cdn.contentful.com',�             5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                V       _z�&     �               J      accessToken: process.env.CTF_ACCESS_TOKEN,ost: 'cdn.contentful.com',5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                V       _z�(    �               K      accessToken: process.env.CTF_ACCESS_TOKEN,host: 'cdn.contentful.com',5�_�      	                 	    ����                                                                                                                                                                                                                                                                                                                                                V       _z�0    �               )        hspace: process.env.CTF_SPACE_ID,5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                V       _z�P     �                     }5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                V       _z�P     �                     �             �                     },5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       _z�X    �               "    ContentfulBlog: '/blog/:slug',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _z�v    �               '    ContentfulPortfolio: '/blog/:slug',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _z�}     �               +    ContentfulPortfolioBlog: '/blog/:slug',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       _z�    �                 },5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       _z�     �                 module.exports = {     plugins: [       {   )      use: '@gridsome/source-contentful',         options: {   (        space: process.env.CTF_SPACE_ID,   2        accessToken: process.env.CTF_ACCESS_TOKEN,   #        host: 'cdn.contentful.com',           environment: 'master',           typeName: 'Contentful'         },         templates: {   -      ContentfulPortfolioBlog: '/blog/:slug',         },       }     ]   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       _z�    �                  �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       _z�    �               "    ContentfulBlog: '/blog/:slug',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       _z�   	 �               '    ContentfulPortfolio: '/blog/:slug',5�_�                          ����                                                                                                                                                                                                                                                                                                                                                 v       _z��   
 �               +    ContentfulPortfolioBlog: '/blog/:slug',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       _z��    �               +    contentfulPortfolioBlog: '/blog/:slug',5�_�                          ����                                                                                                                                                                                                                                                                                                                                                 v       _z��     �                     �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       _z��    �                       �             �                     options: {}5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _{/     �      
       5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             _{4     �                �   	   
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       _{A    �                   templates: {   +    ContentfulPortfolioBlog: '/blog/:slug',     },   }5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _{0     �   	   
       �      
             module.exports = {     siteName: 'Gridsome',     plugins: [       {   )      use: '@gridsome/source-contentful',   &      space: process.env.CTF_SPACE_ID,   0      accessToken: process.env.CTF_ACCESS_TOKEN,   !      host: 'cdn.contentful.com',         environment: 'master',         typeName: 'Contentful',       },     ],     templates: {   +    ContentfulPortfolioBlog: '/blog/:slug',     },   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       _z�w    �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v       _z��     �                   : '/blog/:slug',5��