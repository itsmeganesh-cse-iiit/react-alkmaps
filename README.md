# react-alkmaps

>

[![NPM](https://img.shields.io/npm/v/react-alkmaps.svg)](https://www.npmjs.com/package/react-alkmaps) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-alkmaps
```

## Usage

```jsx
import React, { Component } from "react";

import ReactAlkMaps from "react-alkmaps";

class Example extends Component {
  render() {
    return (
      <ReactAlkMaps
        onLoad={this.onLoad}
        onError={this.onError}
        url="https://maps.alk.com/api/1.2/alkmaps.js"
      />
    );
  }
}
```

## License

MIT © [itsmeganesh-cse-iiit](https://github.com/itsmeganesh-cse-iiit)
