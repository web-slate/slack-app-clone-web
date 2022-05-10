import React from 'react'
import styles from './ChannelMembers.styles.css'
import userImg from '../../../../../static/images/user.png'
import userIconImg from '../../../../../static/images/usericon.png'
import userIconEven from '../../../../../static/images/usericon-even.png'

function ChannelMembers({ members = [] }) {
  return (
    <div className={styles.channelMembers}>
      <img src={userImg} alt="user1" width="100%" height="100%" className={styles.memberImg}/>
      
      {members && members.length >1 &&
        members.map((member, index) => {
          if(index <=1)
            return (
              <img
                key={index}
                src={index % 0 ? userIconEven : userIconImg}
                alt={member.username}
                title={member.username}
                width="100%"
                height="100%"
                className={styles.memberImg}
              />
            )
          return ''
        })}

      <span className={styles.memberCount}> {members.length} </span>
    </div>
  )
}

export default ChannelMembers
