import { Children } from "react";
import { createContext } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ Children }) => {
  const [laoding, setLaoding] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);

  return (
    <PostContext.Provider value={{laoding,setLaoding,post, setPost,feed, setFeed}}>
        {Children}
    </PostContext.Provider>
  )
};
