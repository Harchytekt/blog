# Blog

## This is a <abbr title="Proof Of Concept">POC</abbr>

### Drafts

First, I had a simple idea of a blog with a sidebar and settings:  
![First draft](Previews/draft_1.png "First draft (light, desktop)")

Then, I went for a simpler design: no more sidebar.  
I also wanted to have previews of links before clicking on them:  
![Second draft](Previews/draft_2.png "Second draft (light, desktop)")

### Design

Once the design chosen, it was time to make it real.

Here’s the welcome page:  
![Welcome page](Previews/base.png "Welcome page (desktop)")

When hovering on an internal link (_green_) or an external link (_orange_), there is a preview in a “pop-up”:  
![Preview link](Previews/preview.png "Preview link (desktop)")

The previews can be disabled, the theme and appearance can be manually changed:  
![Settings](Previews/settings.png "Settings (desktop)")

It would also be possible to search for a post (_the search and settings are available through keyboard shortcuts_):  
![Search](Previews/search.png "Search (desktop)")

## How to compile the Sass to CSS?

First, install Sass on your computer (`brew install sass/sass/sass` with [Homebrew](https://brew.sh)).

Second, go to the parent folder of the `css` folder.

Third, execute this command: `sass --style=compressed -c css/sassSource:css`.
