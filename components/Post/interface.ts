interface PostInterface {
  id: number
  profile: {
    pic: string,
    name: string
  },
  date: string,
  picture: string,
  title: string,
  liked: boolean,
  isProduct: boolean
}

export default PostInterface;