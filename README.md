![Banner: Blathers from ACNH pointing a wing at a speech bubble titled blathersText, with the description "A Blathers quotes lorem ipsum (placeholder text) generator. Hoo!".](https://github.com/user-attachments/assets/285e008c-732d-462c-9ad5-e6848b05fd4d)

### 👋 Introduction:

`blathersText()` is a JavaScript plugin that generates quotes from Blathers by specifying a category (e.g. bugs, fish), or leaving it blank to retrieve a random quote. All quotes are from ACNH, which Blathers will say when the player donates a specimen and presses *"Tell me about this!"*.

### 💡 Purpose:
Just for fun! Blathers yaps a lot, so I figured it would be a perfect opportunity to spice up [lorem ipsum](https://www.tundra.nl/en/jargon/lorem-ipsum/).

### 🔍 Sources:
- list of bugs, fish and sea creatures: [u/ItsBrettly](https://reddit.com/r/AnimalCrossingNewHor/comments/1412kk6/)'s [spreadsheet](https://docs.google.com/spreadsheets/d/1HyeM_AmasxJkmvQ-Ur4gtlR-z8fT28GOIkgx4S9RTo8/edit?usp=sharing)
- specimen donation quotes: [animalcrossing.fandom.com](https://animalcrossing.fandom.com/) & [nookipedia.com](https://nookipedia.com/)
- list of complete fossils (groups): [Nookipedia API](https://api.nookipedia.com/doc)

<details>
<summary>(Expand for banner credits.)</summary>
<br>

- ACNH leaf pattern background: [u/Vach](https://www.reddit.com/r/ac_newhorizons/comments/fbizr9/i_updated_my_nook_inc_wallpaper_collection_link/)
- ACNH speech bubble PNG: [triviacrossing](https://triviacrossing.tumblr.com/post/646625973965570048/since-i-made-that-new-leaf-dialogue-box-a-while)
- fonts: FOT Rodin Bokutoh Pro, FOT Seurat Pro
</details>

---

### 🚀 Usage:

Add the following code under `<head>`:
```html
<script src="https://cdn.jsdelivr.net/gh/glenthemes/blathers-text/blathersText.js"></script>
<script>
blathersText();
</script>
```

The following are two options:
- for basic usage please read **Method 1 (HTML)**.
- if you want to further process the data in JavaScript, please read **Method 2 (JavaScript)**. 

---

#### 🍃 Method 1 (HTML):

You can choose to inject text into an HTML element (e.g. a `<p>`) by adding the `blathersText` attribute:
```html
<p class="optional-class" blathersText></p>
```
| Option name | Details |
| ------ | ------ |
| `blathersText=""` or simply `blathersText` | gets a random quote |
| `blathersText="bug"` | gets a random quote from the **bugs** category |
| `blathersText="fish"` | gets a random quote from the **fish** category |
| `blathersText="sea creature"` | gets a random quote from the **sea creatures** category |
| `blathersText="fossil"` | gets a random quote from the **fossils** category |
| e.g. `blathersText="pop-eyed goldfish"` | gets the quote of a particular specimen (*not* random) |

👁️ [**Method 1 (HTML) demo/preview**](https://jsfiddle.net/glenthemes/9gmr3v7x/)

---

#### 🍃 Method 2 (JavaScript):

Beneficial if you want to do something further with the quote.
```javascript
blathersText(OPTION_NAME).then(output => {
    console.log(output) // whatever you want to do with the quote
})
```
| Function call with option name | Details |
| ------ | ------ |
| `blathersText()` | gets a random quote |
| `blathersText("bug")` | gets a random quote from the **bugs** category |
| `blathersText("fish)` | gets a random quote from the **fish** category |
| `blathersText("sea creature")` | gets a random quote from the **sea creatures** category |
| `blathersText("fossil")` | gets a random quote from the **fossils** category |
| e.g. `blathersText("pop-eyed goldfish")` | gets the quote of a particular specimen (*not* random) |

👁️ [**Method 2 (HTML) demo/preview**](https://jsfiddle.net/glenthemes/su1hkxn4/)

---

### 🍎 Usage Notes:

- Option names (e.g. `bugs`, `fish`) are not case-sensitive (e.g. `T. Rex` is the same as `t. rex`)
- If you are retrieving the quote for a particular specimen (e.g. `pop-eyed goldfish`), remember to include any hyphens `-`, and make sure the syntax matches *exactly* to how it is in-game! If in doubt, search them up on [animalcrossing.fandom.com](animalcrossing.fandom.com/) or [nookipedia.com](https://nookipedia.com/)!
- Do not remove any quotation marks provided in the example(s).

---

### 💞 Thank you ⋆

If you have any questions or run into any issues, you can contact me via:

:love_letter: glenthemes.exe@gmail.com  
:computer: [discord.gg/RcMKnwz](https://discord.gg/RcMKnwz)
