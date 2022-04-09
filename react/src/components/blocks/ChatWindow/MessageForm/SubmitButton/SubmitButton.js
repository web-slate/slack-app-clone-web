import React from 'react'
import styles from './SubmitButton.styles.css'

// i18n
import { useI18n } from '@/i18n'


import sendImg from '../../../../../static/images/send.svg'
import plusImg from '../../../../../static/images/plus.svg'
import videoImg from '../../../../../static/images/video.svg'
import micImg from '../../../../../static/images/mic.svg'
import smileyImg from '../../../../../static/images/smiley.svg'
import atImg from '../../../../../static/images/at.svg'
import fontImg from '../../../../../static/images/aafont.svg'


function SubmitButton() {
  
  const { formatMessage } = useI18n()

  const getToolBarButtonImages = [
    {
       sourceImage: plusImg,
       alternativeTextLocaleKey: 'plus',
       styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: videoImg,
      alternativeTextLocaleKey: 'video',
      styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: micImg,
      alternativeTextLocaleKey: 'mic',
      styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: smileyImg,
      alternativeTextLocaleKey: 'emoji',
      styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: atImg,
      alternativeTextLocaleKey: 'at',
      styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: fontImg,
      alternativeTextLocaleKey: 'font',
      styledClassName: 'footerToolbarImg'
    },
    {
      sourceImage: sendImg,
      alternativeTextLocaleKey: 'send',
      styledClassName: 'sendImg'
    }
  ]

  return (
    <>
      <div class={styles.footerToolBar}>
          {getToolBarButtonImages.map(({ sourceImage, alternativeTextLocaleKey, styledClassName }) => {
            return <img src={sourceImage} alt={formatMessage({ id: alternativeTextLocaleKey })} className={styles[styledClassName]} />
          })}
      </div>
    </>
  )
}

export default SubmitButton
