import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import projectStyles from '../style.module.css'
import styles from './positioning-multiple-elements.module.css'

const PositioningMultipleElements = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>03 - Positioning Multiple Elements - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="03 - Positioning Multiple Elements - Intro to teleportHQ"
        />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b683b0e8-8dd4-4de9-99c8-8383256b5530/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <Heading text=" " heading1="Positioning Multiple Elements"></Heading>
          <h2 className={` ${styles['text']} ${projectStyles['subheading']} `}>
            Desired Outcome
          </h2>
          <div className={styles['container3']}>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/img/default.png"
              className={styles['image']}
            />
            <div className={styles['container4']}>
              <h1>Heading</h1>
              <span>Text</span>
            </div>
          </div>
          <div className={styles['ul']}>
            <ListItem text="Add an Image (I) in the container below"></ListItem>
            <ListItem text="Drag and drop a Heading (H) next to the image"></ListItem>
            <ListItem text="Drag and drop a Text (T) element below the Heading"></ListItem>
            <ListItem text="See what happens!"></ListItem>
          </div>
          <div className={styles['container5']}>
            <h2
              className={` ${styles['text3']} ${projectStyles['subheading']} `}
            >
              Give it a try
            </h2>
          </div>
          <div className={styles['container6']}>
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className={styles['image1']}
            />
            <div className={styles['container7']}>
              <h1>Heading</h1>
              <span>Text</span>
            </div>
          </div>
          <div className={styles['ul1']}>
            <ListItem text="We automatically group elements in containers when needed"></ListItem>
            <div className={styles['container8']}>
              <ListItem text="Check the Tree View to get a better overview of your page's structure"></ListItem>
            </div>
            <Tip text="Open the Files &amp; Tree View panel by pressing Ctrl/Cmd + 3"></Tip>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default PositioningMultipleElements
