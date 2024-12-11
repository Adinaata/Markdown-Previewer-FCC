import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

function App() {
  const [text, setText] = useState(
    `# h1
## h2
[title](https://www.example.com)
\`inline code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- [ ] Write the press release
- [x] Update the website
- [ ] Contact the media
> blockquote
![alt text](/vite.svg)
**bold text**`
  );

  return (
    <div className="container">
      <h2>Text Editor</h2>
      <textarea
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <h2>Preview</h2>
      <div id="preview">
        <Markdown remarkPlugins={[remarkGfm, remarkBreaks]}>{text}</Markdown>
      </div>
    </div>
  );
}

export default App;
