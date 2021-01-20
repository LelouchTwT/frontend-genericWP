import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { useCallback, useRef } from 'react';
import axios from 'axios';

function WpForm(props) {
  const inputTitle = useRef(null);
  const inputResume = useRef(null);
  const inputContent = useRef(null);
  const inputImage = useRef(null);
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    let title = inputTitle.current.value
    let resume = inputResume.current.value
    let content = inputContent.current.value
      .then(function (response) {
        console.log('salvo com sucesso')
      });

    /* axios.post('http://localhost:3003/api/main',
      {
        title: title,
        resume: resume,
        content: content
      })
      .then(function (response) {
        console.log('salvo com sucesso')
      }); */
  }, [])
  return (
    <form className="wpForm" onSubmit={handleSubmit}>
      <Grid cols="12 9 10">
        <label htmlFor="title"><input id="title" name="title" ref={inputTitle} type="text" /></label>
        <label htmlFor="resume"><input id="resume" name="resume" ref={inputResume} type="text" /></label>
        <label htmlFor="content"><textarea id="content" name="content" ref={inputContent} cols="30" rows="10"></textarea></label>
        <label htmlFor="image"><input id="image" name="imgPath" accept="image/*" ref={inputImage} type="file" /></label>
        <input type="submit" value="Submit" />
      </Grid>
    </form>
  )
}
export default WpForm;