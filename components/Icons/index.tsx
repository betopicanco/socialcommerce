import ProductArea from "../Post/ProdutctArea"
import CommentCloud from "./CommentCloud"
import Heart from "./Heart"
import Share from "./Share"

interface IconsProps {
    liked: boolean,
    comment: boolean,
    setLiked: (value:boolean) => void,
    setComment: (value:boolean) => void,
    isProduct?: boolean | false,
}

const Icons = (props: IconsProps) => {

    const styles = {
        icons: `
            stroke-1 stroke-yellow-300 mr-2
            h-6 w-6
        `,
        iconsFill: `
            fill-yellow-300 
            h-6 w-6
        `
    }

    const liked: boolean = props.liked ?? false

    return (
        <div className={`w-full flex justify-between my-2`}>
          <div className={`flex`}>
            <Heart 
              styles={styles} 
              liked={liked} 
              setLiked={props.setLiked}
            />

            <CommentCloud 
              style={styles.icons} 
              onClick={() => props.setComment?.(!props.comment)}
            />

            <Share style={styles.icons}/>
          </div>
          {props.isProduct && (
            <div className={`flex`}>
              <ProductArea />
            </div>
          )}
        </div>
    )
}

export default Icons 