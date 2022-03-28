import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../inputFields/input";
import "./post.css"

const MakePost = (props) => {
    const {setOpen} = props;
    const [title,setTitle] = useState('add a title');
    const dispatch = useDispatch();
    const [desc,setDesc] = useState('Description');
    const [selectedIdx,setSelectedIdx] = useState(0);
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"];
    const handlePost = ()=>{
          setOpen(false);
          const newPost = {
              title: title,
              description: desc,
              tag: selectedIdx,
          };
          dispatch(createPost(newPost))
    }
    return ( 
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost} >
                   Post
                </p>
            </div>
            <Input label='Title' inputType = "textarea" data={title} setData={setTitle} classStyle = 'makepost-title'/>
            <Input label='Description' inputType = "textarea" data={desc} setData={setDesc} classStyle = 'makepost-desc'/>
            <label> Tags </label>
                <div className="makepost-tags">
                    {tags.map((tag,idx)=>{
                        return(
                            <button key={idx} className={`${selectedIdx === idx 
                                    ? `makepost-tags-selected` 
                                    : `makepost-tags-${tag}` }`} 
                                onClick={()=>setSelectedIdx(idx)} 
                                > 
                                    {tag}  
                                </button>
                        )
                    })}
                </div>

        </section>
     );
}
 
export default MakePost;