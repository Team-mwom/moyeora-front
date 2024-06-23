/**
 * @explain 사용되는 부분
 * @ex 예시
 * @author jhkang
 */
export interface Moyeora {
  myrSeq?: number;
  categorySeq?: number;
  categoryName: string;
  subCategorySeq?: number;
  subCategoryName: string;
  myrTitle: string;
  myrTags?: string;
  myrMainImg?: string;
  myrCurrentMember: number;
  myrMaxMember: number;
  myrPlace: string;
  myrDate: string;
  regId?: string;
  regDt?: string;
  modId?: string;
  modDt?: string;
}
