/**
 * Front-end Common Area
 * 
 * import { com_utils_test } from 'utils/common/commonMoyeora.ts';
 * 
 * 주석 규칙
 * @explan 설명
 * @ex 사용예시
 * @author 작성자
 * @param 파라미터
 * @returns 리턴 값
 */

/**
 * @explan 테스트 function
 * @ex { com_utils_test() }
 * @author Yongmini
 * @param void
 * @returns String
 */
export function com_utils_test() {
  console.log("commomMoyeora Test !!!");
  return "commomMoyeora Test !!!";
}

/**
 * @explan 빈 값 유효성 체크를 위한 function
 * @ex { com_utils_getEmptyCheck() }
 * @author Yongmini
 * @param any
 * @returns any
 */
export function com_utils_getEmptyCheck() {

}

/**
 * @explan 현재 시간을 반환해주는 function
 * @ex { com_utils_getNowTime("YYYYMMDD") }
 * @author Yongmini
 * @param categories : String
 * @returns time
 */
export function com_utils_getNowTime(categories : String) {
  let today = new Date();
  let time;

  let getFullYear = today.getFullYear() // 년도 YYYY
  let getMonth = today.getMonth() + 1 // 월 MM
  let getDate = today.getDate(); // 날짜 DD
  let getDay = today.getDay(); // 요일 dd
  let getHours = today.getHours(); // 시간 hh
  let getMinutes = today.getMinutes(); // 분 mm
  let getSeconds = today.getSeconds(); // 초 ss
  let getMilliseconds = today.getMilliseconds(); // 밀리 초 s

  if(categories === "YYYYMMDD") {
    time = getFullYear + "/" + getMonth + "/" + getDate;
  } else if(categories === "YYYYMMDDhhmmsss") {
    time = getFullYear + "/" + getMonth + "/" + getDate 
      + " " + getHours + ':' + getMinutes + ':' + getSeconds + ':' + getMilliseconds;
  } else if(categories === "YYYYMMDDhhmmss") {
    time = time = getFullYear + "/" + getMonth + "/" + getDate 
      + " " + getHours + ':' + getMinutes + ':' + getSeconds;
  } else if(categories === "YYYYMMDDhhmm") {
    time = time = getFullYear + "/" + getMonth + "/" + getDate 
      + " " + getHours + ':' + getMinutes;
  }

  return time;
}