Vim�UnDo� ���,|�C��c�5#L�M���7zڼ�t)��b      !module.exports = mongoose.model()             *       *   *   *    _�i�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                  const mongoose = require()5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             _�h�    �                  $const mongoose = require('mongoose')5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                  %const mongoose = require('mongoose');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                  5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                 (const userSchema = new mongoose.Schema()5�_�                       (    ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                 �             �                 *const userSchema = new mongoose.Schema({})5�_�      	                 	    ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                   �             �               
  name: {}5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                   type: String,5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                    required5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             _�h�     �                   required: true,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�h�     �      	   	        }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�h�     �      
   	        },5�_�                    	   
    ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �   	                �   	          �         
        email: {}5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �   	                type: String,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �   
                 required5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �   
                required: true,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �                   max: 2555�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�i     �                   max: 255,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _�i,     �                   required: true,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�i8     �                 }5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�i8     �                 },5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�i@     �                 password: String,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�iI     �                 required: true,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�iP     �                 max: 1024,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�ib     �                 password: String,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�ic     �             �                 password: {}String,5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          v       _�ie     �               
  }String,5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�is     �                 required: true,     max: 1024,     min: 6�                  type: String,�                 type: String,     required: true,     max: 1024,     min: 6�             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�is     �                   type: String,       required: true,       max: 1024,   
    min: 6�             5�_�                             ����                                                                                                                                                                                                                                                                                                                                                V       _�iu    �                 5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                V       _�i{     �                 }5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                V       _�i{     �                 },5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                V       _�i{     �                 5�_�   "   $           #      	    ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                   �             �               
  date: {}5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                   type: Date,5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                 })5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                  5�_�   &   (           '           ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                  5�_�   '   )           (           ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                 !module.exports = mongoose.model()5�_�   (   *           )      '    ����                                                                                                                                                                                                                                                                                                                                                V       _�i�     �                 )module.exports = mongoose.model('User', )5�_�   )               *      3    ����                                                                                                                                                                                                                                                                                                                                                V       _�i�    �                 4module.exports = mongoose.model('User', userSchema )5��