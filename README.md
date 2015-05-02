Symbol Stars
============

This experimental code snippet puts a glow and flicker effect on text. It was designed as part of a larger project to make symbols look like stars in space.

Multiple text-shadows are applied to create a glow over any text with the class "star". A javascript interval is used as an infinite loop to animate a very subtle twinkle effect using the jquery 'fadeto' method.


### Installation

1. Include style.css and functions.js in the same directory as your web page.  
**NOTE**: If you already have your own CSS style sheet, just copy the ```.star``` code block, that's the only styling you need.

2. Insert the following code into your website's HTML head section:  
  ```<link rel="stylesheet" type="text/css" href="style.css" />```
  
3. Insert the following code at the very bottom of your HTML body:  
```<script src="functions.js"></script>```

3. You'll also need to include jquery for this to work properly. More info on how to do this via Google Hosted Libraries here: https://developers.google.com/speed/libraries/

That's it! It should be ready to use.

### Usage

To make your text glow and flicker, just include ```class="star"``` on any HTML element.

Examples:  
```<div class="star">This text will glow and flicker</div>```
```<p class="star">This text will also glow and flicker</p>```
```<li class="star">Add to any parent element with text inside</li>```

To change glow color: In style.css, edit the 4th text-shadow layer labeled ```/* Halo Color */```


### Coming Soon

In future updates, there's still work to be done in cross-browser compatibility. It hasn't been tested on android or windows devices. I also would like to work out a solution that doesn't require jquery in order to keep it as self-sufficient as possible.