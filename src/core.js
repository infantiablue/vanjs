/** @jsx createElement */
/*** @jsxFrag createFragment */
const createElement = (tag, props, ...children) => {
	if (typeof tag === "function") return tag(props, ...children);
	const element = document.createElement(tag);

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith("on") && name.toLowerCase() in window) element.addEventListener(name.toLowerCase().substr(2), value);
		else element.setAttribute(name, value.toString());
	});

	children.forEach((child) => {
		appendChild(element, child);
	});

	return element;
};

const appendChild = (parent, child) => {
	if (Array.isArray(child)) child.forEach((nestedChild) => appendChild(parent, nestedChild));
	else parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

const createFragment = (props, ...children) => {
	return children;
};

/**
 * Detect if DOM has fully loaded
 * @param {Function} callback - The function to run after DOM loaded
 * Source: https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
 */
const ready = (callback) => (document.readyState != "loading" ? callback() : document.addEventListener("DOMContentLoaded", callback));

export default { ready, createElement, createFragment, appendChild };
