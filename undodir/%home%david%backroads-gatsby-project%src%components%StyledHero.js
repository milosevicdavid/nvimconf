Vim�UnDo� �#(JSBJ)7��_) nI�;�xc6��                    .       .   .   .    _6    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _2O     �                   5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _2R     �                  sfce5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       _2a     �                �             5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                                v       _2u    �               &import styled from 'styled-components'5�_�                       5    ����                                                                                                                                                                                                                                                                                                                                                v       _2�    �               6import BackgroundImage from 'gatsby-source-filesystem'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _2�     �               const StyledHero = () => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _3)     �               	    <div>5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                v       _3+     �                   <>5�_�      
           	   	       ����                                                                                                                                                                                                                                                                                                                                                v       _38     �      
         
    </div>5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                v       _3@     �      	          5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                v       _3}     �                   <BackgroundImage>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _3�     �                 export default StyledHero;5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                v       _3�     �                 "export default styled(StyledHero);5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                v       _3�     �             �                 #export default styled(StyledHero)``5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                v       _3�    �      	         	         5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                  v        _3�     �                5�_�                       +    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4     �               ,    <BackgroundImage  className={className}>5�_�                       7    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4     �               8    <BackgroundImage  className={className} fluid={img}>5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4:     �                   5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                  v        _4F     �                    background-position: center;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4P     �                   background-size: cover;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4Z     �                   opacity: 1;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4c     �                   opacity: 1;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4g     �                   opacity: 1!important;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4o     �                   display: flex;5�_�                           ����                                                                                                                                                                                                                                                                                                                               "                  v        _4|    �                   justify-content: center;5�_�                            ����                                                                                                                                                                                                                                                                                                                               "                  v        _4�    �                   align-items: center;    �                5�_�                       "    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4�     �               "export default styled(StyledHero)`5�_�                       %    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4�     �               &    background: ${props => props.home}5�_�                       (    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4�     �               1    background: ${props => props.home ? : 'none'}5�_�                        *    ����                                                                                                                                                                                                                                                                                                                               "                  v        _4�     �               3    background: ${props => props.home ? '': 'none'}5�_�      !                  )    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5     �               4    background: ${props => props.home ? '' : 'none'}5�_�       "           !      (    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5    �               4    background: ${props => props.home ? '' : 'none'}�             5�_�   !   #           "      )    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5)    �               q    background: ${props => props.home ? ' linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'}5�_�   "   $           #      o    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5T    �                 �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �                 import React from 'react';   &import styled from 'styled-components'   5import BackgroundImage from 'gatsby-background-image'       :const StyledHero = ({img, className, children, home}) => {       return (   D    <BackgroundImage  className={className} fluid={img} home={home}>           {children}       </BackgroundImage>       );   };       "export default styled(StyledHero)`   p    background: ${props => props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'}        background-position: center;       background-size: cover;       opacity: 1!important;       display: flex;       justify-content: center;       align-items: center;   `�               p    background: ${props => props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none'}5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                               "                  v        _5t     �                           : "none"}5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                               "                  v        _5u     �                   : "none"};5�_�   %   '           &      "    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5�     �               "export default styled(StyledHero)`5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                               "                  v        _5�     �                   min-height: 5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                               "                  v        _5�     �                   min-height: ${props => ()}5�_�   (   *           )      /    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5�     �               3    min-height: ${props => (props.home ? "calc()")}5�_�   )   +           *      =    ����                                                                                                                                                                                                                                                                                                                               "                  v        _5�   	 �               ?    min-height: ${props => (props.home ? "calc(100vh - 62px)")}5�_�   *   ,           +      H    ����                                                                                                                                                                                                                                                                                                                                                 v       _5�   
 �               H    min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")}5�_�   +   -           ,           ����                                                                                                                                                                                                                                                                                                                                                  v   !    _5�    �                   : "none"};    �                5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                v   !    _6     �                   : "none"};5�_�   -               .          ����                                                                                                                                                                                                                                                                                                                                                v   !    _6    �                 �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �                 import React from "react"   &import styled from "styled-components"   5import BackgroundImage from "gatsby-background-image"       <const StyledHero = ({ img, className, children, home }) => {       return (   G        <BackgroundImage className={className} fluid={img} home={home}>               {children}           </BackgroundImage>       )   }       "export default styled(StyledHero)`   I    min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};       background: ${props =>           props.home   L            ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"       : "none"};        background-position: center;       background-size: cover;       opacity: 1!important;       display: flex;       justify-content: center;       align-items: center;   `�                   : "none"};5��