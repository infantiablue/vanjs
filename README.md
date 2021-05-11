# vanjs

Vanilla Javascript toolkits for basic web opearations.

## Introduction

Inspired from [Vanilla Javascript library](http://vanilla-js.com/). The VanJS's goal is to implement some daily-used functions in pure javascript such as `notify`, `ready` ... and even JSX without React. It's not a library, think it like a toolkit, especially when making prototype.

## Usage

### Requirements

For now, you will need [Babel](https://babeljs.io/), [Bootstrap 5.x](https://getbootstrap.com/) and [Animate CSS 4.x](https://animate.style/) for user interface. The native components will be updated later

### Installation

Use in browser

```html
    <script src="https://unpkg.com/vanjs-toolkit"></script>
```

Use as Node module

```bash
yarn add vanjs-toolkit
#or
npm i vanjs-toolkit
```

then

```javascript

import { fadeIn, ready } from "vanjs-toolkit";

```

### JSX

Implement JSX in pure vanilla javscript. It's really convenient to use JSX without get the whole burden from React.

```html
  <script src="/dist/vanjs.js"></script>
  <script type="text/babel">
    /** @jsx createElement */
    /*** @jsxFrag createFragment */
    const { createElement, appendChild, createFragment } = vanjs;
    const UsingFragment = (
        <div>
            <h1>VanJS Toolkit</h1>
                <div>
                <>
                    <p>This is a paragraph in a fragment in JSX without React.</p>
                </>
                    <p>This is a list by using map.  </p>
                <ul>
                    {[1, 2, 3].map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
    document.querySelector("#root").appendChild(UsingFragment);
  </script>
```

### ready()

This is called to check if the DOM is loaded. Example:

```javascript
    const { ready } = vanjs;
    ready(() => {
        // The DOM is loaded
    })

```

### notify()

Create simple pop up notification message, with Bootstrap CSS. Example:

```javascript
    const { notify } = vanjs;
    notify("There is an error", "danger");
```

### djangoCall()

To be updated

### getCookie()

To be updated

### countWords()

To be updated
