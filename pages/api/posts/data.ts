type postData = {
  id: number,
  profile: {
    id: number,
    pic: string,
    name: string
  },
  liked: boolean,
  date: string,
  picture: string,
  title: string,
  content: string,
  isProduct: boolean,
  price: null | number
}[];

const data: postData = [{
  id: 1,
  profile: {
    id: 1,
    pic: "/img/profile_pic/betopicanco.jpg",
    name: "betopicanco"
  },
  liked: false,
  date: '24/03/2022',
  picture: '/img/capas/batman.jpg',
  title: 'Eu com 10 anos quando brincava de pique-esconde:',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nulla facilisi cras fermentum odio eu feugiat.',
  isProduct: false,
  price: null
},{
  id: 2,
  profile: {
    id: 2,
    pic: "/img/profile_pic/jbl-logo-2.png",
    name: "jbl_oficial"
  },
  liked: false,
  date: '24/03/2022',
  picture: '/img/capas/fone-jbl.png',
  title: 'Fone de ouvido Over Ear JBL T710',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales. Vitae sapien pellentesque habitant morbi tristique senectus et. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Adipiscing at in tellus integer feugiat scelerisque. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Tristique senectus et netus et malesuada. A diam maecenas sed enim ut sem viverra aliquet eget.',
  isProduct: true,
  price: 299.99
}, {
    id: 3,
    profile: {
      id: 3,
      pic: "/img/profile_pic/logo_besouroz.jpg",
      name: "besouroz"
  },
    liked: false,
    date: '24/03/2022',
    picture: '/img/capas/cuphead.jpg',
    title: 'Cuphead foi renovada para a segunda temporada e estreia ainda em 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isProduct: false,
    price: null
}, {
  id: 4,
  profile: {
    id: 1,
    pic: "/img/profile_pic/betopicanco.jpg",
    name: "betopicanco"
  },
  liked: false,
  date: '17/05/2022',
  picture: '/img/capas/alexa.jpg',
  title: 'Alexa',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa enim. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. In dictum non consectetur a erat nam at. Et tortor at risus viverra adipiscing at in.',
  isProduct: true,
  price: 399.99
}];

export default data;