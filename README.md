# 🍅 싱싱고 프로젝트: 식품 유통기한 관리 웹 애플리케이션
## 🎯 프로젝트의 비전
<p align="center">
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/fd9fa04d-af59-4279-b037-010b70035b2b.png"  width="200" height="auto"/>
</p>

 "리액트를 활용하여 식품 유통기한 관리 시스템을 구현하며, 팀워크를 바탕으로 프로젝트를 성공적으로 완수"


## 💡 핵심 기능

### 냉장고 관리
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/92d6c9b8-08a9-40d8-9527-b58e07f8ff21.png"  width="180" height="auto"/>
</p>

- 식품 등록, 수정, 삭제 가능
- 사용자의 식품 관리를 효율적으로 도움
- 식품 낭비를 줄이고, 사용자의 경제적 부담을 감소시킴

---

### 장바구니
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/71a48aaa-8789-44e5-8bfc-8c76777dcff5.png"  width="180" height="auto"/>
</p>

- 마트에서 장을 보기 전 사용자가 구매할 식료품들을 미리 메모
- 온라인 장보기를 위한 대형 온라인 식품 판매 사이트 연결
- 식품 구매의 효율성을 증대시키고 건강한 식습관을 유도함

---

### 달력
<p>
  <img src="https://github.com/sslee1210/singsinggo/assets/142865231/452ad1f0-65ff-48b8-b79c-e67696d3aaed.png"  width="180" height="auto"/>
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
   
2. **역할 분담:** 팀 내 역할 분배 및 책임 영역 설정
   
