import $ from 'jquery'
import PerfectScrollbar from 'perfect-scrollbar';

export const scripts = () =>{
  (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    'use strict';
    
    $(function () {
    
      //$('.main-watchlist').perfectScrollbar();
      var ps = new PerfectScrollbar('.main-watchlist');
    
      //comprobar si los link del menu estan presionados o no
      function enableMenu(e) {
        if ($(e).hasClass('active-menu')) {
          $(e).removeClass('active-menu');
          return false;
        } else {
          $(e).addClass('active-menu');
          return true;
        }
      }
      //Cierra el menu de busqueda
    
      function closeMenu() {
        $('.menu-section').fadeOut(); //desaparece el menu
        enableMenu($('#search-link')); //poner al link en su estado original
        alert();
      }
    
      $('.navbar li').click(function (e) {
    
        if ($(this).attr('data-activities') === 'back') {
          $('#back').addClass('disabled');
          $('#trailer').addClass('disabled');
    
          $('.main').css('background-image', 'none');
          $('.main').find('.movie-view-list').remove();
          $('.movie-view').hide();
          $('.main-watchlist').fadeIn();
          $('.head-info').fadeIn();
        }
        if ($(this).attr('data-activities') === 'search') {
          if (enableMenu(this) === true) {
            $('.menu-section').fadeIn();
          } else {
            closeMenu();
          }
        }
        if ($(this).attr('data-activities') === 'trailer') {
          playTrailer();
        }
    
        if ($(this).attr('data-activities') === 'refresh') {
          location.reload();
        }
    
        if ($(this).attr('data-activities') === 'airplay') {
          if (enableMenu(this)) {
            launchIntoFullscreen(document.documentElement); // the whole page
          } else {
            exitFullscreen();
          }
        }
      });
    
      $('.close').click(function closeSearch() {
        closeMenu();
      });
    
      // Lanza full screen
      function launchIntoFullscreen(element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      // Cancela full screen
      function exitFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    
     
    });
    
    },{}]},{},[1]);    
};