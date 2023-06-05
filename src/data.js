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
  {
    id: 5,
    type: 'სახლი',
    status: 'ქირავდება',
    name: 'ქირავდება სახლი კრწანისში',
    description:
      'ქირავდება ულამაზესი კერძო სახლი 800 კვმ. მიწა 1800 ვკმ. დიდი გამწვანებული ეზოთი აუზით,საჩოგბურთო კორტებით, სატრენაჟორო დარბაზით',
    image: 'https://i.ibb.co/3S40PBC/1.jpg',
    imageLg: 'https://i.ibb.co/9pp8kRC/2.jpg',
    country: 'თბილისი',
    address: 'თბილისი, კრწანისი, მთაწმინდის რაიონი,',
    bedrooms: '5',
    bathrooms: '5',
    surface: '800 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '3',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: false,
    },
    price: '20,000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/3S40PBC/1.jpg'},
      {url:'https://i.ibb.co/9pp8kRC/2.jpg'},
      {url:'https://i.ibb.co/4Yk1cWQ/3.jpg'},
      {url:'https://i.ibb.co/3WPf7M9/4.jpg'},
      {url:'https://i.ibb.co/FsPM6Xb/5.jpg'},
      {url:'https://i.ibb.co/4MRgJ3h/6.jpg'},
      {url:'https://i.ibb.co/PYkcw4s/7.jpg'},
      {url:'https://i.ibb.co/zZCJC6d/8.jpg'},
      {url:'https://i.ibb.co/23dyZmK/9.jpg'},
      {url:'https://i.ibb.co/D5KfjFX/10.jpg'},
      {url:'https://i.ibb.co/TmCSkJw/11.jpg'},
      {url:'https://i.ibb.co/7GkDm0k/12.jpg'},
      {url:'https://i.ibb.co/yfXZWHb/13.jpg'},
      
        
    ]
  },
  {
    id: 6,
    type: 'სახლი',
    status: 'იყიდება',
    name: 'იყიდება სახლი ქოშიგორაზე',
    description:
      'იყიდება ულამაზესი 4 სართულიანი სახლი(800კვმ),  მიწა(2000კვმ) ქოშიგორაზე, წყნარ ეკოლოგიურათ სუფთა ადგილას, ყველა ოთახიდან პანორამული ხედით ახალი აშენებულია უცხოვრებელი, ღია საცურაო აუზი, საუნა, გასართობი სივრცით, დამონტაჟებულია 13 კამერა და დაცვის სისტემა',
    image: 'https://i.ibb.co/J3TGQ9C/1.jpg',
    imageLg: 'https://i.ibb.co/pvndywD/8.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ქოშიგორა',
    bedrooms: '7',
    bathrooms: '7',
    surface: '600 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '7',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: false,
    },
    price: '1 600 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/J3TGQ9C/1.jpg'},
      {url:'https://i.ibb.co/X4W6CMD/2.jpg'},
      {url:'https://i.ibb.co/XLjPWj7/3.jpg'},
      {url:'https://i.ibb.co/k33tzLj/4.jpg'},
      {url:'https://i.ibb.co/K5CYL2P/5.jpg'},
      {url:'https://i.ibb.co/pjZbH7V/6.jpg'},
      {url:'https://i.ibb.co/F3LjRHz/7.jpg'},
      {url:'https://i.ibb.co/pvndywD/8.jpg'},
      {url:'https://i.ibb.co/PCNpNVg/9.jpg'},
      {url:'https://i.ibb.co/jrJf9DZ/10.jpg'},
      {url:'https://i.ibb.co/zSNFt2t/11.jpg'},
      {url:'https://i.ibb.co/k6dw212/12.jpg'},
      {url:'https://i.ibb.co/Mnkbz8V/13.jpg'},
      {url:'https://i.ibb.co/9WPQ3Xh/14.jpg'},
      {url:'https://i.ibb.co/XWNM2HT/15.jpg'},
      {url:'https://i.ibb.co/Bfh6KXV/16.jpg'},
      {url:'https://i.ibb.co/G9DS3VL/17.jpg'},
      {url:'https://i.ibb.co/xjB2hCM/18.jpg'},
      {url:'https://i.ibb.co/LRjfkNh/19.jpg'},
      {url:'https://i.ibb.co/TMJ0Dq1/20.jpg'},
      {url:'https://i.ibb.co/HGzZQsf/21.jpg'},
      
      
        
    ]
  },
  {
    id: 7,
    type: 'სახლი',
    status: 'იყიდება',
    name: 'იყიდება სახლი ოქროყანაში',
    description:
      'იყიდება 2 სართულიანი სახლი(265კვმ) ოქროყანაში. 600კვმ მიწა. სახლი არის ავეჯით და ტექნიკით. კეთილმოწყობილი ეზოთი. ვერანდა თბილისის ხედით. 4 საძინებელი, 3 სველი წერითილი. მისაღები ბუხარით, სამზარეულო , 2 საგარდერობე ოთახი. ',
    image: 'https://i.ibb.co/svnVzzC/27.jpg',
    imageLg: 'https://i.ibb.co/svnVzzC/27.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ოქროყანა',
    bedrooms: '6',
    bathrooms: '3',
    surface: '265 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '3',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: false,
    },
    price: '620 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/PDjj26P/1.jpg'},
      {url:'https://i.ibb.co/RQf5n2S/2.jpg'},
      {url:'https://i.ibb.co/PgN8LPk/3.jpg'},
      {url:'https://i.ibb.co/dfbM0VQ/4.jpg'},
      {url:'https://i.ibb.co/Gcvr4mG/5.jpg'},
      {url:'https://i.ibb.co/kxrPLVF/6.jpg'},
      {url:'https://i.ibb.co/DftDc2z/7.jpg'},
      {url:'https://i.ibb.co/mtbP8S8/8.jpg'},
      {url:'https://i.ibb.co/4Jrxp7B/9.jpg'},
      {url:'https://i.ibb.co/dLTvNfZ/10.jpg'},
      {url:'https://i.ibb.co/SN3fMdK/11.jpg'},
      {url:'https://i.ibb.co/Y05nzZf/12.jpg'},
      {url:'https://i.ibb.co/g7YTNTc/13.jpg'},
      {url:'https://i.ibb.co/FzcdxbJ/14.jpg'},
      {url:'https://i.ibb.co/Y2Bj0CV/15.jpg'},
      {url:'https://i.ibb.co/6n5mKX6/16.jpg'},
      {url:'https://i.ibb.co/861rxcs/17.jpg'},
      {url:'https://i.ibb.co/mTZGGn4/18.jpg'},
      {url:'https://i.ibb.co/S0bSyfv/19.jpg'},
      {url:'https://i.ibb.co/dWPvV04/20.jpg'},
      {url:'https://i.ibb.co/svgX5jK/21.jpg'},
      {url:'https://i.ibb.co/VvLDCFZ/22.jpg'},
      {url:'https://i.ibb.co/xgv2TgR/23.jpg'},
      {url:'https://i.ibb.co/x58mbjs/24.jpg'},
      {url:'https://i.ibb.co/m0GjpmC/25.jpg'},
      {url:'https://i.ibb.co/vQWK2mD/26.jpg'},
      {url:'https://i.ibb.co/kgjSvvJ/27.jpg'},
      {url:'https://i.ibb.co/B2xgQF3/28.jpg'},
      {url:'https://i.ibb.co/S5pP0z1/29.jpg'},
      {url:'https://i.ibb.co/tJLsycZ/30.jpg'},
      {url:'https://i.ibb.co/3p41vwt/31.jpg'},
   
    ]
  },
  {
    id: 8,
    type: 'სახლი',
    status: 'იყიდება',
    name: 'იყიდება სახლი დიღომში',
    description:
      'დიღომის 7ში, თბილისში პრესტიჟულ დასახლებაში, იყიდება ჰაიტექ დიზაინ ვილა(500კვმ), მიწა(1150კვმ) კონსტრუქტორის მიერ გათვლის 9.5 ბალიან მიწისძვრაზე. 5 მანქანის პარკინგით, 1150 კვმ გამწვანება, მწვანე ლეილანდების ღობით იზოლირებული ეზოთი, სარწყავი სისტემით, დიდი ბასეინით და დასაჯდომი სივრცეთი. ვილა 2 სართულიანია. 1 სართულზე დიდი მისაღები ოთახი ბუხრით 50კვმ. დიდი იზოლირებული სამზარეულოთი 50კვმ. 1 საძინებელი საგარდერობე ოთახით, კაბინეტი, დიდი აბაზანა ჯაკუზით. სახლი აშენებულია 2019 წელს. რჩება ავეჯი და ტექნიკა  ',
    image: 'https://i.ibb.co/hcbhDfg/3.jpg',
    imageLg: 'https://i.ibb.co/hcbhDfg/3.jpg',
    country: 'თბილისი',
    address: 'თბილისი, დიღომი',
    bedrooms: '7',
    bathrooms: '5',
    surface: '500 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '5',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: false,
    },
    price: '1 400 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/bv0TD44/1.jpg'},
      {url:'https://i.ibb.co/p13dbHW/2.jpg'},
      {url:'https://i.ibb.co/hcbhDfg/3.jpg'},
      {url:'https://i.ibb.co/vvKb1Pq/4.jpg'},
      {url:'https://i.ibb.co/mvqq1QV/5.jpg'},
      {url:'https://i.ibb.co/ChKhfR8/6.jpg'},
      {url:'https://i.ibb.co/DLVz90N/7.jpg'},
      {url:'https://i.ibb.co/k6PHBgL/8.jpg'},
      {url:'https://i.ibb.co/p0s44gT/9.jpg'},
      {url:'https://i.ibb.co/bNPmqDx/10.jpg'},
      {url:'https://i.ibb.co/qxCw4jJ/11.jpg'},
      {url:'https://i.ibb.co/856HH7D/12.jpg'},
      {url:'https://i.ibb.co/984w16k/13.jpg'},
      {url:'https://i.ibb.co/pXJBgBB/14.jpg'},
      {url:'https://i.ibb.co/2Sb3Fjf/15.jpg'},
      {url:'https://i.ibb.co/yyXsYYf/16.jpg'},
      {url:'https://i.ibb.co/yn2TPbk/17.jpg'},
      {url:'https://i.ibb.co/bFcLwzM/18.jpg'},
      {url:'https://i.ibb.co/x1L2xhL/19.jpg'},
      {url:'https://i.ibb.co/7nsLJVQ/20.jpg'},
      {url:'https://i.ibb.co/ZLdxjf7/21.jpg'},
      {url:'https://i.ibb.co/MDrwySP/22.jpg'},
    ]
  },
   {
    id: 9,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'იყიდება ბინა ისანი, ჰოლბრუკის ქუჩა',
    description:
      'იყიდება 3 ოთახიანი(86კვმ) ბინა ისანში ჰოლბრუკის ქუჩაზე ახალ სახლში,  ახალი  მაღალი ხარისხის ევრორემონტით ავეჯით და ტექნიკით, უცხოვრებელი',
    image: 'https://i.ibb.co/c3M3xqR/2.jpg',
    imageLg: 'https://i.ibb.co/c3M3xqR/2.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ისანი, ჰოლბრუკის ქუჩა',
    bedrooms: '3',
    bathrooms: '1',
    surface: '86 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: true,
    },
    price: '155 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/sbhsNtB/1.jpg'},
      {url:'https://i.ibb.co/c3M3xqR/2.jpg'},
      {url:'https://i.ibb.co/51jgmCF/3.jpg'},
      {url:'https://i.ibb.co/7bNXQm6/4.jpg'},
      {url:'https://i.ibb.co/gmv8mQv/5.jpg'},
      {url:'https://i.ibb.co/t3gn6C4/6.jpg'},
      {url:'https://i.ibb.co/d0m83tK/7.jpg'},
      {url:'https://i.ibb.co/rxRjgMz/8.jpg'},
      {url:'https://i.ibb.co/Y3rxQM1/9.jpg'},
      {url:'https://i.ibb.co/VV2V5vp/10.jpg'},
      {url:'https://i.ibb.co/5nKdY4n/11.jpg'},
      {url:'https://i.ibb.co/Ln0rcCg/12.jpg'},
      {url:'https://i.ibb.co/5KdJ1sT/13.jpg'},
      {url:'https://i.ibb.co/M993Qrg/14.jpg'},
      {url:'https://i.ibb.co/wZHPgXh/15.jpg'},
      {url:'https://i.ibb.co/3fFRNsX/16.jpg'},
   
    ]
  },
  {
    id: 10,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'იყიდება ბინა ვაკეში, ამირეჯიბის ქუჩა',
    description:
      'იყიდება გარემონტებული 2 ოთახიანი ბინა ავეჯით 66კვმ',
    image: 'https://i.ibb.co/C6LTPjg/1.jpg',
    imageLg: 'https://i.ibb.co/C6LTPjg/1.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ვაკე, ამირეჯიბის ქუჩა',
    bedrooms: '2',
    bathrooms: '1',
    surface: '66 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: true,
    },
    price: '160 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/C6LTPjg/1.jpg'},
      {url:'https://i.ibb.co/Jsgb1Vk/2.jpg'},
      {url:'https://i.ibb.co/TBYmz9h/3.jpg'},
      {url:'https://i.ibb.co/dQnHS7h/4.jpg'},
      {url:'https://i.ibb.co/8Br6n6H/5.jpg'},
      {url:'https://i.ibb.co/LnybH46/6.jpg'},
      {url:'https://i.ibb.co/q5qjpx9/7.jpg'},
      {url:'https://i.ibb.co/qNs3ffr/8.jpg'},
      {url:'https://i.ibb.co/xXc894F/9.jpg'},
      {url:'https://i.ibb.co/3rjyX5s/10.jpg'},
      {url:'https://i.ibb.co/zszBfxy/11.jpg'},
      {url:'https://i.ibb.co/ZchvPxP/12.jpg'},
       
    ]
  },
  {
    id: 11,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'იყიდება საბურთალოზე, კარტოზიას ქუჩა',
    description:
      'იყიდება 3 ოთახიანი გარემონტებული ბინა 86კვმ. ავეჯით და ტექნიკით. 22/28 სართული',
    image: 'https://i.ibb.co/6YWhJW6/1.jpg',
    imageLg: 'https://i.ibb.co/6YWhJW6/1.jpg',
    country: 'თბილისი',
    address: 'თბილისი, საბურთალო, კარტოზიას ქუჩა',
    bedrooms: '3',
    bathrooms: '1',
    surface: '86 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '1',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: true,
    },
    price: '185 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/6YWhJW6/1.jpg'},
      {url:'https://i.ibb.co/Sy3g6JP/2.jpg'},
      {url:'https://i.ibb.co/Q9qG0vX/3.jpg'},
      {url:'https://i.ibb.co/K6gy1TV/4.jpg'},
      {url:'https://i.ibb.co/XY60Hvp/5.jpg'},
      {url:'https://i.ibb.co/yQDBTRW/6.jpg'},
      {url:'https://i.ibb.co/njqJhrD/7.jpg'},
      {url:'https://i.ibb.co/C71zmty/8.jpg'},
      {url:'https://i.ibb.co/4WZC0mk/9.jpg'},
      {url:'https://i.ibb.co/YRbBYF8/10.jpg'},
      {url:'https://i.ibb.co/dfHQNs5/11.jpg'},
      {url:'https://i.ibb.co/2MG76Fw/12.jpg'},
      {url:'https://i.ibb.co/ctRsTzL/13.jpg'},
      {url:'https://i.ibb.co/4g1pZXn/14.jpg'},
      {url:'https://i.ibb.co/2Yw4wym/15.jpg'},
       
    ]
  },
  {
    id: 12,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'იყიდება ვაკეში, თამარაშვილის ქუჩა',
    description:
      'იყიდება ახალაშენებულ კორპუსში 3 ოთახიანი, დიზაინერული რემონტით ძვირადღირებული მასალით.100კვმ. 25/28 სართული. კერამოგრანიტის იატაკი, მიუნხენის შელესილი შპალერი. კარები ალუმინის ჩარჩოთი, ფარუოლი საკეტები ხმაურის იზოლაციით. შავი სარკისებრი ჭერი, ჩაშენებული შავი აკრილის სამზარეულო BLUM მექანიზმებით, ტექნიკით, ინდუქციური ქურა, ჭურჭლის სარეცხი მანქანა 12 პერსონაზე. ელექტრო ღუმელი მიკროტალღური, ჩაშენებული მაცივარი, საძინებლის კომპლექტი, მაგიდები სკამები სავარძლები. თბილისის პანორამული ხედით. ',
    image: 'https://i.ibb.co/jk0dz79/10.jpg',
    imageLg: 'https://i.ibb.co/jk0dz79/10.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ვაკე, თამარაშვილის ქუჩა',
    bedrooms: '3',
    bathrooms: '2',
    surface: '100 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '2',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: true,
    },
    price: '320 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/MDbRv22/1.jpg'},
      {url:'https://i.ibb.co/5MVp44Z/2.jpg'},
      {url:'https://i.ibb.co/0QM58KK/3.jpg'},
      {url:'https://i.ibb.co/ZJ5h1KV/4.jpg'},
      {url:'https://i.ibb.co/Sm64fVm/5.jpg'},
      {url:'https://i.ibb.co/w0fYqcW/6.jpg'},
      {url:'https://i.ibb.co/FgGTDVb/7.jpg'},
      {url:'https://i.ibb.co/FzBnyTG/8.jpg'},
      {url:'https://i.ibb.co/xfN0T3G/9.jpg'},
      {url:'https://i.ibb.co/jk0dz79/10.jpg'},
      {url:'https://i.ibb.co/0rQXQhJ/11.jpg'},
      {url:'https://i.ibb.co/MG2mp71/12.jpg'},
      {url:'https://i.ibb.co/DY4FK1T/13.jpg'},
      {url:'https://i.ibb.co/QQ49bpG/14.jpg'},
      {url:'https://i.ibb.co/CKJWHCm/15.jpg'},
      {url:'https://i.ibb.co/ZKXZJ0b/16.jpg'},
      {url:'https://i.ibb.co/17mQTVM/17.jpg'},
      {url:'https://i.ibb.co/Q9QwtcP/18.jpg'},
      {url:'https://i.ibb.co/1RzKNzX/19.jpg'},
      {url:'https://i.ibb.co/gW13DQN/20.jpg'},
      {url:'https://i.ibb.co/zF1JTNh/21.jpg'},
      {url:'https://i.ibb.co/bWgsFKy/22.jpg'},
      {url:'https://i.ibb.co/j6NGnsG/23.jpg'},
       
    ]
  },
  {
    id: 13,
    type: 'ბინა',
    status: 'იყიდება',
    name: 'იყიდება ვაკეში, თამარაშვილის ქუჩა',
    description:
      'იყიდება ბინა თამარაშვილზე ახალ სახლში 204 კვ ფასი 570000$ ევრორემონტო ავეჯით ტექნიკით უცხოვრებელი, 4 ოთახი , 3 სვ წერტილი 17/24 სართულზე',
    image: 'https://i.ibb.co/vXSYvX9/1.jpg',
    imageLg: 'https://i.ibb.co/vXSYvX9/1.jpg',
    country: 'თბილისი',
    address: 'თბილისი, ვაკე, თამარაშვილის ქუჩა',
    bedrooms: '4',
    bathrooms: '3',
    surface: '204 კვ.მ',
    details: {
      repair: 'ახალი გარემონტებული',
      balcony: true,
      toilet: '3',
      heat: 'ცენტრალური',
      parking: true,
      furniture: true,
      elevator: true,
    },
    price: '570 000',
    agent: {
      image: Agent2,
      name: 'თინათინ დგებუაძე',
      phone: '+995 598 99 18 18',
      email: 'tikadgebuadze@yahoo.com'
    },
   slides: [
      {url: 'https://i.ibb.co/vXSYvX9/1.jpg'},
      {url:'https://i.ibb.co/yQ1LBT5/2.jpg'},
      {url:'https://i.ibb.co/wRdHLKh/3.jpg'},
      {url:'https://i.ibb.co/fkfhvcb/4.jpg'},
      {url:'https://i.ibb.co/QCtJqHd/5.jpg'},
      {url:'https://i.ibb.co/k1QfSfg/6.jpg'},
      {url:'https://i.ibb.co/WpfKjGw/7.jpg'},
      {url:'https://i.ibb.co/1q6hjtp/8.jpg'},
      {url:'https://i.ibb.co/Jnk5dZ2/9.jpg'},
      {url:'https://i.ibb.co/j6YDzTL/10.jpg'},
      {url:'https://i.ibb.co/rwtYM0x/11.jpg'},
      {url:'https://i.ibb.co/Hp2bcZK/12.jpg'},
      
      
       
    ]
  },
 
];
