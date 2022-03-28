import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/userSlice';
import Input from '../inputFields/input';
import './Edit.css'

const EditPage = (props) => {
    const {setEdit} = props;
    const avaUrl = [
        'https://i.redd.it/snoovatar/avatars/d5c892ac-9007-4de3-9bf6-eb4bc4636971.png',
        'https://i.redd.it/snoovatar/avatars/cea0fc76-b86c-4a2d-9b47-1d4752c6f9c5.png',
        'https://i.redd.it/snoovatar/avatars/81400f9d-ed96-4fbf-ac9b-5e3a28e098c9.png',
        "https://kenh14cdn.com/203336854389633024/2022/3/1/nguoidoi-1646152343119133480980.jpeg",
        'https://vcdn-giaitri.vnecdn.net/2022/03/07/the-batman-robert-pattinson-jp-5567-9569-1646616004.jpg',
        'https://i.redd.it/snoovatar/avatars/40a116b0-1329-46f0-84d9-663a3968a7d0.png',
        'https://i.redd.it/snoovatar/avatars/3da79110-95f9-45ce-9e7e-274115afcfd5.png',
        'https://i.redd.it/snoovatar/avatars/a1cff43c-1162-41c6-bd27-37a0c5e5c17c.png',
        'https://i.redd.it/snoovatar/avatars/ee530a9d-3388-4529-9b19-98b91707c74a.png',
    ];
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const [name,setName] = useState([user.name]);
    const [age,setAge] = useState(user.age);
    const [about,setAbout] = useState(user.about);
    const [theme,setTheme] = useState();
    const [url,setUrl] = useState(user.avaUrl);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setEdit(false);
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme,
        };
        dispatch(update(updatedUser));
    };
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <section className="edit-container">
                <button className="close"> SAVE </button>
            
            <div className="edit-profile"> Edit Profile </div>
            <div className="input-container">
                <Input label="Display name" data={user.name} setData={setName} />
                <Input label="Age" data={user.age} setData={setAge} />
                <Input inputType="textarea" classStyle="input-about" label="About" data={user.about} setData={setAbout}/>
            <label> Profile picture </label>
            <div className='input-image-container'>
                {avaUrl.map((url)=>{
                    return(
                        <>
                        <img onClick={(e)=>setUrl(e.target.src)} src={url} className='input-image'  alt=''></img>
                        </>
                    )
                })}
            </div>
            <div className='theme-container'>
                <input type = 'color' className='theme-color' onChange={(e)=>setTheme(e.target.value)} ></input>
            </div>
            </div>
            </section>
        </form>
        </>
     );
}
 
export default EditPage
