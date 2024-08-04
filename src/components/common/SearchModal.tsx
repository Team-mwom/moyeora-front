// SearchModal.tsx
import React, { useState, useEffect } from 'react';

interface FilterOption {
  sido: string;
  sigungu: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleFilterChange: (key: keyof FilterOption, value: string) => void;
  currentFilters: FilterOption;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, handleFilterChange, currentFilters  }) => {
  const [selectedSido, setSelectedSido] = useState(currentFilters.sido);
  const [selectedSigungu, setSelectedSigungu] = useState(currentFilters.sigungu);
  const [selectedCategory, setSelectedCategory] = useState(currentFilters.category);

  useEffect(() => {
    if (isOpen) {
      setSelectedSido(currentFilters.sido);
      setSelectedSigungu(currentFilters.sigungu);
      setSelectedCategory(currentFilters.category);
    }
  }, [isOpen, currentFilters]);

  if (!isOpen) return null;

  const handleSidoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSido(value);
    setSelectedSigungu(''); // 시도가 변경되면 시군구 초기화
    handleFilterChange('sido', value);
  };

  const handleSigunguChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSigungu(value);
    handleFilterChange('sigungu', value);
  };

  const handleApply = () => {
    if (selectedSido) {
      onClose();
    } else {
      alert('시도를 선택해주세요.');
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-content-div'>
        {/* 모달 헤더 */}
        <div className="modal-header">
          <h2 className="modal-title">필터 선택</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        {/* 시도 선택 */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="sido-select">시도</label>
          <select
            id="sido-select"
            className="filter-select"
            onChange={handleSidoChange}
            value={selectedSido}
          >
            <option value="">선택해주세요</option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="인천">인천</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
          </select>
        </div>

        {/* 시군구 선택 */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="sigungu-select">시군구</label>
          <select
            id="sigungu-select"
            className="filter-select"
            onChange={handleSigunguChange}
            value={selectedSigungu}
            disabled={!selectedSido}
          >
            <option value="">선택해주세요</option>
            <option value="강남구">강남구</option>
            <option value="서초구">서초구</option>
            {/* 다른 옵션추가해야함! */}
          </select>
        </div>

        {/* 카테고리 선택 */}

        <div className="filter-group">
          <label className="filter-label" htmlFor="category-select">카테고리</label>
          <select
            id="category-select"
            className="filter-select"
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              handleFilterChange('category', e.target.value);
            }}
            value={selectedCategory}
            //disabled={!selectedSido}
          >
            <option value="">카테고리 선택</option>
            <option value="음식점">음식점</option>
            <option value="카페">카페</option>
            <option value="쇼핑">쇼핑</option>
            <option value="문화시설">문화시설</option>
            <option value="숙박">숙박</option>
          </select>
        </div>

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default SearchModal;