React boilerpate
===
+ https://www.udemy.com/react-redux/learn/v4/overview
+ https://velopert.com/814
+ https://github.com/facebookincubator/create-react-app


----

# Udemy 강좌
![](http://i.imgur.com/CcMp9xz.png)

---
# facebookincubator
![](http://i.imgur.com/BgKN1zX.png)

---
# velopert.com
![](http://i.imgur.com/xQzi67z.png)

---
# 공통 디렉토리 구조.
```
ReactApp
├─public/
│  ├─js/
│  ├─css/
│  └─index.html
├─src
│  ├─components
│  │  └─app.js
│  └─index.js
├─package.json
└─webpack.config.js
```

---

# index.html

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div id="root"></div>
</body>
<script src="/public/bundle.js"></script>
</html>

```

---

# index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import './App.css';			// 사용법 참고

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

```

---

# app.js
```
import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>Hello React !!</div>
    );
    }
}
```

---
# webpack.config.js

```
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3000,
        contentBase: __dirname + '/public'
    }
};
```

---

### cacheDirectory
cacheDirectory가 true로 설정되면, 코드가 수정되어 리컴파일될때, 
기존에 수정되지않은 파일만 캐시에저장된걸 사용하고 
수정된파일만 리컴파일하여 번들링합니다.

### presets-x

[BABEL js DOCS](http://babeljs.io/docs/plugins/)
```
stage-0 - Strawman: just an idea, possible Babel plugin.
stage-1 - Proposal: this is worth working on.
stage-2 - Draft: initial spec.
stage-3 - Candidate: complete spec and initial browser implementations.
stage-4 - Finished: will be added to the next yearly release.
```
---

### resolve

대부분의 Webpack 설정 파일은 아래와 같이 빈 string 을 포함한 resolve extensions 라는 속성을 가지고 있다. 빈 string 은 require(‘./myFile’) 과 같은 빈 확장자를 import하게 
도와주는 역할이다.

[FEDevelopers](https://github.com/FEDevelopers/tech.description/wiki/Webpack%EC%9D%98-%ED%98%BC%EB%9E%80%EC%8A%A4%EB%9F%B0-%EC%82%AC%ED%95%AD%EB%93%A4)

### historyApiFallback

[webpack docs](http://webpack.github.io/docs/webpack-dev-server.html#the-historyapifallback-option)

If you are using the HTML5 history API you probably need to serve your index.html in place of 404 responses, which can be done by setting historyApiFallback: true. However, if you have modified output.publicPath in your Webpack configuration, you need to specify the URL to redirect to. This is done using the historyApiFallback.index option:

---
### inline
inline 은 전체 페이지에 대한 실시간 리로딩(“Live Reloading”) 옵션이며, hot 은 컴포넌트가 수정 될 경우 그 수정된 부분만 리로드 해주는 부분 모듈 리로딩(“Hot Module Reloading”) 옵션이다. 만약 두개 옵션을 모두 지정할 경우 “Hot Module Reloading”이 처음 발생한다. 그리고 “Hot Module Reloading”이 안되면 전체 페이지 로딩을 한다.
[FEDevelopers](https://github.com/FEDevelopers/tech.description/wiki/Webpack%EC%9D%98-%ED%98%BC%EB%9E%80%EC%8A%A4%EB%9F%B0-%EC%82%AC%ED%95%AD%EB%93%A4)

```
//1. 페이지를 로딩하지 않는다.
$ webpack-dev-server

//2. 전체 페이지를 로딩 한다.
$ webpack-dev-server --inline

//3. 부분 로딩  또는 전체 페이지 로딩
$ webpack-dev-server  --inline --hot
```

---

### publicPath
+ path : 결과가 저장되는 위치
+ publicPath : 배포 딜드시 CSS, HTML 안의 URL들을 업데이트 (prefilx 처럼)
```
// Development: Both Server and the image are on localhost
.image { 
  background-image: url(‘./test.png’);
 }

// Production: Server is on Heroku but the image is on a CDN
.image { 
  background-image: url(‘https://someCDN/test.png’);
 }

```
[FEDevelopers](https://github.com/FEDevelopers/tech.description/wiki/Webpack%EC%9D%98-%ED%98%BC%EB%9E%80%EC%8A%A4%EB%9F%B0-%EC%82%AC%ED%95%AD%EB%93%A4)