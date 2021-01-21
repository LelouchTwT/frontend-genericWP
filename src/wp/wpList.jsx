import axios from 'axios';
import { useEffect, useState } from 'react';
function WpList() {
  var [getResponse, setGetResponse] = useState();
  async function getNoticias() {
    await axios.get('http://localhost:3003/api/main')
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
        return (
          <div>
            <div>{noticia.title}</div>
            <div>{noticia.resume}</div>
            <div>{noticia.content}</div>
            <img src={`http://localhost:3030/dynamic%20page/backend/src/uploads/${noticia.imgPath}`} alt="" />
          </div>
        )
      })}
    </div>
  )
}
export default WpList;