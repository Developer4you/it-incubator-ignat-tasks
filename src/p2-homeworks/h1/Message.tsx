import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message}>
            <div>
                <img src={props.avatar} alt="Avatars_image" />
            </div>
            <div className={styles.ponytail}>
            </div>
            <div className={styles.messageField}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.messagesText}>{props.message}</div>
                <time>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
