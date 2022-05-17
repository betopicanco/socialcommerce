import CartItem from "./CartItem";
import Continue from "./Continue";
import PostContext from "../../Context/PostProvider";

const CartMain = () => {
  const cartItems = [
    {
      id: 2,
      profile: {
          pic: '/img/profile_pic/jbl-logo-2.png',
          name: 'jbloficial'
      },
      date: '24/03/2022',
      picture: '/img/capas/fone-jbl.png',
      title: 'Fone de ouvido Over Ear JBL T710',
    }
  ];
  const context = {
    id: 2,
    profile: {
        pic: '/img/profile_pic/jbl-logo-2.png',
        name: 'jbloficial'
    },
    date: '24/03/2022',
    picture: '/img/capas/fone-jbl.png',
    title: 'Fone de ouvido Over Ear JBL T710',
  };
  
  return (
    <PostContext.Provider value={context}>
      <main className="h-screen">
        {cartItems.map((item) => (
          <>
            <div className="px-2">
              <CartItem 
                id={item.id}
                profile={item.profile}
                date={item.date}
                picture={item.picture}
                title={item.title}
              />
            </div>

            <hr className="border-neutral-700"/>
          </>
        ))}

        <Continue total={398.98}/>
      </main>
    </PostContext.Provider>
  )
}

export default CartMain;