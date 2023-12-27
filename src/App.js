import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import { UserProvider } from './components/Login/UserContext';
import StorageSelect from './components/storage/StorageSelect';
import StorageAdd from './components/storage/StorageAdd';
import StorageEdit from './components/storage/StorageEdit';
import Splash from './components/Login/Splash';
import Mypage from './components/Login/Mypage';
import LocationList from './components/home/LocationList';
import Shopping from './components/shopping/Shopping';
import Food from './components/food/Food';
import Nav from './Nav';
import Calender from './components/calender/Calendar';
import FoodAdd from './components/food/FoodAdd';

const App = () => {
  // 데이터 관리
  const [foodList, setFoodList] = useState([]);
  const [newFoodData, setNewFoodData] = useState(null);
  const [purchaseEvents, setPurchaseEvents] = useState([]);

  const handleSaveData = (newFoodData) => {
    setFoodList((prevList) => [...prevList, newFoodData]);
    setNewFoodData(newFoodData);
  };

  // onUpdate 함수
  const handleUpdate = (index, updatedData) => {
    const updatedList = [...foodList];
    updatedList[index] = updatedData;
    setFoodList(updatedList);
  };

  // onDel 함수
  const handleDelete = (index) => {
    const updatedList = foodList.filter((_, i) => i !== index);
    setFoodList(updatedList);
  };

  return (
    <div className="screenSize">
      <UserProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/fridge" element={<StorageSelect />} />
            <Route path="/add" element={<StorageAdd />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/edit/:index" element={<StorageEdit />} />
            <Route
              path="/shopping"
              element={
                <div className="componentWrap">
                  <Shopping setFoodList={setFoodList} />
                  <Nav setFoodList={setFoodList} />
                </div>
              }
            />
            <Route
              path="/location"
              element={
                <div className="componentWrap">
                  <LocationList setFoodList={setFoodList} />
                  <Nav setFoodList={setFoodList} />
                </div>
              }
            />
            <Route
              path="/food"
              element={
                <div className="componentWrap">
                  <Food
                    foodList={foodList}
                    onSaveData={handleSaveData}
                    onDel={handleDelete}
                    setFoodList={setFoodList}
                  />
                  <Nav setFoodList={setFoodList} />
                </div>
              }
            />
            <Route
              path="/foodadd"
              element={
                <div className="componentWrap">
                  <FoodAdd setFoodList={setFoodList} />
                  <Nav setFoodList={setFoodList} />
                </div>
              }
            />
            <Route
              path="/date"
              element={
                <div className="componentWrap">
                  <Calender foodList={foodList} setFoodList={setFoodList} purchaseEvents={purchaseEvents || []} />
                  <Nav setFoodList={setFoodList} />
                </div>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
