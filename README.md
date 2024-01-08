# 🍅 싱싱고 프로젝트: 식품 유통기한 관리 웹 애플리케이션
## 🎯 프로젝트의 비전
<p align="center">
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/fd9fa04d-af59-4279-b037-010b70035b2b.png"  width="200" height="auto"/>
</p>

 "리액트를 활용하여 식품 유통기한 관리 시스템을 구현하며, 팀워크를 바탕으로 프로젝트를 성공적으로 완수"


## 💡 핵심 기능

### 냉장고 관리
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/92d6c9b8-08a9-40d8-9527-b58e07f8ff21.png"  width="150" height="auto"/>
</p>

- 식품 등록, 수정, 삭제 가능
- 사용자의 식품 관리를 효율적으로 도움
- 식품 낭비를 줄이고, 사용자의 경제적 부담을 감소시킴

---

### 장바구니
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/71a48aaa-8789-44e5-8bfc-8c76777dcff5.png"  width="150" height="auto"/>
</p>

- 마트에서 장을 보기 전 사용자가 구매할 식료품들을 미리 메모
- 온라인 장보기를 위한 대형 온라인 식품 판매 사이트 연결
- 식품 구매의 효율성을 증대시키고 건강한 식습관을 유도함

---

### 달력
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/452ad1f0-65ff-48b8-b79c-e67696d3aaed.png"  width="150" height="auto"/>
</p>

- 언제 식품을 보관 했는지 한 눈에 파악 가능
- 보관한 식품의 유통기한을 쉽게 확인
- 사용자가 식품을 안전하게 섭취할 수 있도록 도움

---

## 🛠 사용 기술 및 도구
- **TOOL:** `Github` `Figma` `Notion` `Google spread sheet` `Adobe Illustrator`
  
- **WEB FRAMEWORK:** `REACT` `JavaScript` `CSS3`

---

## 👥 팀원 및 역할
- **이성수:** 프로젝트 리더, 주요 기능 구현
    - Login, Storage, Food

- **성영은:** 프로젝트 진행 기록, 기능 구현
    - Calendar, Shopping

- **정하솔:** Github 관리, 디자인 총괄
- **조유빈:** 디렉토리 관리, 기능 및 디자인 구현

---

## 🚀 프로젝트 진행 및 성과
1. **주요 기능 선정:** 어플리케이션의 핵심 기능을 결정
   - 나만의 냉장고 등록
   - 식료품 추가/수정/삭제
   - 식료품 보관 날짜 확인
   
3. **역할 분담:** 팀 내 역할 분배 및 책임 영역 설정
   
