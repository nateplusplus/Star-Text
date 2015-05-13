Star-Text
============

This experimental code snippet puts a glow and flicker effect on text. It was designed as part of a larger project to make symbols look like stars in space.

Text-shadows are applied to create a glow over any text with the class "star". A javascript interval is used as an infinite loop to animate a very subtle twinkle effect using the jquery 'fadeto' method.

Working Example: http://natehub.net/star-text/


### Installation

#### For the simplest installation:

1. Include star.css and functions.js in the same directory as your web page.

2. Insert the following code into your website's HTML head section:
  ```<link rel="stylesheet" type="text/css" href="star.css" />```  
  ```<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>```
  
3. Insert the following code at the very bottom of your HTML body:  
```<script src="functions.js"></script>```

That's it! It should be ready to use.

#### For more advanced installation:

You can copy the code directly into your own css and javascript documents. All you need is what's in star.css and functions.js.

### Usage

To make your text glow and flicker, just include ```class="star"``` on any HTML element.

Examples:  
```<div class="star">This text will glow and flicker</div>```
```<p class="star">This text will also glow and flicker</p>```
```<li class="star">Add to any parent element with text inside</li>```

To modify colors, take a look at the comments in the star.css file.

The flickering effect has been designed as a jquery plugin, so you can also apply this effect to any jquery object, by simply using the ```.starTwinkle()``` method. Just make sure it's within the setInterval function.


### Coming Soon

In future updates, there's still work to be done in cross-browser compatibility. It hasn't been tested on android or windows devices.