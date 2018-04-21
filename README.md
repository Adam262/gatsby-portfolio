### Overview
This is a work in progress to redesign my personal site, which is four years old and written in jQuery. I chose to build this new site in React 16 and `styled-components` because these are the main technoligies I use in my job as a fullstack engineer at Greenhouse. 

My goals with this project are:

* to build a clean, attractive site that shows off my experience as an engineer;
* to have some fun showing my side interests of event photography and competitive running;
* to try some new technologies and/or go deeper in the technologies I know;

### Key Technologies

* The site is built in Gatsby using the default Gatsby starter;
* I added `styled-components`, and am trying some advanced concepts such as `theme`;
* I added `three.js` and built a simple scene. I liked the flexibility of the original Node module, so I ported it to React; 
* Form components are built with Google Material-UI
* Form is submitted with Formspree
* There is some overriding of the webpack config to allow path aliasing. This removes brittle relative paths. 


### To Do
* Show my running data in this site via a charting library
* To do this, I first need to build a separate app that scrapes data from different websites of running results 

