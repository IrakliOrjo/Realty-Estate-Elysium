// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
 
  {
    id: 1,
    type: 'სახლი',
    status: 'იყიდება',
    name: 'სახლი დიდ დიღომში',
    description:
      'იყიდება 2 სართულიანი სახლი ეზოთი დიდ დიღომში, მაღალ ხარისხიანი რემონტით სახლი არის 322 კვ.მ, ეზო 500 კვ.მ თექნიკით და ავეჯით. 7 ოთახი, 4 საძინებელი, 2 სველი წერტილი.',
    image: 'https://i.ibb.co/x574mp2/4.jpg',
    imageLg: 'https://i.ibb.co/x574mp2/4.jpg',
    country: 'თბილისი',
    address: 'თბილისი, დიდ დიღომი',
    bedrooms: '7',
    bathrooms: '2',
    surface: '322 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '2',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: false,
    },
    price: '525 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/x2HyBkH/3.jpg'},
      {url:'https://i.ibb.co/x574mp2/4.jpg'},
      {url:'https://i.ibb.co/NSh2yLH/5.jpg'},
      {url:'https://i.ibb.co/LzcsR0P/6.jpg'},
      {url:'https://i.ibb.co/jwCx0xj/7.jpg'},
      {url:'https://i.ibb.co/hY8Gq38/8.jpg'},
      {url:'https://i.ibb.co/NKY1MYs/9.jpg'},
      {url:'https://i.ibb.co/vcXFFq5/10.jpg'},
      {url:'https://i.ibb.co/LgjZxpf/11.jpg'},
      {url:'https://i.ibb.co/TR1qhtq/12.jpg'},
      {url:'https://i.ibb.co/P4CHhG9/13.jpg'},
      {url:'https://i.ibb.co/6PgHwyW/14.jpg'},
      {url:'https://i.ibb.co/nmB8ySj/Whats-App-Image-2023-03-21-at-16-44-14.jpg'},
      {url:'https://i.ibb.co/9gY5JNz/Whats-App-Image-2023-03-21-at-16-45-16.jpg'},    
    ]
  },
   {
    id: 2,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'ბინა ისანში',
    description:
      'იყიდება ბინა ისანში საუკეთესო ადგილას, მეტროსთან ახლოს ახალაშენებულ კორპუსში, კორპუსი აშენებულია ენერგოეფექტური მასალით, ფუნქციონირებს ლიფტი, დაცვა, სადარბაზოები მოწესრიგებული, ბინა არის უცხოვრებელი, საუკეთესო ხედებით, ახალგარემონტებული, მაღალი ხარისხის მასალებით, საუკეთესო ხარისხის ავეჯით (ლაბორატორიის) და ჩაშენებული ტექნიკით (Electrolux), (სარეცხი მანქანა, ჭურჭლის სარეცხი მანქანა, მაცივარი) ცენტრალური გათბობის ქვაბით, დიდი სამსუნგის ტელევიზორით, ჩართულია ინტერნეტი და ტელევიზია.',
    image: 'https://i.ibb.co/1rNMwMH/5.jpg',
    imageLg: 'https://i.ibb.co/1rNMwMH/5.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ისანი',
    bedrooms: '2',
    bathrooms: '1',
    surface: '63 კვ.მ',
    details: {
      repair: 'ევრო რემონტი',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: false,
      furniture: true,
      elevator: true,
    },
    price: '115 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/QnN8nW6/1.jpg'},
      {url:'https://i.ibb.co/Ctd8CW9/3.jpg'},
      {url:'https://i.ibb.co/PhrL1s2/4.jpg'},
      {url:'https://i.ibb.co/1rNMwMH/5.jpg'},
      {url:'https://i.ibb.co/dk4438w/6.jpg'},
      {url:'https://i.ibb.co/b2NjVgb/7.jpg'},
      {url:'https://i.ibb.co/w6D0Txr/8.jpg'},
      {url:'https://i.ibb.co/rv4fsmg/9.jpg'},
      {url:'https://i.ibb.co/gmS9DmW/10.jpg'},
      {url:'https://i.ibb.co/JvSZnxZ/11.jpg'},
      {url:'https://i.ibb.co/Bc0jjgr/12.jpg'},
      {url:'https://i.ibb.co/dMFzdtj/14.jpg'},
      {url:'https://i.ibb.co/m5FPx1x/15.jpg'},
      {url:'https://i.ibb.co/G09YT0y/19.jpg'},
      {url:'https://i.ibb.co/9rLk26f/20.jpg'}, 
      {url:'https://i.ibb.co/bstsvyT/21.jpg'}, 
      {url:'https://i.ibb.co/Kj77VTQ/22.jpg'},     
    ]
  },
  {
    id: 3,
    type: 'ბინა',
    status: 'იყიდება',
    name: '2 ოთახიანი ბინა საბურთალოზე',
    description:
      'იყიდება მაღალი ხარისხის რემონტით დელუქსის სახლში, იდეალურია გასაქირავებლად, 24/7 დაცვით',
    image: 'https://i.ibb.co/4TPbGHq/4.jpg',
    imageLg: 'https://i.ibb.co/4TPbGHq/4.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ალექსიძის ქუჩა, საბურთალო',
    bedrooms: '2',
    bathrooms: '1',
    surface: '49 კვ.მ',
    details: {
      repair: 'ევრო რემონტი',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: false,
      furniture: true,
      elevator: true,
    },
    price: '188 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/z27FymW/1.jpg'},
      {url:'https://i.ibb.co/VCVMZB7/2.jpg'},
      {url:'https://i.ibb.co/MZDN4x7/3.jpg'},
      {url:'https://i.ibb.co/4TPbGHq/4.jpg'},
      {url:'https://i.ibb.co/Hq3zg6g/5.jpg'},
      {url:'https://i.ibb.co/ZL6KLm7/6.jpg'},
      {url:'https://i.ibb.co/nzzBZ4g/7.jpg'},
      {url:'https://i.ibb.co/cDLK3Ct/8.jpg'},
      {url:'https://i.ibb.co/sQGYNNh/9.jpg'},
      {url:'https://i.ibb.co/1zfKpHS/11.jpg'},
      {url:'https://i.ibb.co/p3cgLYD/12.jpg'},
      {url:'https://i.ibb.co/yfYd1sJ/13.jpg'},
      {url:'https://i.ibb.co/vQycjRS/14.jpg'},
      {url:'https://i.ibb.co/P6RP7S5/15.jpg'},
        
    ]
  },
 {
    id: 4,
    type: 'ბინა',
    status: 'იყიდება',
    name: '2 ოთახიანი ბინა საბურთალოზე',
    description:
      'იყიდება 2 ოთახიანი ბინა საბურთალოზე, ქავთარაძის ქუჩა არქის აშენებულ კორპუსში, 55 კვადრატი 7-ე სართული სულ 12 სართული, ახალი გარემონტებული, უცხოვრებელი ჩაშენებული სამზარეულო.',
    image: 'https://i.ibb.co/XD5FTCQ/5.jpg',
    imageLg: 'https://i.ibb.co/XD5FTCQ/5.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ქავთარაძის ქუჩა, საბურთალო',
    bedrooms: '2',
    bathrooms: '1',
    surface: '49 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: false,
      furniture: false,
      elevator: true,
    },
    price: '105 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/Mp5wFy4/1.jpg'},
      {url:'https://i.ibb.co/NSdt4tt/2.jpg'},
      {url:'https://i.ibb.co/kqV76h6/3.jpg'},
      {url:'https://i.ibb.co/PDKkVHJ/4.jpg'},
      {url:'https://i.ibb.co/XD5FTCQ/5.jpg'},
      {url:'https://i.ibb.co/872gzSB/6.jpg'},
      {url:'https://i.ibb.co/2FxvCCQ/7.jpg'},
      {url:'https://i.ibb.co/BGK4cGH/8.jpg'},
      {url:'https://i.ibb.co/xfC5wZY/9.jpg'},
      {url:'https://i.ibb.co/Smj5Lkp/10.jpg'},
      {url:'https://i.ibb.co/Lh21gtZ/11.jpg'},
      {url:'https://i.ibb.co/SVJFWRF/12.jpg'},
      {url:'https://i.ibb.co/C2gc976/13.jpg'},
      
        
    ]
  },
 
];
