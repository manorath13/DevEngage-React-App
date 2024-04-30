import  { useCallback, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Navbar from './Navbar'
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './Result';
import './Codepen.css'
import { Navigate } from 'react-router-dom';


function Codepen() {
  //* create three usestate 
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');

  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, [])

  //* Css onchange handler 
  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value)
  }, []);

  //* JavaScript onchange handler 
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value)
  }, []);

  //* Create Html Document
  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `
  const divStyle = {
    display: 'flex', /* Set the display to flex */
    justifyContent: 'space-around', /* Adjust as needed: space-around, space-between, center, etc. */
    alignItems: 'center', /* Adjust as needed: flex-start, flex-end, center, baseline, stretch */
    background: 'black',
    padding: '20px',
    // Additional div styles...
  };

  const handleExitButtonClick = () => {
		window.location.href = '/';
	};
  const x=localStorage.getItem("User");
  if (!x) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <button className='Exit'
			onClick={handleExitButtonClick}
			>X</button>
      {/* Navbar  */}
      <h1 style={{fontSize: '5vw', marginBottom: '3vw'}}>CodePen editor</h1>

      {/* main content  */}
      <div style={{ width :'1250px' }}>
        {/* Editor  */}
        <div style={divStyle} >
          {/* Html Editor */}
          <div className="CodeMirror-scroll" style={{width: '400px', marginLeft :'5px', marginRight:'5px'}}>
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div className="CodeMirror-scroll" style={{width: '400px', marginLeft :'5px', marginRight:'5px'}}>
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div className="CodeMirror-scroll" style={{width: '400px', marginLeft :'5px', marginRight:'5px'}}>
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        <Result
        srcCode={srcCode}
        />
      </div>
    </div>
  )
}

export default Codepen;