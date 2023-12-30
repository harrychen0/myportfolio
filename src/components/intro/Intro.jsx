import "./intro.scss"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React from "react";
import Typewriter from 'typewriter-effect';


export default function Intro() {
  return (
    <div className="intro" id="intro">

      <div className="left">
        <div className="me">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="hellocontainer">
            <h2><span className="Hello"><Typewriter
              options={{
                strings: ['Hello!', '你好!', 'வணக்கம்!', 'こんにちは!', 'Hola!', '안녕하세요!', 'Bonjour!', 'नमस्ते!'],
                autoStart: true,
                loop: true,
              }}
            /></span>
            </h2>
          </div>
          <h2>
            Nice to meet you! I'm</h2>
          <h1>Harry Chen</h1>
          <h3>
            Seeking internship opportunities starting Summer 2024
            {/* I'm a
            <div className="desccontainer">
              <span><Typewriter
                options={{
                  strings: ['Beginnner Developer', 'Civil Engineering Major', 'F1 Fan', 'Gym Lover', 'Volleyball Addict'],
                  autoStart: true,
                  loop: true,
                }}
              /></span>
            </div> */}
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardDoubleArrowDownIcon className="icon" />
        </a>
      </div>

    </div>
  )
}
