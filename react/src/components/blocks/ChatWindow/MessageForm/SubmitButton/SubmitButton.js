import React from 'react'
import styles from './SubmitButton.styles.css'

import sendImg from '../../../../../static/images/send.svg'
import plusImg from '../../../../../static/images/plus.svg'
import videoImg from '../../../../../static/images/video.svg'
import micImg from '../../../../../static/images/mic.svg'
import smileyImg from '../../../../../static/images/smiley.svg'
import atImg from '../../../../../static/images/at.svg'
import fontImg from '../../../../../static/images/aafont.svg'


function SubmitButton() {
  return (
    <>
      <div class={styles.footerToolBar}>
      <img src={plusImg} alt="send" className={styles.footerToolbarImg} />
      <img src={videoImg} alt="video" className={styles.footerToolbarImg} />
      <img src={micImg} alt="mic" className={styles.footerToolbarImg}/>
      <img src={smileyImg} alt="smiley" className={styles.footerToolbarImg}/>
      <img src={atImg} alt="at" className={styles.footerToolbarImg} />
      <img src={fontImg} alt="font" className={styles.footerToolbarImg}/>
      <img src={sendImg} alt="send"  className={styles.sendImg}/>
      </div>
    </>
  )
}

export default SubmitButton
