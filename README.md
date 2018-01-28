Scenarios of using [CPExternalizer](https://github.com/perfectstrong/CPExternalizer) via its [CLI](https://github.com/perfectstrong/CPExternalizer-CLI) or its [GUI](https://github.com/perfectstrong/CPExternalizer-GUI), in order to minimize the size of grouping Captivate HTML5 modules.

Use cases:
1. [Complete factorisation](#complete-factorisation).
1. [Slim down a specific initiator](#slim-down-a-specific-initiator).
1. [Discover unexpected components](#discover-unexpected-components).

## Motivation & Solution in general

Adobe Captivate supports exporting modules to HTML5 format, included a lot of resources identical among modules, which lead to an excessive amount memory if we have to put plenty of them together.

That's why came up the idea of clustering those modules into one _"mini theater"_ having one projector and multiple catridges loaded should the needs arises.

### Cluster

The structure of cluster will resemble this:
````
cluster/
+--index.html
+--unitLoader.html
+--assets/
+--module/
````

* **unitLoader**: the projector which loads and displays the chosen module.
* **assets**: containing all reusable resources:
  * css
  * htmlimages
  * js
  * playbar
  * toc
  * TOC_icons
* **module**: catridge box. Each module should be a separated folder slimmed down by CPExternalizer. For example:
````
+--module/
   +--module1/
   +--module2/
````

### CPM.js - initiator & components
The main file of module. Normally, it will be at `assets/js/CPM.js`. It should be composed of 2 parts:
* **CPProjInit**: _initiator_, containing all detailed descriptions of objects (text, images, sound, etc.) shown in project. It is private per project. That's why we will extract it into a standalone file.
* **Components**: _animator_, which will decorate the page and manage all internal "movements" of project. This part can be duplicated between them, thus we can factorize.

Besides, two folders `assets/ar` (containing audio files) and `assets/dr` (containing images files) will be also picked out along **CPProjInit**.

### Unit loader
We can write the unit loader in any web developping language, but in this example, we will reuse mostly what is written in `index.html` of each exported Captivate project with a little help of javascript.

This loader will be called in an _iframe_ inside `cluster/index.html`.

### Assets
Container of common resources of these modules. Pay attention to `assets/js/CPM.js` because we will replace it by a version covering all _components_ found in projects, but not holding any _initiator_.

You can take the `assets` folder in this folder as the base for your cluster. In that case, make sure to update them regularly in order to have a good performance.
## Installation & preparation

### Sample modules

_original modules_ contains HTML5 modules exported by Adobe Captivate without any "factorisation". You can use them for this tutorial.

### CLI
If you are used to CLI, this is right for you.

_**Requirements**_: Node >= v8.9.1

_**Install**_:
* via git clone:
````bash
git clone https://github.com/perfectstrong/CPExternalizer-CLI
cd CPExternalizer-CLI
npm install
# ready to run
````
* via download whole source: [here](https://github.com/perfectstrong/CPExternalizer-CLI/archive/master.zip). Extract to a folder and open a bash there. Run also `npm install` to install the dependecies. Now it's ready.

### GUI
Easy to use. Check out [the lastest release](https://github.com/perfectstrong/CPExternalizer-GUI/releases) to get a bundled build.

Or you can build by yourself. _**Requirements**_:
* Node >= v8.9.1.
* Electron ~1.7.11.
````bash
git clone https://github.com/perfectstrong/CPExternalizer-GUI
cd CPExternalizer-GUI
npm install
npm start
````

## Use cases

### Complete factorisation

### Slim down a specific initiator

### Discover unexpected components