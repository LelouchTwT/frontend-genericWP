import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
var $ = require("jquery")
function WpManager() {
  const URL = 'http://172.25.153.166:3003/';
  var [getResponse, setGetResponse] = useState();
  const [inputTitle, setInputTitle] = useState("");
  const [inputResume, setInputResume] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [noticiaId, setNoticiaId] = useState("");
  const [inputPublish, setInputPublish] = useState(false);
  async function getNoticias() {
    await axios.get('http://172.25.153.166:3003/api/main')
      .then(response => {
        setGetResponse(response.data);
      })

  }
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    axios.put(`${URL}api/main/${noticiaId}`, {
      title: inputTitle,
      resume: inputResume,
      content: inputContent,
      status: inputPublish
    })
      .then(function (response) {
        console.log('salvo com sucesso')
        refresh();
      });

    /* fetch(`${URL}upload`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        fetch(`${URL}api/main`, {
          method: 'POST',
          body: {
            title: inputTitle,
            resume: inputResume,
            content: inputContent,
            imgPath: ((data.files.image.path).split('\\')[2])
          }
        })
          .then(response => response.json())
          .then(data => {

            console.log(data)
            refresh();
          })
          .catch(error => {
            console.error(error)
          })
      })
      .catch(error => {
        console.error(error)
      }) */
  }, [inputTitle, inputResume, inputContent, refresh])
  function handleEdit(noticia) {
    setInputTitle(noticia.title);
    setInputResume(noticia.resume);
    setInputContent(noticia.content);
    setNoticiaId(noticia._id);
    document.querySelector('.wpManagePostsForm').classList.remove("remove");
    document.querySelector('.bgFilter').classList.remove("remove");
  }
  function refresh() {

    setInputTitle("");
    setInputResume("");
    setInputContent("");
    setNoticiaId("");
    setInputPublish(false);
    document.querySelector('.wpManagePostsForm').classList.add("remove");
    document.querySelector('.bgFilter').classList.add("remove");


  }
  function handleRemove(noticia, fatherDiv) {
    axios.delete(`http://172.25.153.166:3003/api/main/${noticia._id}`).then(resp => getNoticias())
  }
  function handlePublish(noticia) {
    axios.put(`http://172.25.153.166:3003/api/main/${noticia._id}`, { ...noticia, status: !noticia.status }).then(resp => console.log(resp))
  }
  useEffect(() => {
    getNoticias()
  }, [getResponse])
  return (
    <div className="wpManager">
      {getResponse && getResponse.map((noticia) => {
        return (
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: noticia.title }}></h1>
            {/* <span>{noticia.resume}</span> */}
            {/* <img src={`http://172.25.153.178:3030/Generic%20Wp/backend/src/uploads/${noticia.imgPath}`} alt="" /> */}
            {/* <span dangerouslySetInnerHTML={{ __html: noticia.content }}></span> */}
            <div id="noticia">
              <button onClick={e => handlePublish(noticia)}>
                {noticia.status ? <div><i class="fas fa-download"></i><span className="unpublish">Despublicar</span></div> : <div><i class="fas fa-upload"></i><span className="publish">Publicar</span></div>}
              </button>
              <button onClick={e => handleEdit(noticia)}><i class="fas fa-pencil-alt"></i></button>
              <button onClick={e => handleRemove(noticia, e.target.parentNode.parentNode)}><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        )
      })}
      <form className="wpManagePostsForm remove" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo:
        <input id="title" name="title" onChange={e => setInputTitle(e.target.value)} value={inputTitle} type="text" />
          </label>
          <label htmlFor="resume">Resumo:
        <input id="resume" name="resume" onChange={e => setInputResume(e.target.value)} value={inputResume} type="text" />
          </label>
          <label htmlFor="content">
            Conteudo:
          <textarea id="content" name="content" onChange={e => setInputContent(e.target.value)} value={inputContent} cols="30" rows="10"></textarea>
          </label>
          <div><input type="submit" value="Enviar" /></div>
        </div>
      </form>
      <div className="bgFilter remove"></div>
    </div >
  )
}
export default WpManager;