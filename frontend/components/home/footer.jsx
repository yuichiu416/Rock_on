import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return  <div className="footer-wrapper">
                    <div className='footer'>
                        <a href="yuichiu416@gmail.com"><img src="images/email.svg" /></a>
                        <a href="https://github.com/yuichiu416"><img className="github" src="images/github.svg" /></a>
                        <a href="https://www.linkedin.com/in/roger-kiew-18b751155/"><img src="images/linkedIn.svg" /></a>
                    </div>
            <p>Created by Roger Kiew</p>
            <p>Inspired by Robinhood.com</p>     
        </div>
        
        
    }
}
