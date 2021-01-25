import { useCallback, useState, useRef } from 'react';
import axios from 'axios';
var $ = require("jquery")

function WpForm(props) {
  const URL = 'http://172.25.153.166:3003/';
  const [inputTitle, setInputTitle] = useState("");
  const [inputResume, setInputResume] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputPublish, setInputPublish] = useState(false);
  const [inputImage, setInputImage] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const files = inputImage.target.files
    const formData = new FormData()
    formData.append('image', files[0])
    axios.post(`${URL}upload`, formData)
      .then(function (response) {
        console.log(response)
        axios.post(`${URL}api/main`, {
          title: inputTitle,
          resume: inputResume,
          content: inputContent,
          status: inputPublish,
          imgPath: ((response.data.files.image.path).split('\\')[2])
        })
          .then(function (response) {
            console.log('salvo com sucesso')
            refresh();
          });

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
  }, [inputTitle, inputResume, inputContent, inputImage, refresh])

  function refresh() {

    setInputTitle("");
    setInputResume("");
    setInputContent("");
    setInputPublish(false);

    $(document).ready(function () {
      $('#image').val("");
    });

  }

  return (
    <form className="wpForm" onSubmit={handleSubmit}>
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
        <label id="publishOnSubmit" htmlFor="status">
          <input id="status" name="status" onChange={e => setInputPublish(e.target.checked)} checked={inputPublish} type="checkbox" />
          Publicar ao enviar
          </label>
        <label id="imageLabel" htmlFor="image">
          Imagem:
          <input id="image" name="imgPath" accept="image/*" onChange={e => setInputImage(e)} type="file" />
        </label>
        <div><input type="submit" value="Enviar" /></div>
      </div>
    </form>
  )
}
export default WpForm;