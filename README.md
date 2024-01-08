# 🍅 싱싱고 프로젝트: 식품 유통기한 관리 웹 애플리케이션
>[**🔗 싱싱고 바로가기**](https://sslee1210.github.io/singsinggo/)

---

## 🎯 프로젝트의 비전
> "리액트를 활용하여 식품 유통기한 관리 시스템을 구현하며, 팀워크를 바탕으로 프로젝트를 성공적으로 완수"

---

## 💡 핵심 기능과 가치
- **냉장고 관리:** 
  - 사용자의 식품 관리를 효율적으로 돕는다.
  - 식품 낭비를 줄이고, 사용자의 경제적 부담을 감소시킨다.
- **장바구니 기능:** 
  - 식품 구매의 효율성을 증대시키고 건강한 식습관을 유도한다.
- **달력 기능:** 
  - 보관한 식품의 유통기한을 한눈에 파악할 수 있다.
  - 사용자가 식품을 안전하게 섭취할 수 있도록 돕는다.

---

## 🛠 사용 기술 및 도구
- **프로젝트 관리 도구:** `Github` `Figma` `Notion` `Google spread sheet`
- **개발 도구:** `Visual Code` `Adobe Illustrator`
- **웹 프레임워크:** `REACT` `JavaScript` `CSS3`

---

## 👥 팀원 및 역할
- **이성수:** 프로젝트 리더, 주요 기능 구현(Login, Storage, Food)
- **성영은:** 프로젝트 진행 기록, 기능 구현(Calendar, Shopping)
- **정하솔:** Github 관리, 디자인 총괄
- **조유빈:** 디렉토리 관리, 기능 및 디자인 구현

---

## 🚀 프로젝트 진행 및 성과
1. **주요 기능 선정:** 어플리케이션의 핵심 기능을 결정
   
3. **역할 분담:** 팀 내 역할 분배 및 책임 영역 설정
   
5. **사용자 시나리오 & 워크플로우 & 유스케이스 작성:** 사용자의 행동 패턴 및 앱 사용 흐름 도출
   ![guide](![싱싱고_워크플로우](https://github.com/sslee1210/singsinggo/assets/142865231/1a18a70f-b0d1-49e5-8f87-bd4ae4124b71)
)
  
7. **요구 사항 분석 :** 필요한 기능 및 규격 분석
   
9. **디렉토리 구조 분석 :** 프로젝트 구조 및 파일 시스템 설정
   ![싱싱고_디렉토리구조](https://github.com/sslee1210/singsinggo/assets/142865231/80138372-0c3f-4966-83d7-cae99d345f5c)
  
11. **코딩 및 디자인 가이드 작성 :** 개발 및 디자인 표준 설정
   <img src="https://github.com/sslee1210/singsinggo/assets/142865231/5ef7e00d-1a5b-4a03-a944-5c7908b1a044" width="800" height="auto"/>
  
12. **UI/UX 디자인:** 사용자 인터페이스 및 디자인 적용
    
14. **페이지 기능 구현:** 앱 내 각 페이지의 기능을 구현
    
16. **PPT 제작 및 발표:** 앱 주요 기능 소개 및 설명

---

## 🎈 프로젝트 회고

### 문제 및 해결
#### 상황 1
  - **상황:** 등록하거나 추가한 데이터가 페이지를 새로 고침 할 때마다 초기화 됨.
  - **문제 확인:** 데이터를 저장할 라이브러리가 없다는 걸 확인 함.
  - **해결:** 로컬 스토리지를 사용하여 데이터를 문자열 형태로 저장해 새로 고침 후에도 데이터를 유지 함.
    
#### 상황 2
  - **상황:** 캘린더를 통해 지정된 날짜에 등록한 식료품을 나타내는 기능이 잦은 오류를 일으킴
  - **문제 확인:** 사용 중인 캘린더 플러그인이 우리가 의도한 방향성에 맞지 않음.
  - **해결:** full-calendar 라는 다른 플러그인을 사용하여 플러그인이 가지고 있는 날짜에 따른 이벤트를 띄우는 기능을 통해 기능 구현 함.

#### 상황 4
  - **상황:** 식료품 추가/수정/삭제 구현이 제대로 안되고 오류 발생
  - **문제 확인:** 데이터를 불러오는 경로가 꼬인거 같음.
  - **해결:** 코드를 싹 다 갈아엎고 처음부터 다시 작성하여 오류를 없앰.

#### 상황 5
  - **상황:** 로컬 스토리지로는 각 사용자마다 다른 식료품 목록을 보여주는 구현이 어려움
  - **문제 확인:** 몽고DB를 이용하여 회원정보와 데이터 정보를 연결하기로 함.
  - **해결:** 시간이 부족하여 해결하지 못함.

#### 상황 6
  - **상황:** 어색한 분위기에 서로 소통도 잘 안되어 역할을 분담하거나 개개인의 작업 진행 상황을 판단하지 못함.
  - **문제 확인:** 팀원들이 낯을 많이 가린다는 걸 확인 함.
  - **해결:** 팀원들에게 먼저 다가가 단톡방을 만들고 먼저 대화를 주도하여 친밀감을 형성시키고 밝은 분위기로 회의를 이끔.

### 프로젝트 완료 리뷰
- **아쉬웠던 점:** 리액트 활용에 대한 초기 어려움이 있었지만, 이를 극복하며 리액트에 대한 깊은 이해와 활용 능력을 향상시킴
- **성취감:** 팀원들과의 원활한 커뮤니케이션 및 협력을 통해 프로젝트를 성공적으로 완성
- **배운 점:** 리액트와 관련한 기술적 이해도를 상승시키고, 팀원들과의 원활한 커뮤니케이션을 통한 협업 능력을 향상시킴 또한 밝은 팀 분위기를 유지하고, 팀원들을 이끌 수 있는 리더십 능력을 키움.
