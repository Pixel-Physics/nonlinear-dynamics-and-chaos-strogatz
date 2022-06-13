# TODO
* [x] Clear out mdx config.
* [x] Cleaner way to write processing code in react.
    - https://github.com/Gherciu/react-p5#readme
* [x] Show graphs of x-y and x1 x2
    - [x] refactor dampedHarmonicOscillator phase space with clearer variables.
    - [x] draw a spring with a mass
        - [x] implement js circular buffer
        - [x] trace spring path
        - [x] ~~use p-vectors instead of points~~ (over-engineering)
        - [x] implement the actual mathematics (super-hacky, but done)
    - [x] ~~katex labels? https://discourse.processing.org/t/latex-in-processing/19691/3~~ (not now)
    - [x] Cleaner spring class
    - [x] Damped oscillator sketches should take initial conditions as arguments.
* [x] Add sliders to play with variables.
    - [x] ~~should have a play button that restarts the sketch after variables have been set.~~ Restart automatically.
* [x] Positioning of sketches
* [x] Create utility functions library
    - [x] grid-lines
* START
    - [x] axes with labels for phase diagrams
    - [x] export color scheme as array
    - [x] better color flow for phase-space diagrams
* [ ] Better Sliders
    - [ ] Slide, or input numerical value.
    - [ ] Set variable range based on initial values
    - [ ] control multiple components with one slider
    - [ ] Specify ranges and steps for variables
    - [ ] Better looking css.
    - [ ] Look at alternatives to css-in-js
* [ ] Solve harmonic oscillator problems with calculus and linear analysis.
* [ ] ~~Using Apache eCharts to render graphs instead of processing?~~


## Deployment

* [x] update README.md
* [x] change page path from test
* [ ] Add links to homepage
* [ ] add poweredBy page showing open-source technology used.
* [ ] Re-brand as Pixel Physics

* [ ] max width with a paper-style background on the sides
* [ ] Header/Footer
* [ ] Favicon

* [x] Deploy to GitHub Pages

## Before Launching
* [ ] Re-brand as Pixel Physics
* [ ] Sketches
    * Clean color palette (with color buckets)
    * Full harmonic oscillator
    * Dragon, sketch with customizable colors

## Bonus Challenges

* [ ] Figure out a way to scrub through the sketches.
    - [ ] caching??
    - [ ] ability to animate or just show end result for phase-space diagrams
* [ ] show coordinates on hover
* [ ] dark mode
    - [ ] how to pass this to processing sketches?
* Ability to view p5.js source code.
