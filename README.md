# Audible library cover downloader (script)

- Downloads all covers in your Audible library
- Just in case you need it, it also generates a screensaver style web page

![](https://raw.githubusercontent.com/joonaspaakko/audible-library-cover-downloader/main/screensaver-preview.jpg)

## A word of warning

Use at your own risk. I have good intentions, but you shouldn't go copy pasting scripts into your browser's console all willy nilly. Just as a heads up, Firefox will give you this warning message when you try to paste things into the console. You should probably heed the warning:

> Firefox warning message in the console → Scam Warning: Take care when pasting things you don’t understand. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below (no need to press enter) to allow pasting.

## Usage

> You don't need to know how to code or read any code to use this script. It would be preferrable, as stated above, but the only thing you need to know is how to copy & paste.

1. **Copy the script** `(Ctrl+C)` into your clipboard from here: [audible-library-cover-downloader.js](https://raw.githubusercontent.com/joonaspaakko/audible-library-cover-downloader/main/audible-library-cover-downloader.js)
2. **Go to your Audible library page.**
3. **Open your browser's developer tools console.** 
    - The easy way is to right click anywhere on a website, choose `Inspect element` from the context menu and then click the `Console` tab.
    - Or on Mac: `Cmd+Alt+I` and on Windows `Ctrl+Alt+I` (might not work in all browsers)
4. **Paste the script** `(Ctrl+V)` into the console and press enter to run it.
    - When the script is done, it'll download: `audible-library-covers.zip`.
    - If you you only want the scover files, unpack the zip and check the `covers` folder.
    - The web page doesn't really have any fallbacks if you don't have plenty of covers to fill the screen and might not work as intended... Though you may be able to change its settings in the `index.html` file to fit your needs better.

## Screensaver web page

Example using covers from my library: https://joonaspaakko.github.io/audible-library-cover-downloader/

- It may take a hot minute to load for the first time, because all my covers take up about `25MB` (462 covers).
- The covers will over time get randomly switched with another cover
- If you're not super scared of looking at code, you may be able to change the settings to something more fitting for your usecase. It's all in the `index.hhtml` file.

I wasn't planning on making this, but as I was testing different screensaver options on Mac, I came to the realization that they are all made to show photos, where it doesn't usually matter if something is cropped off, and that doesn't really look so great with these cover images.

> You can also try any built in screensavers or slideshow features on various platforms by just unpacking the zip file and pointing the image source folder to the `covers` folder. 

### Screensaver Usage (Mac)

On Mac you can use [webviewscreensaver: Mac OS X Screen Saver powered by a Web View](https://github.com/liquidx/webviewscreensaver) to show just about any website, but you can also paste in the full path to the local folder. In my case I set the screensaver `URL` to `/Users/joonaspaakko/Documents/audible-library-covers/index.html`. Note: double clicking `URL` and/or `Seconds` fields to edit them might not work. Try pressing `Enter` and/or `Tab`. Then just close it.

> Note: it may take a while for the page to load when opening for the first time, if you have a huge library.

### Screensaver Usage (Mobile)

If you have an old tablet that's not really in use anymore... or maybe even a big phone, you can disable screen auto lock and open the website in fullscreen. You should be able to fullscreen it by saving the icon in your home screen and just opening it. If this doesn't work, some browsers have a fullscreen more built in.

> Note: it may take a while for the page to load when opening for the first time, if you have a huge library.