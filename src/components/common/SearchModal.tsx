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

interface sido{
  orgCd: string;
  orgNm: string;
  upOrgCd: string;
  orgClsCd: string;
  cdDelYn: string;
}

interface sigungu{
  orgCd: string;
  orgNm: string;
  upOrgCd: string;
  orgClsCd: string;
  cdDelYn: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleFilterChange: (key: keyof FilterOption, value: string) => void;
  currentFilters: FilterOption;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, handleFilterChange, currentFilters  }) => {  
  // 카테도리, 서브카테고리 선택 처리
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(currentFilters.subcategory);
  // 카테고리, 서브카테고리(API로 가져온값 저장)
  const [categories, setCategories] = useState<category[]>([]);
  const [subCategories, setSubCategories] = useState<subCategory[]>([]);
  //const [sigungus, setSigungus] = useState<string[]>([]);

  // 시/도, 시/군/구 선택처리
  const [selectedSido, setSelectedSido] = useState<string | null>(null); //useState(currentFilters.sido);
  const [selectedSigungu, setSelectedSigungu] = useState(currentFilters.sigungu);
  // 시/도, 시/군/구 (API로 가져온값 저장)
  const [sidoList, setSido] = useState<sido[]>([]);
  const [sigunguList, setSigungu] = useState<sigungu[]>([]);


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredSubCategories, setFilteredSubCategories] = useState<subCategory[]>([]);
  const [filteredSigungu, setFilteredSigungu] = useState<sigungu[]>([]);

  // 시/도 선택 처리 함수
  const handleSidoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectSidoCd = e.target.value;

    // 선택된 시/도의 이름을 찾아 필터에 적용
    const selectedSidoName = sidoList.find(sido => sido.orgCd === selectSidoCd)?.orgNm || '';

    setSelectedSido(selectSidoCd);
    setSelectedSigungu(''); // 시도가 변경되면 시군구 초기화
    handleFilterChange('sido', selectedSidoName);
  };

  // 시/군/구 선택 처리 함수
  const handleSigunguChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSigunguCd = e.target.value;
    // 선택된 서브카테고리의 이름을 찾아 필터에 적용
    const selectedSigunguName = sigunguList.find(sigungu => sigungu.orgCd === selectedSigunguCd)?.orgNm || '';
    
    setSelectedSigungu(selectedSigunguCd);
    handleFilterChange('sigungu', selectedSigunguName);
  };

  // 카테고리 선택 처리 함수
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categorySeq = parseInt(e.target.value);
    // 선택된 카테고리의 이름을 찾아 필터에 적용
    const selectedCategoryName = categories.find(cat => cat.categorySeq === categorySeq)?.categoryName || '';
    setSelectedCategory(categorySeq);
    setSelectedSubCategory(''); // 카테고리가 변경되면 서브 카테고리 선택 초기화
    handleFilterChange('category', selectedCategoryName);
  };

  // 서브 카테고리 선택 처리 함수
  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subCategorySeq = parseInt(e.target.value);
    // 선택된 서브카테고리의 이름을 찾아 필터에 적용
    const selectedSubCategoryName = subCategories.find(cat => cat.subCategorySeq === subCategorySeq)?.subCategoryName || '';
    
    setSelectedSubCategory(subCategorySeq+"");
    handleFilterChange('subcategory', selectedSubCategoryName);
  };

  

  const searchModalData = useCallback(async () => {
    if (!isOpen) return; // 모달이 열려있지 않으면 데이터를 가져오지 않음

    try {
      const response = await axios.get('/api/all/category/search-category');
      const data = response.data;

      setCategories(data.categories || []);
      setSubCategories(data.subCategories || []);
      setSido(data.sido || []);
      setSigungu(data.sigungu || []);

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

  // 카테고리가 변경될 때마다 서브 카테고리 필터링함
  useEffect(() => {
    if (selectedCategory !== null && subCategories.length > 0) {
      const filtered = subCategories.filter(sub => sub.categoryEntity.categorySeq === selectedCategory);
      setFilteredSubCategories(filtered);
    } else {
      setFilteredSubCategories([]);
    }
  }, [selectedCategory, subCategories]);

   // 시/도가 변경될 때마다 시군구 필터링함
  useEffect(() => {
    if (selectedSido !== null && sigunguList.length > 0) {
      const filtered = sigunguList.filter(sigungu => sigungu.upOrgCd === selectedSido);
      setFilteredSigungu(filtered);
    } else {
      setFilteredSigungu([]);
    }
  }, [selectedSido, sigunguList]);

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
            value={selectedSido || ''}
          >
            <option value="">선택해주세요(시/도)</option>
            {sidoList.map((sido) => (
              <option key={sido.orgCd} value={sido.orgCd}>
                {sido.orgNm}
              </option>
            ))}
          </select>

           {/* 시군구 선택 */}
          <select
            id="sigungu-select"
            className="filter-select"
            onChange={handleSigunguChange}
            value={selectedSigungu || ''}
            disabled={!selectedSido}
          >
            <option value="">선택해주세요(시/군/구)</option>
              {filteredSigungu.map((sigungu) => (
                <option key={sigungu.orgCd} value={sigungu.orgCd}>
                  {sigungu.orgNm}
                </option>
              ))}
          </select>
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
            value={selectedSubCategory || ''}
            disabled={!selectedCategory} // 카테고리가 선택되지 않으면 비활성화
          >
            <option value="">서브카테고리 선택</option>
            {filteredSubCategories.map((subCategory) => (
              <option key={subCategory.subCategorySeq} value={subCategory.subCategorySeq}>
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