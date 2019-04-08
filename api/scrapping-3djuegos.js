const cheerio = require('cheerio');
const fetch = require('node-fetch');
var _ = require("lodash");

const BASE_URL = 'https://www.3djuegos.com/';

const getAll = async (page = 0) => {
  const res = await fetch(BASE_URL + `#-portada_nov-${page}f0f0f0`);
  const body = await res.text();
  const $ = cheerio.load(body);

  const promises = [];

  $('div.nov_main').each((index, item) => {
    const $item = $(item);
    const title = $item.find('div.nov_main_txt a h3').text();
    const href = $item.find('div.nov_main_txt a').attr('href');
    const img = $item.find('div.img img').attr('data-src');
    const synopsis = $item.find('div.nov_main_txt p.dn600').text();
    const platform = $item.find('div.nov_main_txt div.nov_main_fec')
      .text().split('/').join('').replace('y', '').split(' ')
      .filter((data) => data !== '')
      .splice(1);

    promises.push({
      title: title,
      href: href,
      img: img,
      synopsis: synopsis,
      platform: platform
    });
  });

  return await Promise.all(promises);
};

const getHrefHelper = async () => {
  const res = await fetch(BASE_URL + `novedades/videos/juegos/0f0f0f0/fecha/`);
  const body = await res.text();
  const $ = cheerio.load(body);

  const promises = [];

  $('div.nov_int').each((index, item) => {
    const $item = $(item);
    const title = $item.find('div.nov_int_txt h2').text();
    const href = $item.find('div.nov_int_txt h2 a').attr('href');

    //$('div.jw-media').each((index , item) =>{
    //  const $item = $(item);
    //  src = $item.find('video').attr('src');
    //});

    promises.push({
      href: href
    });
  });
  //console.log(promises);
  return promises;
};


const getAllVideos = async () => {
  const promises = [];
  return new Promise((resolve, reject) => {
    getHrefHelper().then((data) => {
      data.forEach(async (dic) => {
        const res = await fetch(dic.href);
        const body = await res.text();
        const $ = cheerio.load(body);
        const size = $('script[type="application/ld+json"]').length;
        const img = $('meta[name="twitter:image:src"]').attr('content');
        
        $('script[type="application/ld+json"]').each((index, item) => {  
          const $item = JSON.parse($(item).html());
          const title = $item['name']
          const description = $item['description'];
          const src = $item['contentUrl']

          promises.push({
            title: title,
            description: description,
            src: src,
            img: img
          });

          _.remove(promises , {title: undefined , src: undefined});
          _.remove(promises , {title: '3DJuegos'});

          if(size - 1 === index){
            setTimeout(() =>{
              resolve(promises);
            } , 2000)   
          }
        }); 
      });
    });
  });
};




const videoContent = async() =>{
  var result = await getAllVideos();
  return await Promise.all(result)
}

videoContent().then((d) =>{
  console.log(d);
})

module.exports = {
  getAll,
};