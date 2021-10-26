import React from 'react'
import styles from './StickyNote.module.css'
const StickyNote = (props) => {
  return <li className={styles.note}>{props.children}</li>
}

export default StickyNote
