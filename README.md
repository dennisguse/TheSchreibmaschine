(c) Dennis Guse, 2014

TheSchreibmaschine.

Offers nothing else than writing and paragraph highlightning.
It is ment to be for paragraph writting, so just write your current paragraph and then press enter.
The cursor will stay centered.

TheSchreibmaschine does not save or upload anything.
If you close the tab/browser your text is gone!
You can either use the hidden features or simply save the TheSchreibmaschine-Webpage on your Computer and open this later again.

-----
Features:
* Your text only.
* Cursor remains centered.
* There is no text selection.
* There is no CTRL-Z.
* There is only keyboard control.

-----
Hidden Features:
* Allows drag and drop for loading and saving.
* Download of current text is triggered on double click.
* Use in fullscreen mode (press F11).

* ALT-A: toggle text alignment (left vs. center).
* ALT-W: toggle page width (40% or 80% of full window).
* ALT-C: toggle background color (white vs. whitesmoke).
* Use your browser's support for zooming in/out to change the font size.

-----
Limitations:
* At the moment ONLY tested in Google Chrome and Epiphany.
* Does not work in Firefox (at least not on Ubuntu 13.10), because textNode.splitText() does not update the length correctly.

-----
How it works:

The main code looks like that:

    <div id="editor" ondrop="loadDrop(event)" ondragover="loadAllowDrop(event)">
        <div id="page">
            <div id="currentParagraph">Hello World!<div id="cursor">&nbsp;</div></div>
        </div>
    </div>

The HTML code is the underlying data model and updated accordingly.
The paragraph containing the cursor is tagged as currentParagraph and centered (as well as highlighted).

The following functions handle writing:
* write()
* moveCursorXXX()
* backspace() and del()
* newParagraph()

These functions handle paragraph:
* setCurrentParagraph()
* centerCurrentParagraph()

The following events are captured:
* window.onresize
* document.onkeydown
* document.onkeypress

All animations and visual things are done in CSS:
* cursor
* currentParagph
* editor 
* page


Uses JQuery. Thanks.
-----
TODO:
* CTRL-Z?
* Don't use node.normalize().
