# Project Sand: Gone Nuts

AltruisticNut's Notes
---------------------

Hey, this is a fork of Josh Don's "Project Sand" but I added a lot of random things, including:

+ Elements only accessible by interactions between two unique elements are now placeable.
+ Several elements I created myself, which are:
  + Corrupt
  + Firework
  + Bedrock
  + Snow
  + Cursed Fire
  + Humans
  + Nanites
  + Spice of Life
  + Reproduction
  + ... and more along the way!
+ Several UI changes and keybinds for some of the functions.
+ Possibly countless bugs from my own codetti or from updating it from a originally year-old version

IMPORTANT NOTE: This version can get a bit laggier than the original, due to the canvas size increase and my own code quality not up to snuff with Josh Don.

More information can be found in GNLIST.md. You can read the original README.md below.

Have fun and enjoy. Pull requests about suggestions, bugs, and optimizations appreciated.

-AltruisticNut

Original Overview
--------

In the early to mid 2000s, there were a series of Java applet based games based around a falling sand mechanic - collectively known as "Falling Sand Games". One of the most popular versions was referred to as the "Hell of Sand Falling Game". The website [http://androdome.com/Sand/](http://androdome.com/Sand/) provides a relatively detailed history of these applets.

Seeing as Java applets are deprecated, this means that there is no easy way to play these applets online. As such, the purpose of this project is to reproduce Hell of Sand as a modern HTML5 game, with a few extra touches. The HTML5 version is named "Project Sand".  It replicates the original game mechanics, while also making some tweaks, extensions, and improvements (for example, new elements, new interactions, etc.).

If you'd like to watch a short history of the development of the game, click [here](https://youtu.be/8J9ljXbWR8k).

See also [TIPS.md](TIPS.md) for some extra hints while playing the game.

Technical Details
-----------------

The game utilizes an HTML5 canvas for animation. Each pixel on the canvas represents an element, depending on its color. The core idea is that each pixel performs an action based on the color (element) of its surrounding pixels. For example, if pixel *p* at index *i* has a black BACKGROUND pixel below it (at index *i + width*), we can do `canvas[i] = BACKGROUND; canvas[i + width] = p;` in order to simulate gravity.

The core game loop needs to operate pixel-by-pixel on a canvas of approximately 250,000 pixels at a rate of 60-120 times per second. Getting this to run smoothly in JavaScript was challenging due to:
+ The confinement to a single thread of execution. Whereas the Java applet based versions can easily spawn multiple threads (ie. separate the rendering from the game logic), there is only a single main thread available for Javascript. Web workers were deemed not worthwhile, since the communication and synchronization overhead (workers cannot directly modify the DOM) was high.
+ Javascript itself. Care was taken to make the Javascript code as optimized as possible:
  + Use of const wherever possible. This also involves moving many variables to global scope.
  + Minimal use of dictionaries/classes. It is much faster (though not as well abstracted) to use arrays wherever possible instead.
  + Caching of computed values, especially when they are reused in a loop.
  + Replacing comparison operators with strict inequality operators wherever possible. This gives a *slight* performance improvement. e.g.
    + `for (var i = 0; i < MAX; i++)` BAD
    + `for (var i = 0; i !== MAX; i++)` GOOD
  + Bit operations to convert element hex codes to element indices (see elements.js).
  + Pre-computation of random values.
  + Explicit conversion to Uint32 Arrays.
  + Duplication of code branches in hot paths, instead of abstracting to a method.

As a result of the above optimizations, the game is able to play quite smoothly.

Contributing
------------
Pull requests are welcome for bug fixes, optimizations, or novel element ideas. Comments in the code describe how to add to and modify it.

If you want to trace the core game loop from the top of the call hierarchy, start with scripts/game.js:updateGame().
