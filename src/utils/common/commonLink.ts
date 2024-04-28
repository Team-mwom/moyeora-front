/**
 * 
 * 해당 파일은 폐기 되었습니다.
 * -> 테스트 페이지를 제외한 각 페이지당 useNavigate 사용으로 변경
 * -> LineText.tsx 파일 폐기 후 삭제 예정인 파일 입니다.
 * @author Yongmini
 * 
 */

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
 * @explan 회원가입 Link
 * @link /signUp
 * @ex { com_link_signUp }
 * @author Yongmini
 */
export const com_link_signUp = () => {
	window.location.href = '/signUp';
}

/**
 * @explan 마이페이지 Link
 * @link /myProfile
 * @ex { com_link_myProfile }
 * @author Yongmini
 */
export const com_link_myProfile = () => {
	window.location.href = '/myProfile';
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

