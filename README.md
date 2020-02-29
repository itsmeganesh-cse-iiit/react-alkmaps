# react-alkmaps

![Under Development](https://allamericandreamhomes.com/wp-content/uploads/underconstruction.png)

>

[![NPM](https://img.shields.io/npm/v/react-alkmaps.svg)](https://www.npmjs.com/package/react-alkmaps) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features added

- [Adding Vector Layer](#)
- [Adding Vector Points to Vector Layer](#) - Vector point , external image and svg supprot

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
        apikey="APIKEY"
      />
    );
  }
}
```

## Props

### <ReactAlkMaps/>

| Field   | Type            |  Default   |        Description        |
| ------- | --------------- | :--------: | :-----------------------: |
| onLoad  | func            |            | Invoked after script load |
| onError | func            |            | Invoked after script fail |
| url     | optional string | AlkMaps V2 |        AlkMaps URL        |
| apikey  | string          |            |      AlkMaps API key      |

### <VectorLayer/>

| Field | Type   |   Default    |    Description    |
| ----- | ------ | :----------: | :---------------: |
| label | string | Vector Layer | Vector Layer name |

### <VectorPoint/>

| Field   | Type                 |                                                                             Default                                                                              |            Description             |
| ------- | -------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------: |
| latlong | object               |                                                                                                                                                                  |         Vector Layer name          |
| type    | `undefined` or `svg` |                                                                            undefined                                                                             |        Vector drawing type         |
| data    | svg                  |                                                                 undefined OR `{svg: svgContent}`                                                                 |     To draw using svg content      |
|         | image                |              {`externalGraphic`:imageURL,`graphicHeight`:20,`graphicWidth`:20,`label`:"label",`labelYOffset`:20} OR `As mentioned in alkmaps site`               | To draw vector with external image |
|         | vector               | {`pointRadius`: 10,`fillColor`: "red",`label`: "Vector Point",`labelYOffset`: 20,`fontWeight`: "bold",`fontColor`: "#0000AA"} OR `As mentioned in Alk maps site` |           To draw vector           |

## License

Copyright © 2020 [Ganesh Koilada](https://github.com/itsmeganesh-cse-iiit).
This project is [MIT licensed](#).
