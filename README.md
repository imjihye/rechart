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
- 개발환경은 react-hot-loader를 사용하여 변경사항에 실시간으로 적용되도록 되었습니다.
```
npm run dev # 개발 환경 (port: 3333)
npm run start # 프러덕션 환경 (port: 3000)
```

## 빌드
- 서버를 띄운상태에서 새로이 빌드를 를 원하는 경우
```
npm run build-watch # 실시간 자동 빌드
npm run build-all # 원타임 빌드 + optimize-minimize
```

## 브라우저 확인
- dev port: 3000 / pro port: 3333 (pacage.json파일을 참조)
- 클라이언트 host와 port가 서버(API)와 다른 경우 CROS문제가 발생 할 수 있습니다.
```
http://localhost:[PORT]/

ex)
http://localhost:3000/
```

## Directory
```
├── server                      # 서버 디렉토리
│   └── main.js                 # 서버 메인 스크립트
├── src                         # 클라이언트 디렉토리
│   ├── static                  # 클라이언트 static 디렉토리
│   │   └── css                 # 클라이언트 css 디렉토리
│   │       ├── base.css        # 클라이언트 base css
│   │       └── style.css       # 클라이언트 style css
│   │       └── w3.css          # 클라이언트 w3(chart) style css
│   ├── Components              # 클라이언트 컴포넌트들
│   │   └── Whatap              # 클라이언트 와탭 관련 컴포넌트들
│   └── index.js                # 클라이언트 메인 스크립트
├── .babelrc                    # babel 설정파일
├── package.json                # npm 설정파일
├── webpack.config.js           # webpack 설정파일
├── webpack.dev.config.js       # webpack-dev-server 설정파일
├── bundle.js               # webpack으로 컴파일된 클라이언트 메인 스크립트
└── index.html              # 메인 페이지
```