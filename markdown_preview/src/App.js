import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  // Markdown parser could be interfere with string opening, zero-width char (in some editors), so i cleared all unnecessary spaces
  const [text, setText] = useState(() =>
`
# Heading 1
## Heading 2
[github_me](https://github.com/ntien-281)
\`some code\`
\`\`\`
{
  "firstName": "Tien",
  "lastName": "Ly",
  "age": 19
}
\`\`\`

- list item 1
- list item 2
- list item 3

> 'quote' someone definitely said this

![alt text](image.jpg)

**bold text**
`);

  return (
    <div className="App">
      <label for="editor" className='section-heading'>Type your own to see the magic: </label>
      <textarea 
        id="editor"
        name="editor" 
        onChange={(event) => {setText(event.target.value);}}
        value={text}
        cols="50"
        rows="20"
        autoFocus="true"
        spellcheck="false"
      ></textarea>
      <span className="section-heading">This is all you:</span>
      <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text, { breaks: true }),
        }}
      ></div>
    </div>
  );
}

export default App;
