import { useState } from 'react'
import './App.css';
import ReactMarkdown from "react-markdown";


const defaulteMarkdown =`
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
Heres some code,\` <div></div>\`, between 2 backticks.

\`\`\`
//this is multi-line code:
function greet() {
    console.log('Hello, world!');
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
### And feel free to go crazy crossing stuff out.

There's also [links](https://www.freecodecamp.org/), and

>Block Quotes!



- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
![image](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fsoftware-source-code-programming-on-computer-634574354&psig=AOvVaw0pHG09UvPtGe4d3ba6-Vbe&ust=1723052902534000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDbsqn04IcDFQAAAAAdAAAAABAE)

`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaulteMarkdown)

  return (
    <>
      <div>
        <div className="boxes-container">
          <div>Editor</div>
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div>Preview</div>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
