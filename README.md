# Audible library cover downloader (script) <!-- omit in toc -->

- Downloads all covers in your Audible library
- Just in case you need it, it also generates a screensaver web page

![](https://raw.githubusercontent.com/joonaspaakko/audible-library-cover-downloader/main/screensaver-preview.jpg)

## A word of warning <!-- omit in toc -->

Use at your own risk. I have good intentions, but you shouldn't go copy pasting scripts into your browser's console all willy nilly. Just as a heads up, Firefox will give you this warning message when you try to paste things into the console. You should probably heed the warning:

> Firefox warning message in the console → Scam Warning: Take care when pasting things you don’t understand. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below (no need to press enter) to allow pasting.

 &emsp; <!-- omit in toc -->
----
 &emsp; <!-- omit in toc -->

## Usage <!-- omit in toc -->

> You don't need to know how to code or read any code to use this script. It would be preferrable, as stated above, but the only thing you need to know is how to copy & paste.

1. **Copy the script** `(Ctrl+C)` into your clipboard from here: [audible-library-cover-downloader.js](https://raw.githubusercontent.com/joonaspaakko/audible-library-cover-downloader/main/audible-library-cover-downloader.js)
2. **Go to your Audible library page.**
3. **Open your browser's developer tools console.** 
    - The easy way is to right click anywhere on a website, choose `Inspect element` from the context menu and then click the `Console` tab.
    - Or on Mac: `Cmd+Alt+I` and on Windows `Ctrl+Alt+I` (might not work in all browsers)
4. **Paste the script** `(Ctrl+V)` into the console and press enter to run it.
    - When the script is done, it'll download: `audible-library-covers.zip`.
    - If you you only want the scover files, unpack the zip and check the `covers` folder.
    - The screensaver web page doesn't really have any fallbacks if you don't have plenty of covers to fill the screen and it might not work as intended without modifying the settings. More on that below. 

 &emsp; <!-- omit in toc -->
----
 &emsp; <!-- omit in toc -->


- [Display the covers using a built-in screensaver or slideshow (computer, mobile device, digital photo frame)](#display-the-covers-using-a-built-in-screensaver-or-slideshow-computer-mobile-device-digital-photo-frame)
- [Screensaver web page](#screensaver-web-page)
  - [Screensaver web page - Usage (Mac)](#screensaver-web-page---usage-mac)
  - [Screensaver web page - Usage (Windows)](#screensaver-web-page---usage-windows)
  - [Screensaver web page - Usage (Mobile: IOS, Android)](#screensaver-web-page---usage-mobile-ios-android)
  - [Customizing with URL params (changing grid size and other things)](#customizing-with-url-params-changing-grid-size-and-other-things)
  - [Uploading your cover screensaver to Github as a website](#uploading-your-cover-screensaver-to-github-as-a-website)


 &emsp; <!-- omit in toc -->
----
 &emsp; <!-- omit in toc -->

## Display the covers using a built-in screensaver or slideshow (computer, mobile device, digital photo frame)

All devices do it a bit differently, but the gist of it is that if you're going to be using any native screensaver or a slideshow, you just unpack the `.zip` file and you'll find the covers in a folder called `covers`. You can ignore all of the other files in there.

> I'm not a 100% sure but I think most screensavers and slideshows tend to be built for photos where it doesn't matter much if something gets cropped off, however these covers in my opinion looked kinda silly when that happens. That's why I added the `Screensaver web page` in the `.zip` file, as a sort of a fallback, just in case no screensaver does a good job displaying them. More on that in the next heading.

- **On a desktop computer** you would just set that `covers` folder as the source folder for the screensaver and that's it.
  - You can also use the `Screensaver web page` on a desktop computer. More on that in the next heading.

- **On a mobile device** (preferrably an old otherwise unusable tablet) you probably first have to transfer over the files with a cable and then select an album of of images you've created from the covers as the source for a slideshow. I'm not super sure if Android has one built in, but there is one in the IOS Photos app. In either case, there may be better 3rd party apps.
    - You can also use the `Screensaver web page` on a mobile device, but you probably have to upload it as a website. to make it work.  It may be possible on Android to use local files. More on that in the next heading.

- **With a digital photo frame** you likely have to put the covers in an SD-card and let the photo frame do its thing.

 &emsp; <!-- omit in toc -->
----
 &emsp; <!-- omit in toc -->

## Screensaver web page

Originally this was just supposed to download the covers and nothing else, but as I was testing different screensaver options on Mac I came to the realization that they are all made to show photos where it usually doesn't matter if something is cropped off, and that doesn't really look so great with these cover images, so I decided to add this little `screensaver web page` in every `.zip` file the script outputs as a fallback. To be clear, even though technically it is a _web page_, it's not necessary to upload it online. Not on a desktop computer anyways. That said, it might be hard or impossible to do it on a mobile device without uploading it online.

> I'm pretty sure no digital photo frame would support this, but I've never played around with one, so I have no idea what kind functionality they have. It would have to support `.html` files or show a website, which actually sounds like could be possible at least if there are some digital signate oriented screens like that, but you'd still likely have to upload the files online for that to work.

[Example page using covers from my library](https://joonaspaakko.github.io/audible-library-cover-downloader), that I've uploaded to github. It's only necessary to upload it online if you want to show it on a mobile device. More on that below under mobile usage.

- It may take a hot minute to load for the first time, because all my covers take up about `25MB` (462 covers).
- When you download your covers and unpack the `.zip` file, all the extra files in the root are related to the `screensaver web page`. You can just open the `index.html` in your browser to view it.
- The initial covers are shuffled on page load. So if you keep refreshing the page, the covers will be different every time.
- If you want to change the amount of covers on the screen, you can do this by editing a tiny bit of code at the bottom of the `index.html` file. More on that below.

> You can also try any built in screensavers or slideshow features on various platforms by just unpacking the zip file and pointing the image source folder to the `covers` folder. 

 &emsp; <!-- omit in toc -->

### Screensaver web page - Usage (Mac)

On Mac you can use [webviewscreensaver: Mac OS X Screen Saver powered by a Web View](https://github.com/liquidx/webviewscreensaver) to show just about any website, but in this case you don't have to upload it online. You can also paste in the full path to the local folder. In my case I unpacked the `.zip` file and set the screensaver `URL` as `/Users/joonaspaakko/Documents/audible-library-covers/index.html`. 

Note: double clicking `URL` and/or `Seconds` fields to edit them might not work. Try pressing `Enter` and/or `Tab`. Then just close it.


 &emsp; <!-- omit in toc -->

### Screensaver web page - Usage (Windows)

On Windows I can give you two options to use the included `screensaver web page` as a screensaver locally.

I haven't tried either of these, but given how robust Wallpaper Engine is and how clear the documentation is about it, I have no doubt it can do it with no issues.

- [Wallpaper Engine](https://www.wallpaperengine.io/) (~$4) - Can also be bought through steam. 
    - The [super short video here](https://docs.wallpaperengine.io/en/web/first/gettingstarted.html#creating-a-web-wallpaper) tells you everything you should need to know.
- [Web Page Screensaver](https://github.com/cwc/web-page-screensaver) (free)
    - You can download it from the [releases page](https://github.com/cwc/web-page-screensaver/releases).
    - It's not been worked on for years now, so who knows if it works, but I would think it's simple enough of a thing that it probably does. There are bunch of forks of it, so there is a chance there is a more up to date version maintained by someone else.
    - I don't know if you can set local `.html` files as a screensaver in it, but my hunch says yes.
    
 &emsp; <!-- omit in toc -->

### Screensaver web page - Usage (Mobile: IOS, Android)

If you have an old tablet that's not really in use anymore or maybe even a big phone, you can also use the `screensaver web page` on that, but you likely have to upload it online. I think you might be able to make due with locally saved files on Android, but on IOS you definitely have to upload it. 

1. You probably will want to disable screen auto-lock or at least make sure it doesn't go to sleep in the next 30 seconds or otherwise there's no point in it.
2. Open the website in fullscreen
    - You should be able to fullscreen on both IOS (Safari) and Android (Chrome) by saving the icon in your home screen through the corner menu or the share button. 
    - Then just click the icon and it knows to open as a sort of stand-alone fullscreen browser window
    - If this doesn't work, some 3rd party browsers have a fullscreen more built in, which would do just as well.

> Note: it may take a while for the page to load, if you have a huge library.

 &emsp; <!-- omit in toc -->

### Customizing with URL params (changing grid size and other things)

URL parameters let you easily change some aspects of the grid on the fly just by editing the `URL` or a local `path`. 

Url params (...and some example values):
```js
cols=5
overlay=true
overlayColor=#991144
overlayOpacity=.7
filter=grayscale(100)blur(2px) // https://developer.mozilla.org/en-US/docs/Web/CSS/filter 
verticalOffset=40
```
> You always separate URL params from the rest of the URL (or a path) by a question mark `?`. Then each URL param is delimited using the ampersand `&`.

For example, adding `?cols=15&filter=grayscale(80)` at the end of the url makes the grid have 15 covers side by side and tint it 80% towards grayscale: [https://joonaspaakko.github.io/audible-library-cover-downloader/?cols=15&filter=grayscale(80)](https://joonaspaakko.github.io/audible-library-cover-downloader/?cols=15&filter=grayscale(80))


 &emsp; <!-- omit in toc -->
----
 &emsp; <!-- omit in toc -->

### Uploading your cover screensaver to Github as a website

Useful if you want to show it in a tablet that's connected to the internet. Otherwise you'd probably have to transfer the covers via cable or and SD-card and use the built in screensaver or slideshow feature, unless you can figure out a way to show a website from local files.

<details><summary>Read more...</summary>
 &emsp; <!-- omit in toc -->

This is a fairly complex process if you've never used Github/Git to make repositories, but it is a free way to get your site on the internets, so there's that. The complexity comes mostly from how Git/Github works and what it's mainly for. **You don't need to touch any code**, it's just a matter of learning how it works and clicking your way through the process.

**Be aware** that Github Pages only work on public repositories on the free account. This means that the repository/the files are more freely available than on a more traditional hosting platform. For example the repository for my audible library website I linked to above is accessible from this address [https://github.com/joonaspaakko/audible-library-cover-downloader/tree/web-page](https://github.com/joonaspaakko/audible-library-cover-downloader/tree/web-page). Anyone can download this repository and use it as they please. In this instance it shouldn't be a problem because the files don't contain any personal data. Just the covers and some code to create the screensaver web page.

> If you know how to make a regular repository in Github but haven’t used GitHub Pages before, jump straight to step 3.

It might look like there’s just too many steps, but aside from making the GitHub account, the entire process is like 10 minutes tops if you know what you’re doing. It may take a bit longer when you’re following the instructions step by step. Updating the website later is going to take like 2 minutes tops.

1. You need a (free) [github account ](https://github.com/join).
2. For things to not get totally out of hand in terms of complexity, you will definitely want to use the [Github Desktop client](https://desktop.github.com/).
	1. In Github Desktop the first thing you do is make the repository `File > New repository`, which you can think of as a project folder in your account. The only thing you need to add when creating a new repository is the name for the project, for example `my-audible-library-covers`.
		- This name, or rather the kebab cased version it shows below is going to be the url path, which is going to be along the lines of `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`. In my case the url would end up being `https://joonaspaakko.github.io/my-audible-library-covers`.
	2. The newly created project should immediately get selected and you should see a button that opens the `respository` (project folder) in your computer.
		- The button will likely say `Show in Finder` or `Show in Explorer`
	3. Unpack the zip file you got from script in the project folder.
		- Remove the zip file if it’s in the folder.
	4. Now when you open Github Desktop, it should show you that new files were added to the project.
	5. In the bottom left there's `Summary`, `Description`, and `Commit to master`. This is where you basically save the changes in your project.
		1. You need to always give summary before you can commit (save), but in this case you don't have to be descriptive at all. You can make summary a `-` for all your commits if you want.
			- In regular projects `Summary` and `Description` are meant to inform everyone involved what was changed. Since you are just updating a website, it doesn’t matter much.
		2. When you click `Commit to master` the changes are now saved locally in your computer…
		3. Upload the files to Github with the `Push origin` button.
3. So now the Github project repository should be online and visible in your account through the Github website, but you still need to tell Github that you want this project to be a website.
	- Super short instructions: 
		1. Go to the project repository page online and click `Settings`. 
			You can easily locate it through the GitHub website from your repositories, but just FYI, it’s `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME`. You can only see settings if you’re logged in.
		2. In the settings you can find a section called `GitHub Pages`. 
		3. Choose `Master branch` in the `Source` dropdown and when that’s done it should tell you what the website address is, which should be along the lines of `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME`.
		- If you’re having hard time understanding the instructions above, you can find more comprehensive instructions [here](https://pages.github.com/). To get the right instructions just select `Project site` and `Start from scratch`. You can skip to step 4 in the Github article.
4. When you've got all this done and the project repository is set as a website, you can share the address with anyone. And to be clear, they don't need a Github account to view the web page. **It may take a few minutes for the page to be online**, especially if you have tons of books.

 &emsp; <!-- omit in toc -->

#### What if I want to upload the web page again? <!-- omit in toc -->

1. Replace the old files in your Github repository folder on your computer:
	- You can find the folder easily through the Github Desktop application.
	- Remove all files in the project folder on your computer.
	- Unpack the `.zip` file contents there.
		- Remove the zip file if it’s in the folder.
5. In the Github Desktop client open the audible library project, if it’s not already open. You can open projects from the dropdown in the top left.
6. Commit changes (on the left side of the window):
	  - Add summary text. Just like before, it can be just a dash `-` in this case.
		- Click the `Commit to master` button
8. Click the `Push origin` button (right side)
9. And the website should be online in a couple minutes.

</details>

