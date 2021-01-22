import axios from 'axios';
import { useEffect, useState } from 'react';
function WpManager() {
  var [getResponse, setGetResponse] = useState();
  async function getNoticias() {
    await axios.get('http://172.25.153.178:3003/api/main')
      .then(response => {
        setGetResponse(response.data);
      })
  }
  useEffect(() => {
    getNoticias()
  }, [])
  return (
    <div className="wpManager">
      {getResponse && getResponse.map((noticia) => {
        return (
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: noticia.title }}></h1>
            {/* <span>{noticia.resume}</span> */}
            {/* <img src={`http://172.25.153.178:3030/Generic%20Wp/backend/src/uploads/${noticia.imgPath}`} alt="" /> */}
            {/* <span dangerouslySetInnerHTML={{ __html: noticia.content }}></span> */}
            <div>
              <button onClick={e => console.log(e)}>
                {noticia.status ? <div><i class="fas fa-download"></i><span>Despublicar</span></div> : <div><i class="fas fa-upload"></i><span>Publicar</span></div>}
              </button>
              <button onClick={e => console.log(e)}><i class="fas fa-pencil-alt"></i></button>
              <button onClick={e => console.log(e)}><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        )
      })}
    </div >
  )
}
export default WpManager;