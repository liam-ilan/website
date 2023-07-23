/* eslint-disable no-unused-vars */

const data = [
  {
    image: '../img/math-interpreter.png',
    title: 'Just a Math Interpreter',
    time: '[2023]',
    description: 'Built in C, compiled to WASM.',
    link: 'https://liam-ilan.github.io/math-interpreter/'
  },
  {
    image: '../img/vis-the-imp.png',
    title: 'Visualizing the Impossible',
    time: '[2023]',
    description: 'Numerically approximating the time dependent schrödinger equation for computer visualization.',
    link: 'https://liam-ilan.github.io/time-dependent-schrodinger-equation/'
  },
  {
    image: '../img/orbital.png',
    title: 'The Periodic Table of Orbitals',
    time: '[2023]',
    description: 'An educational resource on electron orbitals.',
    link: 'https://liam-ilan.github.io/electron-orbitals/'
  },
  {
    image: '../img/chem-ia.png',
    title: 'Chemistry IA',
    time: '[2023]',
    description: 'The Effect of Sodium Sulfate Concentration on the Rate of Production of Hydrogen Gas in the Electrolysis of Water',
    link: 'https://github.com/liam-ilan/chemistry-ia'
  },
  {
    image: '../img/phys-ia.png',
    title: 'Physics IA',
    time: '[2023]',
    description: 'The Moment of Inertia of a Cardboard Equilateral Triangle Around its Centroid',
    link: 'https://github.com/liam-ilan/physics-ia'
  },
  {
    image: '../img/geo-ia.png',
    title: 'The Urban Heat Island Effect in Vancouver',
    time: '[2023]',
    description: 'My IB Geography Internal Assesment for the May 2023 examanation session.',
    link: 'https://github.com/liam-ilan/geography-ia'
  },
  {
    image: '../img/python-cube.png',
    title: 'Python Cube',
    time: '[2022]',
    description: 'A cube wireframe renderer, in a 45x45 Python script.',
    link: 'https://github.com/liam-ilan/python-cube'
  },
  {
    image: '../img/math-ee.png',
    title: 'Computing Pi with Bouncing Cubes',
    time: '[2022]',
    description: 'A paper on the surprising connection between Pi and bouncing cubes.',
    link: 'https://github.com/liam-ilan/extended-essay'
  },
  {
    image: '../img/pi-cubes.jpg',
    title: 'Pi and Bouncing Cubes',
    time: '[2022]',
    description: 'A visualisation of how bouncing cubes can be used to compute pi.',
    link: 'https://bouncing-cubes.snowboardsheep.repl.co/'
  },
  {
    image: '../img/spotloader.jpg',
    title: 'SpotLoader',
    time: '[2022]',
    description: 'A site that downloads Spotify playlists.',
    link: 'https://github.com/liam-ilan/spotloader'
  },
  {
    image: '../img/oddify.jpg',
    title: 'Oddify',
    time: '[2021]',
    description: "A discord bot built to paste Oddish's face onto random Pokemon, flags and pfps.",
    link: 'https://github.com/liam-ilan/oddify'
  },
  {
    image: '../img/clyde.jpg',
    title: 'Clyde',
    time: '[2020]',
    description: 'A language developed with Pranav Karthik that helps you to build a discord bot.',
    link: 'https://repl.it/talk/challenge/Clyde-The-Discord-Bot-Programming-Language/51541'
  },
  {
    image: '../img/fmdb.jpg',
    title: 'FMDB',
    time: '[2020]',
    description: 'An app that helps a family keep a record of movies watched, created with Java.',
    link: 'https://github.com/liam-ilan/fmdb'
  },
  {
    image: '../img/hauk.jpg',
    title: 'The HAUK Project',
    time: '[2020]',
    description: 'A site that generates stories using Markov Chains.',
    link: 'https://github.com/liam-ilan/sad-story-generator'
  },
  {
    image: '../img/virus-simulator.jpg',
    title: 'Virus Simulator',
    time: '[2020]',
    description: 'A playground to simulate the spread of a virus.',
    link: 'https://github.com/liam-ilan/virus-simulator'
  },
  {
    image: '../img/ccc-challenge.jpg',
    title: 'CCC Challenge',
    time: '[2020]',
    description: 'A collection of completed CCC problems.',
    link: 'https://github.com/liam-ilan/ccc-challenge'
  },
  {
    image: '../img/skin-cancer.jpg',
    title: 'Skin Cancer Classifier',
    time: '[2020]',
    description: 'A tool for training Teachable Machine models to classify skin cancer.',
    link: 'https://github.com/liam-ilan/science-fair'
  },
  {
    image: '../img/repl-hero.jpg',
    title: 'Repl Hero',
    time: '[2019]',
    description: 'Guitar Hero... FOR HACKERS.',
    link: 'https://repl.it/talk/challenge/Repl-Hero-a-fun-music-arcade-game/16400'
  },
  {
    image: '../img/sendverse.jpg',
    title: 'Sendverse',
    time: '[2019]',
    description: 'An anonymous chatting server you can deploy for your friends.',
    link: 'https://github.com/liam-ilan/sendverse'
  },
  {
    image: '../img/monty-hall.jpg',
    title: 'The Monty Hall Problem',
    time: '[2018 - 2019]',
    description: 'An interactive simulation of the Monty Hall Problem.',
    link: 'https://github.com/liam-ilan/monty-hall-problem'
  },
  {
    image: '../img/forest.jpg',
    title: 'Forest Generation',
    time: '[2018]',
    description: 'A cellular automata for generating trees in your command line.',
    link: 'https://github.com/liam-ilan/forest-generation-cellular-automata'
  },
  {
    image: '../img/sticky-quest.jpg',
    title: 'Sticky Quest',
    time: '[2018]',
    description: 'A simple block in a quest for love.',
    link: 'https://github.com/liam-ilan/sticky-quest'
  },
  {
    image: '../img/wolfram.jpg',
    title: "Wolfram's Cellular Automata",
    time: '[2018]',
    description: "An implementation of Wolfram's cellular automata in Node.js",
    link: 'https://github.com/liam-ilan/wolfram-cellular-automata'
  },
  {
    image: '../img/game-of-life.jpg',
    title: 'Game of Life',
    time: '[2018]',
    description: 'An implementation of the Game of Life in Node.js.',
    link: 'https://github.com/liam-ilan/game-of-life'
  },
  {
    image: '../img/do-not-shear-the-sheep.jpg',
    title: 'Do Not Shear The Sheep',
    time: '[2018]',
    description: 'Try to dodge the shears. A simple arcade game.',
    link: 'http://do-not-shear-the-sheep.surge.sh/'
  },
  {
    image: '../img/asteroid-dodge.jpg',
    title: 'Asteroid Dodge',
    time: '[2017]',
    description: 'Just dodge the asteroids.',
    link: 'https://asteroid-dodge.surge.sh'
  },
  {
    image: '../img/the-train-game.jpg',
    title: 'The Train Game',
    time: '[2017]',
    description: 'A game about stopping trains.',
    link: 'https://the-train-game.surge.sh'
  }
]
