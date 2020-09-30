# fancy-cursor

I clearly remember noticing two websites that have fancy pointers. One of them
is - https://radhika.dev/ and the other one is the Google Slides presentation
mode - where one can choose `Pointer` feature to get a fancy red circle pointer
which when moved has a nice effect about it's trail / path of movement.

In https://radhika.dev/ , there's only a green trail I think, I just noticed.
This is as of this writing. :P

Okay, so I have been doing little research on how to do this - I guess I could
have checked the code on Google Slides / https://radhika.dev/ , anyways, not
sure how easy or hard that is, but I just simply searched about this and it
quite some moments for me to realize that - at the basic level, it's not that
fancy

I'm sure you all must have heard about the `cursor` CSS property. So, that's
surely in use here - I mean, nothing surprising, I guess. :P

https://www.tutorialrepublic.com/css-tutorial/css-cursors.php

https://developer.mozilla.org/en-US/docs/Web/CSS/cursor

Different values that can be used as URL for the custom cursor

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property

And I was thinking if we can embed SVG code or if we have to create a svg file
and then refer to it. I keep forgetting that - almost anywhere `url` is present,
we can do some magic with some embedded data, including svg. I have noticed this
before in background images too :)

This is also a nice article here with the code for embedded svg - but it's not
exactly right I think, but I tried to fix it and it worked :)

https://css-tricks.com/using-css-cursors/

For Google slides, there's a nice little red circle. I found how to create such
a circle with SVG on w3schools -

https://www.w3schools.com/graphics/svg_circle.asp

I really didn't learn much about it, I just played around with code and kind of
understood what it does. Gotta dig in soon

```html
<svg height="10" width="10">
  <circle cx="5" cy="5" r="5" fill="red" />
</svg>
```

I used this online thing to URL encode the SVG - https://yoksel.github.io/url-encoder/

With URL encoded SVG, I can do this

```css
cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='10' width='10'%3E%3Ccircle cx='5' cy='5' r='5' fill='red' /%3E%3C/svg%3E");
```

Now I have a red circle in my website. But weirdly, it feels like the boundary
of the circle is rough and not smooth. Or maybe it's just my eyes. Anyways.
After this, I need to find how to do trails. I finally started checking out what
Google Slides does ;) Weirdly, they hide the cursor when the pointer feature
is chosen o.O

```css
.cursor-none {
  cursor: none;
}
```

I realized that they probably use some JavaScript to create a circle image and
to also show the trail of the cursor. I also removed the above style and noticed
my default cursor along with the circle pointer. So yeah, it's not based on
cursor CSS I think.

I noticed this Js code for trails

http://javascriptkit.com/script/script2/cursortrail.shtml

In this search I also find a different kind of cursor trail - where the
background responds to the cursor's trail

https://medium.com/@dailyfire/cursor-trails-3-simple-css-tricks-to-add-to-any-website-part-1-64750798583c
https://codepen.io/mystor/pen/Bkdcm

Even in https://radhika.dev/ , I don't see any cursor CSS. I guess Js is the
way to go! Also, it kind of makes sense in the way that - https://radhika.dev/
shows the default cursor and also shows a trail of the cursor. I should have
understood there's something else going on too :P

Apart from this

http://javascriptkit.com/script/script2/cursortrail.shtml

Apparently there are more

http://javascriptkit.com/script/cutindex18.shtml

One more script over here
https://mistonline.in/wp/add-a-mouse-cursor-or-pointer-trailing-text-using-javascript/

But some of these are pretty old - they have code for some pretty old browsers o.O

So I copy pasted some of this code and it kind of works to show a trail of the
cursor! ;) Now I need to customize it and also simplify it a bit as it looks a
bit complex now with multiple conditions for stuff

So the whole thing is like some snake game where the snake moves around. I
created such a game long ago. It was fun. What I did was something similar -
instead of thinking too much about how to make the snake's movement seem all
smooth and with a proper trail - what I did was let body parts of the snake
work in a nice manner - where the circular body parts of the snake are in a line
to form the snake's body, and if the head moves, then the next body part moves
to the head's previous position, and the next body part follows it's upper body
part's previous position and so on.

In this case, the movement is based on the `onmousemove` event - which I need to
completely explore! :)

https://duckduckgo.com/?t=ffab&q=onmousemove&ia=web
https://www.w3schools.com/jsref/event_onmousemove.asp
https://www.w3schools.com/jsref/obj_mouseevent.asp
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousemove

https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
https://w3c.github.io/uievents/#event-type-mousemove

While trying things out - I noticed that the red circle is just behind the
center of the mouse. The mouse's center and circle's center matched. But I
wanted the mouse's pointy pointer to match the circle's center and this is also
what I noticed in Google slides when I turned on the cursor.

After some tweaking I have made it the circle appear on top of the mouse's
pointer.

Now the main thing left out is the way the trail is shown. Currently, I'm able
to see trails - but they are not continuous. In Google slides, it was continuous
and smooth. Even in https://radhika.dev .

I even tried to increase the number of trails but that was just too much. I
think the main thing to do is - no matter where the mouse moves, have a smooth
trail over the movement and not some discrete trail. I'm going to work on how
to do it :) For which I'm going to experiment and understand how the mouse
movement is captured when the mouse moves too fast, too slow. I'll also find
how to exactly find the mouse's pointy pointer and draw a circle with that as
the center with ease. Currently I just put some values and tweaked and made it
work. It shows up good on Firefox and Chrome though. Hmm. I might also change
the way the animation / trail is done - maybe not use `img` tags like how it's
done currently. Let's see. I might use something like drawing on canvas maybe.

The example here is really nice!
https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event

I just want to do a drawing, but a drawing which will slowly disappear - a
stroke that will slowly disappear. Hmm. Let's see if I can get that done. Also,
I don't need to click to make this drawing, just move the mouse around.
