import React, { Component } from 'react';

import '../App.css';

export default class Social extends Component {
  render() {
    return(
      <div>
        <a href="https://linkedin.com/in/usheninte" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin fa-2x social"></i>
        </a>
        <a href="https://github.com/Usheninte" alt="Github" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github fa-2x social"></i>
        </a>
        <a href="https://twitter.com/Usheninte" alt="Twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter fa-2x social"></i>
        </a>
        <hr />
      </div>
    );
  }
}
