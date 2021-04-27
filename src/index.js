/**
 * Detect if DOM has fully loaded
 * @param {Function} callback - The function to run after DOM loaded
 * Source: https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/
 */
export const ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
};

/**
 * Count words from string input, return
 * @param {String} str - The input string
 * @return {number} - The number of words
 */
export const countWords = (str) => {
	str = str.trim().replace(/(^\s*)|(\s*$)/gi, "");
	str = str.replace(/[ ]{2,}/gi, " ");
	str = str.replace(/\n /, "\n");
	return str.split(" ").length;
};

/**
 * Get cookie value
 * @param {String} name - The name of desired cookie
 * @return {String} - The value of the cookie
 */
export const getCookie = (name) => {
	let cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
};

/**
 * Wrapper of fetch to be used with crsf token, generated by django
 * @param {String} url - Target URL
 * @return {JSON} - Requset params
 */
export const dPost = async (url = "", data = {}, method = "POST") => {
	// Default options are marked with *
	let options = {
		method: method,
		body: JSON.stringify(data),
	};

	if ((method = "POST")) {
		options.mode = "cors";
		options.headers = {
			"X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value,
		};
	}
	const response = await fetch(url, options);
	if (response.ok) {
		return response.json();
	} else {
		throw new Error("Something went wrong ...");
	}
};

/**
 * Create simple notification message, with Bootstrap CSS
 * @param {String} msg - The message to display
 * @param {type} msg - Type of mesage to style: success, warning, info, danger, dark
 */
export const notify = (msg, type = "success") => {
	// Get the container for notifications to display
	let notifyArea = document.querySelector("#notify");
	// If not existed, create it
	if (!notifyArea) {
		notifyArea = document.createElement("div");
		notifyArea.setAttribute("id", "notify");
		notifyArea.classList.add("notify");
	}
	// Create individual notification element
	let noti = document.createElement("div");
	noti.classList.add("alert", `alert-${type}`);
	noti.innerHTML = `${msg}<button type="button" class="close close-btn" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
	// Append to the container
	notifyArea.appendChild(noti);
	// Append the container to the body tag
	document.querySelector("body").appendChild(notifyArea);
	// Handle closing button for messages
	document.querySelectorAll(".close-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.parentElement.classList.add("animate__animated", "animate__fadeOut");
			btn.parentElement.addEventListener("animationend", () => btn.parentElement.remove());
		});
	});
	// Auto diminish after 2 seconds with effect
	setTimeout(() => {
		noti.classList.add("animate__animated", "animate__fadeOut");
		noti.addEventListener("animationend", () => noti.remove());
	}, 2000);
};
