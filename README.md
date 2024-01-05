https://sslee1210.github.io/singsinggo/
# 싱싱고 프로젝트

## 1. Overview (프로젝트 개요)

**프로젝트 명:** 싱싱고

**주요 기능:**

- 나만의 냉장고를 만들어 식료품을 보관
- 보관 날짜와 유통기한을 통해 식료품 상태 확인

**부가 기능:**

- 식료품들을 미리 메모해 둘 수 있는 장바구니
- 음식을 언제 보관 했는지 쉽게 파악할 수 있는 달력

## 2. 기획의도 & 목표

**기획의도:**

유통기한이 지나 버려지는 식료품들을 줄이기 위해서 기획.

**목표:**

- 리액트를 활용하여 적응, 실력 향상
- 완성도 있는 앱 개발 경험으로 자신감 상승
- 팀원들과 커뮤니케이션 능력 향상

## 3. 작업 순서

개발할 어플 기획 -> 개발 계획 -> UI 디자인 작업 -> 기능 구현 -> 스타일 작업

## 4. 사용기술

프로젝트 관리 Tool : Github / Figma / Notion / Google spread sheet

개발 Tool : Visual Studio Code / Adobe Illustrator

웹 화면 : REACT / .module.css

## 5. 각 담당 업무

이성수: 리더, 기능 구현

성영은 : 기록, 기능 구현

정하솔 : Github 관리자, 디자인 총괄

조유빈 : 디렉토리 관리, 기능, 디자인

## 6. 프로젝트 내용

디렉토리 구조 :

페이지 구성 : 로그인 / 회원가입 / 마이페이지 / 냉장고 등록 / 추가 / 수정 / 식재료 목록 / 추가 / 수정 / 장바구니 / 캘린더

**문제 및 해결**

1. 상황 : 등록하거나 추가한 데이터가 페이지를 새로 고침 할 때마다 초기화 됨.
    - 문제 확인 : 데이터를 저장할 라이브러리가 없다는 걸 확인 함.
    - 해결 : 로컬 스토리지를 사용하여 데이터를 문자열 형태로 저장해 새로 고침 후에도 데이터를 유지 함.

2. 상황 : 캘린더를 통해 지정된 날짜에 등록한 식료품을 나타내는 기능이 잦은 오류를 일으킴
    - 문제 확인 : 사용 중인 캘린더 플러그인이 우리가 의도한 방향성에 맞지 않음.
    - 해결 : full-calendar 라는 다른 플러그인을 사용하여 플러그인이 가지고 있는 날짜에 따른 이벤트를 띄우는 기능을 통해 기능 구현 함.

3. 상황 : 어색한 분위기에 서로 소통도 잘 안되어 역할을 분담하거나 개개인의 작업 진행 상황을 판단하지 못함.
    - 문제 확인 : 팀원들이 낯을 많이 가린다는 걸 확인 함.
    - 해결 : 팀원들에게 먼저 다가가 단톡방을 만들고 먼저 대화를 주도하여 친밀감을 형성시키고 밝은 분위기로 회의를 이끔.

## 7. 프로젝트 완료 리뷰

**아쉬운 부분(객관적으로)**

리액트를 활용함에 살짝 서툴러 작업 속도가 늦어져 정해진 기간 내에 프로젝트를 완벽하게 완성시키지 못해 많이 아쉬웠다.

**잘한 부분(객관적으로)**

팀원들의 의견을 최대한 들어주고 적극적인 태도로 먼저 다가가며 많은 소통을 통해 더욱 단단해진 단합력과 협력으로 팀원들을 이끌어 프로젝트를 진행시켜 뿌듯했다.

**배운 점 및 주관적인 의견**

이번 프로젝트를 진행하며 리액트에 대한 이해도가 많이 늘었고 팀원들과의 커뮤니케이션 능력이 정말 많이 늘어 팀을 통한 작업이 두렵지 않고 팀을 밝은 분위기로 이끌어 갈 수 있는 능력을 배웠다.
