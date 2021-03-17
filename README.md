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


- [Screensaver web page](#screensaver-web-page)
  - [Screensaver Usage (Mac)](#screensaver-usage-mac)
  - [Screensaver Usage (Mobile)](#screensaver-usage-mobile)
  - [Changing grid settings](#changing-grid-settings)
  - [Uploading your cover screensaver to Github as a website](#uploading-your-cover-screensaver-to-github-as-a-website)


&emsp; <!-- omit in toc -->
----
&emsp; <!-- omit in toc -->


## Screensaver web page

Originally this was just supposed to download the covers and nothing else, but as I was testing different screensaver options on Mac, I came to the realization that they are all made to show photos where it usually doesn't matter if something is cropped off, and that doesn't really look so great with these cover images, so I decided to add this little screensaver web page scaffolding around it. You can completely ignore it and go straight for the cover files if you want.

Example using covers from my library: [https://joonaspaakko.github.io/audible-library-cover-downloader](https://joonaspaakko.github.io/audible-library-cover-downloader).

- It may take a hot minute to load for the first time, because all my covers take up about `25MB` (462 covers).
- The visible covers will over time get randomly switched with another cover
- The initial covers are shuffled on page load. So if you keep refreshing the page, the covers will be different every time.
- If you want to change the amount of covers on the screen, you can do this by editing a tiny bit of code at the bottom of the `index.html` file. More on that below.

> You can also try any built in screensavers or slideshow features on various platforms by just unpacking the zip file and pointing the image source folder to the `covers` folder. 

&emsp; <!-- omit in toc -->

### Screensaver Usage (Mac)

On Mac you can use [webviewscreensaver: Mac OS X Screen Saver powered by a Web View](https://github.com/liquidx/webviewscreensaver) to show just about any website, but you can also paste in the full path to the local folder. In my case I set the screensaver `URL` to `/Users/joonaspaakko/Documents/audible-library-covers/index.html`. Note: double clicking `URL` and/or `Seconds` fields to edit them might not work. Try pressing `Enter` and/or `Tab`. Then just close it.

> Note: it may take a while for the page to load when opening for the first time, if you have a huge library.

&emsp; <!-- omit in toc -->

### Screensaver Usage (Mobile)

If you have an old tablet that's not really in use anymore... or maybe even a big phone, you can disable screen auto lock and open the website in fullscreen. You should be able to fullscreen it by saving the icon in your home screen and just opening it. If this doesn't work, some browsers have a fullscreen more built in.

> Note: it may take a while for the page to load when opening for the first time, if you have a huge library.

&emsp; <!-- omit in toc -->

### Changing grid settings

If you want to change the amount of covers on the screen, you can do this by editing a tiny bit of code at the bottom of the `index.html` file.

Here you can change how many covers you want to fit inside the screen horizontally. For example `column: 1` would be 1 cover and `column: 2` would be 2 coveres side by side. How many rows of covers you end up with depends on this `column` number and also the screen height.

> If you don't want to set fallback column numbers for many different screen sizes, you can just set the one size you care about or even remove `w1550, w1300, w950, w600` and just set that one `columns` property.

```js
$('#ri-grid').gridrotator({
    columns: 8,     // screen width over 1550px = 8 covers side by side
    w1550: {
        columns: 6, // screen width less than 1550px = 6 covers side by side
    },
    w1300: {
        columns: 5, // screen width less than 1300px = 5 covers side by side
    },
    w950: {
        columns: 3, // screen width less than 950px = 4 covers side by side
    },
    w600: {
        columns: 2, // screen width less than 600px = 2 covers side by side
    },
    interval: 3000,
    // animation type
    // showHide || fadeInOut || slideLeft || 
    // slideRight || slideTop || slideBottom || 
    // rotateLeft || rotateRight || rotateTop || 
    // rotateBottom || scale || rotate3d || 
    // rotateLeftScale || rotateRightScale || 
    // rotateTopScale || rotateBottomScale || random
    animType: 'random',
    // animation speed
    animSpeed: 900,
    // step: number of items that are replaced at the same time
    // random || [some number]
    // note: for performance issues, the number should not be > options.maxStep
    step   : 'random',
    maxStep: 3,
});
```

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

