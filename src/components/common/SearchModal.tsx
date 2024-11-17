// SearchModal.tsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface FilterOption {
  sido: string;
	sigungu: string;
	category: string;
	subcategory: string;
}

interface category{
  categorySeq: number;
  categoryName: string;
  categoryClassYn: string;
}

interface subCategory{
  subCategorySeq: number;
  categorySeq: number;
  subCategoryName: string;
  categoryEntity: category;
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
  const [sigunguList, setSigunguList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(currentFilters.subcategory);
  
  const [categories, setCategories] = useState<category[]>([]);
  const [subCategories, setSubCategories] = useState<subCategory[]>([]);
  const [sigungus, setSigungus] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredSubCategories, setFilteredSubCategories] = useState<subCategory[]>([]);

  const handleSidoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSido(value);
    setSelectedSigungu(''); // 시도가 변경되면 시군구 초기화
    handleFilterChange('sido', value);
    handleFilterChange('sigungu', '');
    fetchSigunguList(value);
  };

  const handleSigunguChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSigungu(value);
    handleFilterChange('sigungu', value);
  };

  // 카테고리 선택 처리 함수
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categorySeq = parseInt(e.target.value);
    setSelectedCategory(categorySeq);
    setSelectedSubCategory(''); // 카테고리가 변경되면 서브 카테고리 선택 초기화

    // 선택된 카테고리의 이름을 찾아 필터에 적용
    const selectedCategoryName = categories.find(cat => cat.categorySeq === categorySeq)?.categoryName || '';
    handleFilterChange('category', selectedCategoryName);
  };

  // 서브 카테고리 선택 처리 함수
  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSubCategory(value);
    handleFilterChange('subcategory', value);
  };

  

  const searchModalData = useCallback(async () => {
    if (!isOpen) return; // 모달이 열려있지 않으면 데이터를 가져오지 않음

    try {
      const response = await axios.get('/api/all/category/search-category');
      const data = response.data;

      setCategories(data.categories || []);
      setSubCategories(data.subCategories || []);
      setSigungus(data.sigungus || []);

      //console.log("API 응답 로깅 :: " + response.data); // API 응답 로깅
      //const newItems = response.data.content.map(formatItemDate);
      //setItems(prevItems => [...prevItems, ...newItems]);

      // 더 이상 불러올 페이지가 없으면 hasMore를 false로 설정
      //setHasMore(page < response.data.totalPages - 1);
    } catch (error) {
      console.error('Failed to fetch items', error);
    } finally {
      //setLoading(false);
    }
  }, [isOpen]);

  useEffect(() => {
    searchModalData();
  }, [searchModalData]);

  useEffect( () => {
      //searchModalData();
      setSelectedSido(currentFilters.sido);
      setSelectedSigungu(currentFilters.sigungu);
      setSelectedSubCategory(currentFilters.subcategory);

      // 현재 필터에서 카테고리에 해당하는 categorySeq 찾기
      const currentCategory = categories.find(cat => cat.categoryName === currentFilters.category);
      setSelectedCategory(currentCategory ? currentCategory.categorySeq : null);
  }, [currentFilters, categories]);

  // 카테고리가 변경될 때마다 서브 카테고리 필터링함
  useEffect(() => {
    if (selectedCategory !== null && subCategories.length > 0) {
      const filtered = subCategories.filter(sub => sub.categoryEntity.categorySeq === selectedCategory);
      setFilteredSubCategories(filtered);
    } else {
      setFilteredSubCategories([]);
    }
  }, [selectedCategory, subCategories]);
  
  const fetchSigunguList = useCallback(async (sido: string) => {
    if (!sido) return;
    
    setLoading(true);
    setError(null);
    try {
      alert("sido :: " + sido);
      const response = await fetch(`/api/districts/${sido}`);
      if (!response.ok) {
        throw new Error('Failed to fetch sigungu list');
      }
      const data = await response.json();
      setSigunguList(data);
    } catch (error) {
      console.error('Error fetching sigungu list:', error);
      setError('시군구 목록을 불러오는데 실패했습니다.');
      setSigunguList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  if (!isOpen) return null;  

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
          <label className="filter-label" htmlFor="sido-select">지역</label>
          <select
            id="sido-select"
            className="filter-select"
            onChange={handleSidoChange}
            value={selectedSido}
          >
            <option value="">선택해주세요(시/도)</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="세종">세종</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충청북도">충북</option>
            <option value="충청남도">충남</option>
            <option value="전라북도">전북</option>
            <option value="전라남도">전남</option>
            <option value="경상북도">경북</option>
            <option value="경상남도">경남</option>
            <option value="제주">제주</option>
          </select>

           {/* 시군구 선택 */}
          <select
            id="sigungu-select"
            className="filter-select"
            onChange={handleSigunguChange}
            value={selectedSigungu}
            disabled={!selectedSido || loading}
          >
            <option value="">선택해주세요(시/군/구)</option>
            {loading ? (
              <option value="" disabled>로딩중...</option>
            ) : (
              sigunguList.map((sigungu) => (
                <option key={sigungu} value={sigungu}>
                  {sigungu}
                </option>
              ))
            )}
          </select>
          {error && <div>{error}</div>}
        </div>

        {/* 카테고리 선택 */}
        <div className="filter-group">
          <label className="filter-label" htmlFor="category-select">카테고리</label>
          <select
            id="category-select"
            className="filter-select"
            onChange={handleCategoryChange}
            value={selectedCategory || ''}
          >
            <option value="">카테고리 선택</option>
            {categories.map((category) => (
              <option key={category.categorySeq} value={category.categorySeq}>
                {category.categoryName}
              </option>
            ))}
          </select>

          {/* 서브카테고리 선택 */}
          <select
            id="subCategory-select"
            className="filter-select"
            onChange={handleSubCategoryChange}
            value={selectedSubCategory}
            disabled={!selectedCategory} // 카테고리가 선택되지 않으면 비활성화
          >
            <option value="">서브카테고리 선택</option>
            {filteredSubCategories.map((subCategory) => (
              <option key={subCategory.subCategorySeq} value={subCategory.subCategoryName}>
                {subCategory.subCategoryName}
              </option>
            ))}
          </select>
        </div>

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default SearchModal;