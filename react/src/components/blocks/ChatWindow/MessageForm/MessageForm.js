import React, { useState } from 'react'
import styles from './MessageForm.styles.css'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// i18n
import { useI18n } from '@/i18n'


function MessageForm(props) {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const { channelName } = props   
  const { formatMessage } = useI18n()

  return (
    <>
      <div className={styles.feedForm}>
      <Editor
          placeholder={formatMessage({ id: 'send_a_message_to_#' })} 
          editorStyle={{ backgroundColor: "#fff" }} 
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName={styles.WrapperClass}
          editorClassName={styles.EditorClass}
          toolbarClassName={styles.ToolbarClass}
          toolbar={{
            options: ["inline", "link", "list"],
            inline: {
              options: ["bold", "italic", "strikethrough", ],
            },
            link: { 
              options: ["link"],
             },
            list: { 
              options: ["ordered", "unordered"],
             },
           
          }}
        
        />
        <div class={styles.footerToolBar}>
        <button type="submit" class="btn-borderless button">
            <FontAwesomeIcon icon={faAngleRight} />      
        </button>
        </div>
      </div>
     
    </>
  )
}

export default MessageForm
