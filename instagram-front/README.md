# instagram-front
instagram-front는 **instagram 프로젝트에서 프론트엔드** 코드를 관리하기 위해 생성했습니다.

## 폴더구조
```bash
├── public
│   ├── css
│   ├── font
│   └── images
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   ├── router
│   ├── store  
│   ├── components 
│   │    ├── Footer.vue
│   │    └── Header.vue
│   └── views
└── └── main.js
``` 
- api : api 통신과 관련된 모듈 작성 -> 컴포넌트에서 호출하여 사용
- components
- views

## 협업방식
1. 각자 브랜치를 생성해서 작업한다.
  - 브랜치의 명명규칙은 구글 스프레드시트 **task_num**을 바탕으로 한다. ex) git branch home-01
  - 기능별로 브랜치를 생성하고 master브랜치에 머지하는 것을 원칙으로 한다.
  - 구글 스프레드시트 : https://docs.google.com/spreadsheets/d/1vWYjHa5_AjRVxFyq2mYDwGsFjornKdXbDgFMYu5Njug/edit#gid=0
2. 개발 과정에서 필요한 모듈 설치는 각자 판단하며, 필요한 경우 회의를 통해 결정한다.
