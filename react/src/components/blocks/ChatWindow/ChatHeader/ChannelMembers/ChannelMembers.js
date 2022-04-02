import React from 'react'
import styles from './ChannelMembers.styles.css'
import userImg from '../../../../../static/images/user.png'
import userIconImg from '../../../../../static/images/usericon.png'

function ChannelMembers() {
  return (
      <>
      <div className={styles.channelMembers}>
        <img src={userImg} alt="user1" width="100%" height="100%" className={styles.memberImg}/>
        <img src={userIconImg} alt="user1" width="100%" height="100%" className={styles.memberImg}/>
        <span className={styles.memberCount}> 3 </span>
      </div>
      </>
      
  )
}

export default ChannelMembers
