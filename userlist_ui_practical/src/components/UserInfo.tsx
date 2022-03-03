import React from 'react'
import "../App.css";

interface userprops {
    info: { id: number; first_name: string; email: string; avatar: string; status: string} | null;
    first_name: string;
    email: string;
    avatar: string;
    id: number;
    status: string;
}
const UserInfo = (props: userprops) => {
 
  return (
    <>
    {props.info !== null && (
    <div className='user-profile'>
        <div className='user-details'>
            <div className='image'>
                <img src={props.info.avatar} alt="avatar"/>
            </div>
            <div className='personal-details'>
                <p className="cardUserName">{props.info.first_name}</p>
                <sup className='user-dot'>*</sup>
            </div>
            <p>{props.info.email}</p>
            <h3>Your Plan : Standard</h3>
            <button>{props.info.status} User</button>
        </div>

        <div className='Plan-details'>
            <h3>Plan Uses</h3>
            <div id='horizontalline'>
                <div id='hr1'></div>
            </div>
            <div className='click'>
                <div className='reviewed-clicks'>
                    <h2>2,450</h2>
                    <p>Clicks Reviewed</p>
                </div>
                <div className="vertical"></div>
                <div className='monthly-clicks'>
                    <h2>5000</h2>
                    <p>Monthly Clicks</p>
                </div>
            </div>

        </div>
    </div>
    )}
    </>
  )
}

export default UserInfo;
