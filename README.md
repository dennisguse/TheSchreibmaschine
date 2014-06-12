(c) Dennis Guse, 2014

TheSchreibmaschine.

Offers nothing else than writing.
It is meant to be for paragraph writting, so just write your current paragraph and then press enter.
Your current paragraph (the one with the cursor) is highlighted over the rest of your text.

The current paragraph will stay centered.

TheSchreibmaschine does not save or upload anything.
If you close the tab/browser your text is gone!
You can either use the hidden features or simply save the TheSchreibmaschine-Webpage on your Computer and open this later again.

-----
Features:
* Your text only.
* Your current paragraph remains centered.
* There is no text selection.
* There is no CTRL-Z.
* You can do everything using a keyboard.
* Thesaurus: (so far GERMAN only) offline data from http://openthesaurus.de

-----
Hidden Features:
* Allows drag and drop for loading and saving.
* Download of current text is triggered on double click.
* Use in fullscreen mode (press F11).

* CTRL-DEL and CTRL-BACKSPACE
* CTRL-V (pasting from clipboard) is working in Chrome and IE.
* CTRL-SPACE activates the thesaurus for the word around the cursor; no auto-correction or completion available.

* ALT-S: Save the document (currently done via download).
* ALT-N: Open a new window of TheSchreibmaschine.

* ALT-H: Display this document as popup.

* ALT-A: toggle text alignment (left vs. center).
* ALT-W: toggle page width (40% or 80% of full window).
* ALT-C: toggle background color (white vs. whitesmoke).
* ALT-V: toggle typewriter volume (0.0 vs. 1.0).
* Use your browser's support for zooming in/out to change the font size.

-----
Known Limitations:
* At the moment ONLY tested in Google Chrome and Epiphany.
* Does not work in Firefox (at least not on Ubuntu 13.10), because textNode.splitText() does not update the length correctly.


-----
Code-Repository
https://github.com/dennisguse/TheSchreibmaschine

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
* document.onclick
* document.ondbclick

All animations and visual things are done in CSS:
* cursor
* currentParagraph
* editor
* page

Uses JQuery. Thanks.