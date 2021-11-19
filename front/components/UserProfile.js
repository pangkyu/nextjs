import React, {useCallback} from 'react';
import {Avatar, Button, Card} from 'antd';
const UserProfile = ({setIsLogedIn}) =>{
    const onLogOut = useCallback(() =>{
        setIsLogedIn(false);
    }, []);
    return (
        <Card actions = {[
            <div key = "twit">짹짹<br/>0</div>,
            <div key = "followings">팔로잉<br/>0</div>,
            <div key = "followings">팔로워<br/>0</div>,
            ]}>
            <Card.Meta title = "bae" avatar = {<Avatar>bsk</Avatar>}></Card.Meta>
            <Button onClick = {onLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;