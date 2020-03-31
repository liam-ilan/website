# Personal Website
## Liam Ilan

### What is this?
My personal website. https://liamilan.surge.sh

### How do I use this?
To start the server, run:
```
  npm start
```

To lint, run:
```
  npm run lint
```

### How do you add content?
The file `scripts/data.json` contains a list of objects, each one representing a different content box. The data is represented like this:

```
  {
    image: <image source>,
    title: <title>,
    time: <year surrounded by square brackets>,
    description: <brief description>,
    link: <link to project>
  }
```

Just add one of these objects to the list to add an item to the site.