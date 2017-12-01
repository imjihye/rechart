# rechart


- 패키지 설치
```
$ npm install #dependencies
$ npm install  --save-dev #devDependencies
```

- 개발시 패키지가 추가 되었다면 다음 명령어를 통해 pacakge.json파일을 업데이트 하도록 한다.
```
$ npm install --save
$ npm install --save-dev
```

## node 서버 띄우기
```
npm run start
```

## 실시간 빌드
- 내용이 변경되면 자동 빌드된다.
```
npm run build-watch
```

## 테스트
- dev port: 3000
- pro port: 3333
- pacage.json파일을 참조 하세요.
```
http://localhost:[PORT]/

ex)
http://localhost:3000/
```


참고) 개발환경은 react-hot-loader를 사용하여 변경사항에 실시간으로 적용되도록 했다.


## Directory
```
├── server                      # 서버 디렉토리
│   ├── main.js                 # 서버 메인 스크립트
├── src                         # 클라이언트 디렉토리
│   ├── static                  # 클라이언트 static 디렉토리
│   │   └── css                 # 클라이언트 css 디렉토리
│   │       ├── base.css        # 클라이언트 base css
│   │       └── style.css       # 클라이언트 style css
│   ├── components/Components.js# 클라이언트 컴포넌트
│   └── index.js                # 클라이언트 메인 스크립트
├── .babelrc                    # babel 설정파일
├── package.json                # npm 설정파일
├── webpack.config.js           # webpack 설정파일
├── webpack.dev.config.js       # webpack-dev-server 설정파일
├── bundle.js               # webpack으로 컴파일된 클라이언트 메인 스크립트
└── index.html              # 메인 페이지
```