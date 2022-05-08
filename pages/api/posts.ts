export default function posts(req: any, res: any) {
  res.status(200).json({
    "posts": [
      {
        "id": 1,
        "profile": {
            "pic": "/img/profile_pic/betopicanco.jpg",
            "name": "betopicanco"
        },
        "liked": false,
        "date": "24/03/2022",
        "picture": "/img/capas/batman.jpg",
        "title": "Eu com 10 anos quando brincava de pique-esconde:",
        "isProduct": false
      }, {
        "id": 2,
        "profile": {
            "pic": "/img/profile_pic/jbl-logo-2.png",
            "name": "jbloficial"
        },
        "liked": false,
        "date": "24/03/2022",
        "picture": "/img/capas/fone-jbl.png",
        "title": "Fone de ouvido Over Ear JBL T710",
        "isProduct": true
      }
    ]
  });
}