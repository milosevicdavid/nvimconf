Vim�UnDo� �u9�N麥\e��哆���_-_�s�w^�nD                      )       )   )   )    _��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _��     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �                  const jwt = require()5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             _��     �                  #const jwt = require('jsonwebtoken')5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             _��#     �                  $const jwt = require('jsonwebtoken');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��#     �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _��#     �                  5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��4     �                 function(req,res,next)5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             _��5     �             �                 function(req,res,next) {}5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _��;     �               function(req,res,next) {5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             _��?     �                5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             _��C     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��R     �                 const token = req.header()5�_�                       (    ����                                                                                                                                                                                                                                                                                                                                                             _��W     �               (  const token = req.header('auth-token')5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                                             _��Y     �               )  const token = req.header('auth-token');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��b     �                 if(!token)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��o     �                  if(!token) return res.status()5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             _��q     �               #  if(!token) return res.status(401)5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                                             _��{     �               *  if(!token) return res.status(401),send()5�_�                       9    ����                                                                                                                                                                                                                                                                                                                                                             _��    �               9  if(!token) return res.status(401),send('Access Denied')5�_�                       :    ����                                                                                                                                                                                                                                                                                                                                                             _��     �               :  if(!token) return res.status(401),send('Access Denied');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      	           5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
   
    �      
   	        try {}5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             _��     �   	              }5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             _��     �             �   
            
  catch {}5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
          5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             _��     �      
         !    const verified = jwt.verify()5�_�                    	   @    ����                                                                                                                                                                                                                                                                                                                                                             _��    �      
         @    const verified = jwt.verify(token, process.env.TOKEN_SECRET)5�_�                    	   A    ����                                                                                                                                                                                                                                                                                                                                                             _���    �               A    const verified = jwt.verify(token, process.env.TOKEN_SECRET);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _���     �               	  catch {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _���     �                 catch  (err){5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _���     �                5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             _���     �                   res.status()5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             _���     �                   res.status(400).send()5�_�   !   #           "      )    ����                                                                                                                                                                                                                                                                                                                                                             _��      �               )    res.status(400).send('Invalid Token')5�_�   "   $           #      *    ����                                                                                                                                                                                                                                                                                                                                                             _��    �               *    res.status(400).send('Invalid Token');5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             _���     �                 }5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                             _���    �                  5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                             _��'     �               function auth(req,res,next) {5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             _��5    �               %module.exports = auth(req,res,next) {5�_�   '   )           (   
       ����                                                                                                                                                                                                                                                                                                                                                             _��~     �   
                �   
          5�_�   (               )      
    ����                                                                                                                                                                                                                                                                                                                                                             _��    �   
            
    next()5��