3. **사용자 시나리오 & 워크플로우 & 유스케이스 작성:** 사용자의 행동 패턴 및 앱 사용 흐름 도출
   
   ![싱싱고_워크플로우](https://github.com/sslee1210/singsinggo/assets/142865231/1a18a70f-b0d1-49e5-8f87-bd4ae4124b71)
   
  
4. **요구 사항 분석 :** 필요한 기능 및 규격 분석
   
   ![싱싱고 요구사항](https://github.com/sslee1210/singsinggo/assets/142865231/bb5afb6b-347d-4fd9-8d36-9baf7f1034cd)
   
   
5. **디렉토리 구조 분석 :** 프로젝트 구조
    
   ![싱싱고_디렉토리구조](https://github.com/sslee1210/singsinggo/assets/142865231/80138372-0c3f-4966-83d7-cae99d345f5c)
   
  
6. **코딩 및 디자인 가이드 작성 :** 개발 및 디자인 표준 설정

    - 클래스 네임은 쉽게 알아볼 수 있는 이름으로 작성하고 네 단어 이상의 사용을 지양한다. 카멜 표기법으로 작성한다.
    - const 선언방식을 사용한다.
    - 따옴표는 큰 따옴표를 사용한다.
    - 이벤트 핸들러 함수를 사용한다.
    - Prettier를 사용한다.
    - 설명이 필요한 부분은 주석을 통해 작성한다.
    - 화살표 함수를 사용하여 작성한다.
    - 들여쓰기는 space 2로 통일한다.
    - 특별한 기능이 없는 곳에 사용하는 태그는 `<div>`로 통일한다.
  
7. **UI/UX 디자인:** 사용자 인터페이스 및 디자인 적용
    
    ![싱싱고UI](https://github.com/sslee1210/singsinggo/assets/142865231/2c08196a-c7b3-4e16-8d6a-fa48786f3259)
    
    
8. **페이지 기능 구현:** 앱 내 각 페이지의 기능을 구현
    
9. **PPT 제작 및 발표:** 앱 주요 기능 소개 및 설명

## [**🔗 작업일지 바로가기**](https://www.notion.so/86f809ad5b794106b5941114d4377b67?v=16ddbdec031b4dafbe9e2bb8c0cd5a3d)

---

## 🎈 프로젝트 회고

### 문제 및 해결
#### 상황 1
  - **상황:**
    - 데이터를 저장하거나 불러올 방법이 없어 새로고침을 누르거나 창을 나가면 저장했던 데이터가 초기화 됨
      
  - **문제 확인:**
    - 로컬스토리지를 통해 데이터를 저장하거나 불러올 수 있음
      
  - **해결:**
    - handleId, handlePassword로 입력한 아이디와 비밀번호를 각각 id, pw 상태에 저장, useState를 사용하여 id와 pw를 관리함
      
```
  // 페이지가 로드될 때 로컬 스토리지에서 유저 정보를 불러옴
  useEffect(() => {
    const savedUser = localStorage.getItem("user"); // 로컬 스토리지에서 "user" 항목의 값을 가져옴
    if (savedUser) {
      navigate("/fridge"); // 유저 정보가 있으면 "/fridge" 페이지로 이동
    }
  }, [navigate]);

  // ID 입력 값이 변경될 때 호출되는 핸들러
  const handleId = (e) => {
    setId(e.target.value); // 입력 값을 ID 상태에 저장
  };

  // 비밀번호 입력 값이 변경될 때 호출되는 핸들러
  const handlePassword = (e) => {
    setPw(e.target.value); // 입력 값을 비밀번호 상태에 저장
  };

  // 로그인 버튼을 클릭했을 때 호출되는 핸들러
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")); // 로컬 스토리지에서 "users" 항목의 값을 가져와서 파싱
    const user = users?.find(
      (user) => user.username === id && user.password === pw // ID와 비밀번호가 모두 일치하는 유저를 찾음
    );

    if (user) { // 일치하는 유저가 있는 경우
      alert("로그인 성공!"); // 로그인 성공 메시지 출력
      localStorage.setItem("user", JSON.stringify(user)); // 로그인한 유저의 정보를 로컬 스토리지에 저장
      navigate("/fridge"); // "/fridge" 페이지로 이동
    } else { // 일치하는 유저 ID가 없는 경우
      alert("로그인 실패. 아이디 또는 비밀번호를 확인해주세요."); // 로그인 실패 메시지 출력
    }
  };
```

#### 상황 2
  - **상황:**
    - 캘린더를 통해 지정된 날짜에 등록한 식료품을 나타내는 기능이 구현되지 않음
      
  - **문제 확인:**
    - 사용 중인 캘린더 플러그인이 우리가 의도한 기능을 구현하지 못하는걸 알게 됨
      
  - **해결:**
    - full-calendar 라는 다른 플러그인을 사용하여 플러그인이 가지고 있는 날짜에 따른 이벤트를 띄우는 기능을 통해 원하는 기능을 구현 함

#### 상황 3
  - **상황:**
    - 다른 팀원이 맡은 부분인 Food 페이지에서 식료품 수정을 하고 나서 새로고침을 해야 리스트가 업데이트 되는 점, 수정 시 원래의 값이 모두 뜨지 않는 문제점들이 생김
      
  - **문제 확인:**
    - 원인 파악을 못하고있고 내가 봤을 땐 수정 컴포넌트를 모달창으로 띄우는 방식에서 데이터를 불러오는 경로가 꼬인거 같음
      
```
// useEffect Hook을 사용하여 로컬 스토리지와 상태 업데이트 관리
  useEffect(() => {
    localStorage.setItem("foodList", JSON.stringify(foodList));
    setSortedFoodList(foodList);
  }, [foodList]);
// 음식 편집 모달 열기 함수
  const openModal = (food, index) => {
    // 편집 중인 음식의 인덱스 및 내용 설정, 모달 열기
    const foodIndex = foodList.findIndex((f) => f === food);
    setEditingIndex(foodIndex);
    setEditingFood({ ...food });
    setIsModalOpen(true);
  };

  // 음식 편집 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 변경된 내용 저장 함수
  const saveChanges = () => {
    // 수정된 음식 정보로 목록 업데이트, 모달 닫기
    const newList = [...foodList];
    newList[editingIndex] = editingFood;
    setFoodList(newList);
    closeModal();
  };
```

```
{/* 음식 편집 모달 */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalBox}>
            {/* 모달 상단: 뒤로가기, 제목 */}
            <img
              src={path + "/images/food_back_blue.svg"}
              alt="뒤로가기"
              className={styles.back}
              onClick={closeModal}
            />
            <h2>싱싱고 수정하기</h2>

            {/* 음식 정보 편집 입력란 */}
            <label>
              <select
                value={editingFood.category}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, category: e.target.value })
                }>
                {categoryOptions.map(
                  (category, index) =>
                    category !== "전체" && (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    )
                )}
              </select>
            </label>
            <label className={styles.editName}>
              <span>식재료명</span>
              <input
                type="text"
                value={editingFood.foodName}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, foodName: e.target.value })
                }
              />
            </label>
            <label className={styles.editNum}>
              <span>수량</span>
              <input
                type="number"
                value={editingFood.quantity}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, quantity: e.target.value })
                }
                required
              />
            </label>
            <div className={styles.dateBox}>
              <label>
                <span>구매일</span>
                <input
                  type="date"
                  value={editingFood.purchaseDate}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      purchaseDate: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>소비기간</span>
                <input
                  type="date"
                  value={editingFood.expirationDate}
                  onChange={(e) =>
                    setEditingFood({
                      ...editingFood,
                      expirationDate: e.target.value,
                    })
                  }
                  required
                />
              </label>
            </div>
            <label className={styles.editMemo}>
              <span>메모</span>
              <textarea
                value={editingFood.note}
                onChange={(e) =>
                  setEditingFood({ ...editingFood, note: e.target.value })
                }
              />
            </label>
```
      
  - **해결:**
    - 코드를 싹 다 갈아엎고 처음부터 다시 작성하여 오류를 없앰

#### 상황 4
  - **상황:**
    - 로컬 스토리지로는 각 사용자마다 다른 식료품 목록을 보여주는 구현이 어려움
    
  - **문제 확인:**
    - 몽고DB를 이용하여 서버 연결을 통해 회원정보와 데이터 정보를 연결하기로 함
      
  - **해결:**
    - 프로젝트가 끝난 후 혼자 독학하며 연결하기로 함

#### 상황 5
  - **상황:**
    - 어색한 분위기에 서로 소통도 잘 안되어 역할을 분담하거나 개개인의 작업 진행 상황을 판단하지 못함
      
  - **문제 확인:**
    - 팀원들이 낯을 많이 가리기도하고 말주변이 없음
      
  - **해결:**
    - 팀원들에게 먼저 다가가 단톡방을 만들고 먼저 대화를 주도하여 친밀감을 형성시키고 밝은 분위기로 회의를 이끔

## 프로젝트 완료 리뷰
- **아쉬웠던 점:** 리액트를 활용함에 어렵고 서툴렀던 탓에 프로젝트 진행 속도가 늦어짐
- **잘한 점:** 잠을 줄이고 공부 시간을 더 늘려 능력을 더 향상시킴
- **배운 점:** 리액트와 관련한 기술적 이해도를 상승시키고 기간 내에 프로젝트를 마무리 지을 수 있었음

- **아쉬웠던 점:** 낯을 많이 가리는 성격이라 팀원들과 좋은 팀워크를 이루지 못할 거라 생각했음
- **잘한 점:** 두려움을 가득 안고 있었지만 먼저 다가가기로 용기를 냄. 결국 팀원들과의 원활한 커뮤니케이션 및 협력을 통해 프로젝트를 성공적으로 완성
- **배운 점:** 처음 한번이 어렵고 다음은 어렵지 않다는걸 깨달음. 팀원들과의 원활한 커뮤니케이션을 통한 협업 능력을 향상시킴 또한 밝은 팀 분위기를 유지하고, 팀원들을 이끌 수 있는 리더십 능력을 키움

## [**🔗 싱싱고 바로가기**](https://sslee1210.github.io/singsinggo/)
