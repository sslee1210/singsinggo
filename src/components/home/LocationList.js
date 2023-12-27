import React from 'react';
import Nav from '../../Nav';

const LocationList = () => {
  return (
    <div>
      <h2>메인 카테고리 선택 페이지</h2>
      <ul>
        <li>전체</li>
        <li>냉동</li>
        <li>냉장</li>
        <li>실온</li>
      </ul>
      <Nav />
    </div>
  );
};

export default LocationList;