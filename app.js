const fetch = require('node-fetch');
const cheerio = require('cheerio'); // import module

// const $ = cheerio.load('<h2 class="title">Hello world</h2>'); // passing HTML

// $('h2.title').text('Hello there!');
// $('h2').addClass('welcome');

// let classTitle = $('.title');
// console.log(classTitle.text());

// const html = $.html();
// console.log(html);

fetch('https://espn.com')
.then(response => {
    return response.text();
})
.then(html => {
    // console.log(html); // printing the html
    // - Next step: pass html into the cheerio.load ($)
    const $ = cheerio.load(html); // html goes here
    const moduleHeader = $('.module__header').text(); // pass in the class
    // - Check the length
    console.log(moduleHeader); // if more than 1, element has more than one element with that class
    db.header.create({
        name: moduleHeader
    })
    .then(newHeader => {
        console.log(newHeader);
        res.render('somepage', { header: newHeader });
    })
});

// find some websites that you want get data from
// nyt.com
// wsj.com
// cnn.com
// npr.com
// ft.com
// tictok.com

// find a class inside of Chrome Dev Tools
// Try to print that class back.

