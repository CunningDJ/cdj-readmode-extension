// MAIN
(function readMode() {

let jq;


setTimeout(function() {
jQuery.noConflict(); 
jq = jQuery;

// Grabbing headers and text
let header = jq('h1').removeAttr('style');
let paragraphs = jq('p').filter(textFilter).removeAttr('style');//.removeAttr('style').css(containerStyle);
let byline = getByline();
// style & head section
let style = jq('<style>').html(containerStyleText());
let head = jq('<head>').append(style);

// main container
let container = jq('<div>')
                    .addClass('container')
                    .append(header)
                    .append(byline)
                    .append(paragraphs);
                    //.css(containerStyle);

// body
let body = jq('<body>').append(container);

// Clearing html, inserting headers & text
jq('html')
    .html('')
    .append(head)
    .append(body);


}, 200);



// utils
function textFilter(i, el) {
    let text = jq(el).text();
    return text.length > 0 & !jq(el).hasClass('byline');
}

function getByline() {
    let byline = jq('.byline').text();
    byline = jq('<h4>').addClass('byline').text(byline);
    //console.error('byline:', byline);
    return byline;
}

})();

function containerStyleText() { 
    return `
    body {
        background-color: black;
    }

    p, h1, h2, h3, h4, h5, h6 {
        font-family: "Helvetica", Calibri, Arial, sans-serif;
        color: white;
    }

    a {
        color: cyan;
    }

    .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 576px) {
      .container {
        max-width: 540px;
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width: 720px;
      }
    }

    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
    }

    @media (min-width: 1200px) {
      .container {
        max-width: 1140px;
      }
    }`;
}
