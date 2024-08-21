/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

var numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers); // 4, 6, 10
/******/ })()
;