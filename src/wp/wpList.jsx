import axios from 'axios';
import { useEffect, useState } from 'react';
function WpList() {
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
    <div className="wpList">
      {getResponse && getResponse.map((noticia) => {
        if (noticia.status) {
          return (
            <div>
              <h1 dangerouslySetInnerHTML={{ __html: noticia.title }}></h1>
              {/* <span>{noticia.resume}</span> */}
              <img src={`http://172.25.153.178:3030/Generic%20Wp/backend/src/uploads/${noticia.imgPath}`} alt="" />
              <span dangerouslySetInnerHTML={{ __html: noticia.content }}></span>
            </div>
          )
        }
      })}
    </div>
  )
}
export default WpList;