5. **사용자 시나리오 & 워크플로우 & 유스케이스 작성:** 사용자의 행동 패턴 및 앱 사용 흐름 도출
   ![싱싱고_워크플로우](https://github.com/sslee1210/singsinggo/assets/142865231/1a18a70f-b0d1-49e5-8f87-bd4ae4124b71)
   
  
7. **요구 사항 분석 :** 필요한 기능 및 규격 분석
   ![싱싱고 요구사항](https://github.com/sslee1210/singsinggo/assets/142865231/bb5afb6b-347d-4fd9-8d36-9baf7f1034cd)
   
   
10. **디렉토리 구조 분석 :** 프로젝트 구조
   ![싱싱고_디렉토리구조](https://github.com/sslee1210/singsinggo/assets/142865231/80138372-0c3f-4966-83d7-cae99d345f5c)
  
11. **코딩 및 디자인 가이드 작성 :** 개발 및 디자인 표준 설정

    - 클래스 네임은 쉽게 알아볼 수 있는 이름으로 작성하고 네 단어 이상의 사용을 지양한다. 카멜 표기법으로 작성한다.
    - const 선언방식을 사용한다.
    - 따옴표는 큰 따옴표를 사용한다.
    - 이벤트 핸들러 함수를 사용한다.
    - Prettier를 사용한다.
    - 설명이 필요한 부분은 주석을 통해 작성한다.
    - 화살표 함수를 사용하여 작성한다.
    - 들여쓰기는 space 2로 통일한다.
    - 특별한 기능이 없는 곳에 사용하는 태그는 `<div>`로 통일한다.
  
13. **UI/UX 디자인:** 사용자 인터페이스 및 디자인 적용
    ![싱싱고UI](https://github.com/sslee1210/singsinggo/assets/142865231/2c08196a-c7b3-4e16-8d6a-fa48786f3259)
    
15. **페이지 기능 구현:** 앱 내 각 페이지의 기능을 구현
    
16. **PPT 제작 및 발표:** 앱 주요 기능 소개 및 설명

## [**🔗 작업일지 바로가기**](https://www.notion.so/86f809ad5b794106b5941114d4377b67?v=16ddbdec031b4dafbe9e2bb8c0cd5a3d)

---

## 🎈 프로젝트 회고

### 문제 및 해결
#### 상황 1
  - **상황:** 등록하거나 추가한 데이터가 페이지를 새로 고침 할 때마다 초기화 됨
  - **문제 확인:** 데이터를 저장할 라이브러리가 없다는 걸 확인 함.
  - **해결:** 로컬 스토리지를 사용하여 데이터를 문자열 형태로 저장해 새로 고침 후에도 데이터를 유지 함.
    
#### 상황 2
  - **상황:** 캘린더를 통해 지정된 날짜에 등록한 식료품을 나타내는 기능이 구현되지 않음
  - **문제 확인:** 사용 중인 캘린더 플러그인이 우리가 의도한 기능을 구현하지 못하는걸 알게 됨.
  - **해결:** full-calendar 라는 다른 플러그인을 사용하여 플러그인이 가지고 있는 날짜에 따른 이벤트를 띄우는 기능을 통해 원하는 기능을 구현 함.

#### 상황 4
  - **상황:** 식료품 수정을 하고 나서 새로고침을 해야 리스트가 업데이트 되는 점, 수정 시 원래의 값이 모두 뜨지 않는 문제점들이 생김
  - **문제 확인:** 모달창으로 띄우는 방식에서 데이터를 불러오는 경로가 꼬인거 같음.
  - **해결:** 코드를 싹 다 갈아엎고 처음부터 다시 작성하여 오류를 없앰.

#### 상황 5
  - **상황:** 로컬 스토리지로는 각 사용자마다 다른 식료품 목록을 보여주는 구현이 어려움
  - **문제 확인:** 몽고DB를 이용하여 서버 연결을 통해 회원정보와 데이터 정보를 연결하기로 함.
  - **해결:** 프로젝트가 끝난 후 혼자 독학하며 연결하기로 함.

#### 상황 6
  - **상황:** 어색한 분위기에 서로 소통도 잘 안되어 역할을 분담하거나 개개인의 작업 진행 상황을 판단하지 못함
  - **문제 확인:** 팀원들이 낯을 많이 가린다는 걸 확인 함.
  - **해결:** 팀원들에게 먼저 다가가 단톡방을 만들고 먼저 대화를 주도하여 친밀감을 형성시키고 밝은 분위기로 회의를 이끔.

## 프로젝트 완료 리뷰
- **아쉬웠던 점:** 리액트를 활용함에 어렵고 서툴렀던 탓에 프로젝트 진행 속도가 늦어짐
- **잘한 점:** 잠을 줄이고 공부 시간을 더 늘려 능력을 더 향상시킴
- **배운 점:** 리액트와 관련한 기술적 이해도를 상승시키고 기간 내에 프로젝트를 마무리 지을 수 있었음

- **아쉬웠던 점:** 낯을 많이 가리는 성격이라 팀원들과 좋은 팀워크를 이루지 못할 거라 생각했음
- **잘한 점:** 두려움을 가득 안고 있었지만 먼저 다가가기로 용기를 냄. 결국 팀원들과의 원활한 커뮤니케이션 및 협력을 통해 프로젝트를 성공적으로 완성
- **배운 점:** 처음 한번이 어렵고 다음은 어렵지 않다는걸 깨달음. 팀원들과의 원활한 커뮤니케이션을 통한 협업 능력을 향상시킴 또한 밝은 팀 분위기를 유지하고, 팀원들을 이끌 수 있는 리더십 능력을 키움.

## [**🔗 싱싱고 바로가기**](https://sslee1210.github.io/singsinggo/)
