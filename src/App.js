
import { useState } from 'react';
import './App.css';
import EditPage from './Components/Edit/EditPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MakePost from './Components/Post/MakePost';
import Posts from './Components/Post/Posts';


function App() {
  const [isEdit,setEdit] = useState(false);
  const [isOpenPost,setOpen] = useState(false);
  return (
    <div className="App">
      {isEdit ? 
      <EditPage setEdit={setEdit} /> 
      : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit}/>
        <div className='post-container'>
          <Posts/>
        </div>
        <Footer isOpenPost={isOpenPost} setOpen={setOpen} ></Footer>
        </>
      ) : (
        <>
        <Header isEdit={isEdit} setEdit={setEdit}></Header>
        <MakePost setOpen={setOpen}></MakePost>
        </>
      )}

    
    </div>
  );
}

export default App;
