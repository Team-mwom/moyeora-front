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
 * @returns String : commomMoyeora Test !!!
 */
export const com_utils_test = () => {
  console.log('commomMoyeora Test !!!');

  return 'commomMoyeora Test !!!';
}

/**
 * @explan String 빈 값 유효성 체크를 위한 function
 * @ex { com_utils_getEmptyCheck(value) }
 * @author Yongmini
 * @param value : String
 * @returns true or false
 */
export const com_utils_getEmptyCheck = (value : String) => {
  if(value === "" || value === null || value === undefined) return true;
  else return false;
}

/**
 * @explan 현재 시간을 반환해주는 function
 * @ex { com_utils_getNowTime("YYYYMMDD") }
 * @author Yongmini
 * @param categories : String
 * @returns time : String
 */
export const com_utils_getNowTime = (categories : String) => {
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

  switch (categories) {
    case "YYYY": // 년도
      time = getFullYear;
      break;

    case "YYYYMM": // 년도 월
      time = getFullYear + "/" + getMonth;
      break;

    case "YYYYMMDD": // 년도 월 날짜
      time = getFullYear + "/" + getMonth + "/" + getDate;
      break;

    case "MM": // 월
      time = getMonth;
      break;

    case "DD": // 날짜
      time = getDate;
      break;

    case "MMDD": // 월 날짜
      time = getMonth + "/" + getDate;
      break;

    case "MMDDdd": // 월 날짜 요일
      time = getMonth + "/" + getDate + "/" + getDay;
      break;

    case "YYYYMMDDdd": // 년도 월 날짜 요일
      time = getFullYear + "/" + getMonth + "/" + getDate + " " + getDay;
      break;

    case "dd": // 요일
      time = getDay
      break;

    case "YYYYMMDDhhmm": // 년도 월 날짜 시간 분
      time = time = getFullYear + "/" + getMonth + "/" + getDate 
        + " " + getHours + ':' + getMinutes;
      break;

    case "YYYYMMDDhhmmss": // 년도 월 날짜 시간 분 초
      time = time = getFullYear + "/" + getMonth + "/" + getDate 
        + " " + getHours + ':' + getMinutes + ':' + getSeconds;
      break;

    case "YYYYMMDDhhmmsss": // 년도 월 날짜 시간 분 밀리초
      time = getFullYear + "/" + getMonth + "/" + getDate 
        + " " + getHours + ':' + getMinutes + ':' + getSeconds + ':' + getMilliseconds;
      break;

    case "hhmmss": // 시간 분 초
      time = getHours + ':' + getMinutes + ':' + getSeconds;
      break;

    case "hhmm": // 시간 분
      time = getHours + ':' + getMinutes;
      break;

    default:
      time = "error"
      break;
  }

  return time;
}