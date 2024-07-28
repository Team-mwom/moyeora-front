
import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import Resizer from "react-image-file-resizer";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import { RootState } from 'store/store';
import 'styles/profile/profileImgEdit.css'
import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';


const ProfileImgEdit = ( props:any) => {
   
  const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
  });
  const userInfo = JSON.parse(localStorage.getItem("userInfo") as string);
  const [imagePriview, setImagePreview] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies();
	const onImageHandler = async (e:any) => {
			const file = await e.target.files[0];                                  //사용자가 업로드한 이미지를 비동기적으로 가져온다.
			console.log("imgae incoding before : ", file);
			const suppertedFormats = ["image/jpeg", "image/png", "image/svg+xml"]; //허용한 이미지 형식 정의
			if (!e.target.files[0]) {                                              //만약 업로드한 이미지가 존재하지 않는다면 함수를 종료
				return;
			}
			if (!suppertedFormats.includes(file.type)) {                           //업로드한 이미지가 정의된 형식에 맞지 않는다면 경고창 띄우기
				alert(
					"지원되지 않은 이미지 형식입니다. JPEG, PNG형식의 이미지를 업로드해주세요."
				);
				return;
			}
			try {
				const compressedFile = await resizeFile(e.target.files[0]);          //"resizeFile"함수를 통해서 업로드한 이미지 리사이징 및 인코딩
			console.log("imgae incoding after : ", compressedFile);
				setImagePreview(String(compressedFile));                             //인코딩한 이미지를 브라우저에 프리뷰 하기 위해 state 정의
				// setUploadImage(String(compressedFile));                              //인코딩한 이미지를 서버에 전송하기 위한 state 정의
				console.log(String(compressedFile));   
			} catch (error) {                                                      //리사이징에 실패했을시 console에 출력하게 한다.
				console.log("file resizing failed");
			}
  };
 
  const saveImg = useCallback(() => { 

    if (imagePriview == "") {
      alert("이미지를 선택해주세요")
    } else {
      
      authAxios.post('/api/user/changeProfileImg', { 'profileImg': imagePriview } ).then((res) => {
        if (authException(res, [cookies, setCookie, removeCookie])) {
          const resData = {
            nickName: userInfo.nickName,
            profileImg:imagePriview
          }
          localStorage.setItem('userInfo', JSON.stringify(resData));
          window.location.reload();
        }   
      }).catch((err) => { alert('로그인 후 이용해주세요') })
    
    }
  },[imagePriview])


  const myElementRef= useRef(null);
  const clickImagePriview = useCallback(
    (e: any) => {
      const abc:any=myElementRef.current
      abc!.click();
    }

    , [myElementRef]);
	return (
    <div className='profileImgEdit_full_container'>
      
      <div className='profileImgEdit_container'>
          <input 
          ref={myElementRef }
          name='profileImage'  
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={onImageHandler}
          />
        
          <br></br>
          <div className="profile_view_container" >
            <img className="profile_view_img" src={imagePriview} width={300} height={300} onClick={clickImagePriview}></img>
            { imagePriview==""?<span className="profile_view_img_span" >이미지 선택</span>:""}
            

          </div>
          <Button variant="dark" onClick={() => props.setPopup(false)}>닫기</Button> 
          <Button variant="dark" onClick={saveImg}>저장</Button> 
        </div>
     
	  </div>
	);
};

export default ProfileImgEdit;

	const resizeFile = (file:any) =>
    new Promise((resolve) => {                     //비동기 작업을 위해서 "Promise"를 통한 비동기 작업 정의
      Resizer.imageFileResizer(                   //Resizer의 "imageFileResize"메서드를 통해서 이미지 리사이징 및 인코딩 옵션 정의
        file,               
        200,                                        //이미지 너비
        200,                                        //이미지 높이
        "SVG",                                      //파일 형식
        100,                                        //이미지 퀄리티(100으로 해도 이미지 리사이징시 상당히 깨지긴 한다)
        0 /* rotation */,
        (uri) => {
          /* resize new image with url*/
          resolve(uri);
        },
        "base64" /* output Type */                 //"blob"으로 정의할 수 있다.
      );
    });