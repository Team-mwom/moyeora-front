import React, { useEffect, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import DaumPostcode from "react-daum-postcode";
import 'styles/sign/post.css'

const Post = (props:any) => {

  const complete = (data: any) => {
    var code = data.zonecode;
    var addr = ''; // 주소 변수


    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
    } else { // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
    }


    props.setcompany({
      ...props.company,
      code:code,
      addr: addr,

    })
      
      props.setPopup(false);
    }

    return (
        <div className="post_container">
            <div className="post_list_div">
                <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} />
            </div>
            <div className="post_btn_div">
                <Button className="post_close_btn" variant="dark" onClick={() => props.setPopup(false)}>닫기</Button> 
            </div>
            
        </div>
    );
};

export default Post;