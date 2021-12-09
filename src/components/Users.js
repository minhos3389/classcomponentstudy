// import { useState } from 'react';
import React, { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component {
  // render() method안에 function을 추가하지 않습니다.
  // 기술적으로는 가능하지만 , 제대로 작동하지 않을 수 있습니다.
  // 대신 클래스형 컴포넌트에서는 함수 내용을 그룹으로 묶을 수 있습니다.(클래스 안에 그룹으로 묶어줌)
  // toggleUsersHandler()라는 메서드를 추가해줍니다. 이게 가장 기본적인 형태입니다.
  // 그리고 state를 제어하는 방식은 클래스형 컴포넌트만 사용했던 과거와 다릅니다. 16.8에서 hooks가 등장하면서 state를 hooks로 다루면서 간단해졌습니다.
  // 리액트 16.8 이전버전에서는 클래스형 컴포넌트가 상태를 관리하는 유일무이 컴포넌트였습니다.
  // 기본적으로 2개가 필요합니다. state를 초기화하고 선언하는 작업, 그리고 업데이트가 필요할때, toggleUsersHandler()와 동일한 형식으로 값을 업데이트.
  // sate와 클래스형 컴포넌트를 선언할 때 , constructor()를 사용하게 됩니다.
  // constructor()는 해당 구문이 작성될 때, 자동으로 호출됩니다. 해당 클래스가 컴포넌트로 사용될 때도 마찬가지입니다.
  // consturctor()에서 초기화할 수 있는데, state초기화와 같습니다.
  // 클래스형 컴포넌트에서 state는 무.조.건 객체!라는 점을 항상 기억합니다. always object
  // 함수형 컴포넌트에서는 어떤 형태든지 상관없습니다. Boolean, String, number 도 넣을 수 있고, object도 가능합니다. flexible합니다.
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }


  toggleUserHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
          {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
          ))}
        {/* {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))} */}
      </ul>
    );

    return (
			<div className={classes.users}>
				<button onClick={this.toggleUserHandler.bind(this)}>
					{this.state.showUsers ? 'Hide' : 'Show'} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
    )
  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
