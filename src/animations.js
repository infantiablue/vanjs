/**
 * Create simple notification message, with Bootstrap CSS
 * @param {String} msg - The message to display
 * @param {type} msg - Type of mesage to style: success, warning, info, danger, dark
 */
const notify = (msg, type = "success") => {
	// Get the container for notifications to display
	let notifyArea = document.querySelector("#notify");
	// If not existed, create it
	if (!notifyArea) {
		notifyArea = document.createElement("div");
		notifyArea.setAttribute("id", "notify");
		notifyArea.classList.add("notify");
		notifyArea.style.position = "fixed";
		notifyArea.style.top = "3vh";
		if (window.innerWidth < 768) {
			notifyArea.style.width = "100vw";
		} else {
			notifyArea.style.left = "calc(50% - 180px)";
			notifyArea.style.width = "360px";
		}
	}
	// Create individual notification element
	let noti = document.createElement("div");
	noti.classList.add("d-flex", "alert", `alert-${type}`);
	noti.innerHTML = `<span class="flex-grow-1">${msg}</span><button type="button" class="btn-close float-end flex-shrink-0" aria-label="Close"></button>`;
	// Append to the container
	notifyArea.appendChild(noti);
	// Append the container to the body tag
	document.querySelector("body").appendChild(notifyArea);
	fadeIn(noti);

	// Auto diminish after 3 seconds with effect
	setTimeout(() => {
		fadeOut(noti);
	}, 3000);

	// Handle closing button for messages
	let clostBtn = noti.querySelector("button");
	clostBtn.addEventListener("click", () => {
		fadeOut(noti);
	});
};

/**
 * Display simple three dots loading without any 3rd party library
 * @param {string} elmID - The ID to load three dots, it should be in a span
 * @param {string} text - Which text to display before three dots
 * @param {string} headingSize - The heading tag wrap the loading span
 * @param {boolean} blink - Toggle the blink effect
 * @param {number} itv - The interval between a dot loading
 * @param {number} dots - The number of dots to load
 * @param {boolean} colorized - Toggle random color dots
 */
const loadingDots = (target, text = "Loading", headingSize = "h3", blink = false, colorized = false, itv = 300, dots = 3) => {
	let container = document.getElementById(target);
	let heading = document.createElement(headingSize);
	let textNode = document.createTextNode(text);
	let loadingSpan = document.createElement("span");
	heading.appendChild(textNode);
	heading.appendChild(loadingSpan);
	container.appendChild(heading);

	const animate = (itv, blink) => {
		loadingSpan.innerHTML = "";
		for (let i = 0; i < dots; i++) {
			if (blink)
				setTimeout(() => {
					loadingSpan.innerHTML = "".repeat(itv * (i + 1));
				}, itv * (i * 2 + 1));
			setTimeout(() => {
				loadingSpan.innerHTML = `<span style="color:${colorized ? randomColor() : "black"}"> . </span>`.repeat(i + 1);
			}, itv * (i * 2 + 2));
		}
	};
	if (container) {
		animate(itv);
		setInterval(() => {
			animate(itv);
		}, itv * (dots * 2 + 1));
	}
};

/**
 * Create simple fade in effect, based on animte.css library
 * @param {DOM} elm - The DOM object to be apply effect
 * @param {String} speed - slow (2s), slower (3s), fast(800ms), faster(500ms)
 */
const fadeIn = (elm, speed = "slow") => {
	let effect = ["animate__animated", "animate__fadeIn", `animate__${speed}`];
	elm.classList.add(...effect);
	elm.addEventListener("animationend", () => elm.classList.remove(...effect));
};

/**
 * Create simple fade out effect, based on animte.css library
 * @param {DOM} elm - The DOM object to be apply effect
 * @param {String} speed - slow (2s), slower (3s), fast(800ms), faster(500ms)
 */
const fadeOut = (elm, speed = "slow") => {
	let effect = ["animate__animated", "animate__fadeOut", `animate__${speed}`];
	elm.classList.add(...effect);
	elm.addEventListener("animationend", () => {
		elm.classList.remove(...effect);
		elm.remove();
	});
};

export default { fadeIn, fadeOut, loadingDots, notify };
