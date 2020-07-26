const request = require('request')
const cheerio = require('cheerio')
const fs = require(`fs`)


//-------------for tests-------------//

//const url = 'https://labtestsonline.org/tests-index#index-a'
// request(url, (err, response, html) => {
//     if (!err && response.statusCode == 200) {
//         const $ = cheerio.load(html)
//         let data = $('.field-content').find('a')
//         let arr = []
//         Array.from(data).map(elem => arr.push(elem.children[0].data))
//         fs.writeFileSync('./data', JSON.stringify(arr))
//         console.log(arr)
//     }
// })


//--------------for diseases--------------//

const url = 'https://www.nhsinform.scot/illnesses-and-conditions/a-to-z'
request(url, (err, response, html) => {
    if (!err && response.statusCode == 200) {
        const $ = cheerio.load(html)
        let dataul = $('.module__title')
        const arr = []
        Array.from(dataul).map(elem => arr.push(elem.children[0].data.trim()))
        fs.writeFileSync('./diseases', JSON.stringify(arr))
    }
})