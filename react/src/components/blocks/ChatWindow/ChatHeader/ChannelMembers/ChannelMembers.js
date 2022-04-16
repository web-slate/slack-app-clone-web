import React from 'react'
import styles from './ChannelMembers.styles.css'
import userImg from '../../../../../static/images/user.png'
import userIconImg from '../../../../../static/images/usericon.png'

function ChannelMembers({ members = [] }) {
  return (
    <div className={styles.channelMembers}>
      {members &&
        members.map((member, index) => {
          return (
            <img
              key={index}
              src={index % 2 ? userImg : userIconImg}
              alt={member.username}
              title={member.username}
              width="100%"
              height="100%"
              className={styles.memberImg}
            />
          )
        })}
      <span className={styles.memberCount}> {members.length} </span>
    </div>
  )
}

export default ChannelMembers
