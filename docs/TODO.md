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

* START
    - [x] Cleaner spring class
    - [x] Damped oscillator sketches should take initial conditions as arguments.
    - [ ] position sketches side-by-side
* [ ] Add sliders to play with variables.
    - [ ] should have a play button that restarts the sketch after variables have been set.
* [ ] Solve harmonic oscillator problems with calculus and linear analysis.
* [ ] Split pixel-physics-p5 into it's own package.
* [x] Positioning of sketches
* [x] Create utility functions library
    - [x] grid-lines
        - [ ] axes with labels
* [ ] common styling for sketches

## Deployment

* [ ] update README.md
* [ ] change page path from test
* [ ] add poweredBy page showing open-source technology used.

* [ ] add Bulma and center stuff
* [ ] max width with a paper-style background on the sides
* [ ] Header/Footer
* [ ] Favicon

* [ ] Deploy to GitHub Pages

## Bonus Challenges

* [ ] ability to animate or just show end result for phase-space diagrams
* [ ] show coordinates on hover
* [ ] dark mode
    - [ ] how to pass this to processing sketches?
