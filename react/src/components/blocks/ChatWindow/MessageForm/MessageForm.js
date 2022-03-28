import React, { useState } from 'react'
import styles from './MessageForm.styles.css'

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';



function MessageForm() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  return (
    <>
      <div className={styles.feedForm}>
      <Editor
          editorState={editorState}
          onChange={setEditorState}
          wrapperClassName={styles.WrapperClass}
          editorClassName={styles.EditorClass}
          toolbarClassName={styles.ToolbarClass}
        />
      </div>
     
    </>
  )
}

export default MessageForm
