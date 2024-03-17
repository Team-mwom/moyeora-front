/**
 * Front-end Link Common Area
 * 
 * 주석 규칙
 * @explan 설명
 * @link 이동 주소
 * @ex 사용예시
 * @author 작성자
 */

/**
 * @explan 메인 화면 Link
 * @link /
 * @ex { com_link_home }
 * @author Yongmini
 */
export const com_link_home = () => {
  window.location.href = '/';
}

/**
 * @explan 회원가입 Link
 * @link /signUp
 * @ex { com_link_signUp }
 * @author Yongmini
 */
export const com_link_signUp = () => {
	window.location.href = '/signUp';
}

// 카카오 API 관련 =================================================================

const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

/**
 * @explan 로그인 Link
 * @link KAKAO_AUTH_URL
 * @ex { com_link_signIn }
 * @author Yongmini
 */
export const com_link_signIn = () => {
	window.location.href=KAKAO_AUTH_URL
}

// 외부 URL =======================================================================

/**
 * @explan react-bootstrap Link
 * @link https://react-bootstrap.netlify.app
 * @ex { com_link_bootstrap }
 * @author Yongmini
 */
export const com_link_bootstrap = () => {
	window.open("https://react-bootstrap.netlify.app/")
}

// Test Page 관련 ==================================================================

/**
 * @explan Test Page Link
 * @link /test
 * @ex { com_link_test }
 * @author Yongmini
 */
export const com_link_test = () => {
	window.location.href = '/test';
}

/**
 * @explan Test Redux Page Link
 * @link /test/redux
 * @ex { com_link_test_redux }
 * @author Yongmini
 */
export const com_link_test_redux = () => {
	window.location.href = '/test/redux';
}

/**
 * @explan Test kakao Page Link
 * @link /test/kakao/main
 * @ex { com_link_test_kakao }
 * @author Yongmini
 */
export const com_link_test_kakao = () => {
	window.location.href = '/test/kakao/main';
}

/**
 * @explan Test JPA Page Link
 * @link /test/List?mybatis=false
 * @ex { com_link_test_jpa }
 * @author Yongmini
 */
export const com_link_test_jpa = () => {
	window.location.href = '/test/List?mybatis=false';
}

/**
 * @explan Test Mybatis Page Link
 * @link /test/List?mybatis=true
 * @ex { com_link_test_mybatis }
 * @author Yongmini
 */
export const com_link_test_mybatis = () => {
	window.location.href = '/test/List?mybatis=true';
}

