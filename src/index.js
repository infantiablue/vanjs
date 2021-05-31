import utils from "./utils";
import core from "./core";
import validators from "./validators";
import animations from "./animations";
const { ready, createElement, createFragment, appendChild } = core;
const { countWords, getCookie, randomColor, range, djangoCall } = utils;
const { fadeIn, fadeOut, loadingDots, notify } = animations;
const { isEmail, minLength, maxLength } = validators;
export {
	ready,
	createElement,
	createFragment,
	appendChild,
	countWords,
	getCookie,
	randomColor,
	range,
	djangoCall,
	fadeIn,
	fadeOut,
	loadingDots,
	notify,
	isEmail,
	minLength,
	maxLength,
};
