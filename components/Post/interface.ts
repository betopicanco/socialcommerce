interface PostInterface {
  id: number
  profile: number,
  date: string,
  picture: string,
  title: string,
  content: string,
  liked: boolean,
  isProduct: boolean,
  price: number | null
}

export default PostInterface;