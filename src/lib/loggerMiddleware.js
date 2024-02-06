const loggerMiddleware = store => next => action => {
    // 미들웨어 기본 구조
    console.group(action && action.type); // 액션 타입을 그룹명으로 설정
    console.log('이전상태', store.getState());
    console.log('action', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
	// next 함수를 쓰지 않으면 리듀서에게 전달이 되지 않기 때문에 액션이 무시 됨
	// next 함수를 기준으로 이전이 이전 상태, 이후가 다음 상태
    console.log('다음 상태', store.getState());
    console.groupEnd(); // 그룹 끝
}

export default loggerMiddleware;