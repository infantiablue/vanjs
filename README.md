# vanjs

Vanilla Javascript toolkits for basic web opearations.

## Introduction

Implement some daily-used functions in vanilla javascript such as `notify`, `ready` ... and even JSX without React.

## Usage

### Requirements

For now, you will need [Bootstrap](https://getbootstrap.com/) and [Animate CSS](https://animate.style/) for user interface. The native components will be updated later

### JSX

Implement JSX in pure vanilla javscript, yet you still need [Babel](https://babeljs.io/)
Example:

```html
  <script src="/dist/vanjs.js"></script>
  <script type="text/babel">
    /** @jsx createElement */
    /*** @jsxFrag createFragment */
    const createElement = vanjs.createElement;
    const appendChild = vanjs.appendChild;
    const createFragment = vanjs.createFragment;
    const UsingFragment = (
        <div>
            <h1>VanJS Toolkit</h1>
                <div>
                    <p>This is a paragraph in a fragment in JSX without React</p>
                <>
                    <p>This is a list by using map.</p>
                </>
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

Another rational implementation will be considered.

### ready()

This is called to check if the DOM is loaded. Example:

```javascript

    vanjs.ready(() => {
        // The DOM is loaded
    })

```

### notify()

Create simple pop up notification message, with Bootstrap CSS. Example:

```javascript
    notify("There is an error", "danger");
```

### djangoCall()

To be updated

### getCookie()

To be updated

### countWords()

To be updated
