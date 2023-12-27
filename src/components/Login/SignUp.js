import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import styles from "./SignUp.module.css";
import loginStyles from "./Login.module.css";

const SignUp = () => {
  const { users, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameChecked, setUsernameChecked] = useState(false); // 아이디 중복 확인 상태
  const [usernameCheckMessage, setUsernameCheckMessage] = useState(null); // 아이디 중복 확인 메시지 상태 변수

  const handleUsername = (e) => {
    setUsername(e.target.value);
    const regex = /^[a-zA-Z0-9]+$/;
    setUsernameValid(e.target.value.length >= 4 && regex.test(e.target.value));
    setUsernameChecked(false); // 아이디가 변경되면 usernameChecked를 false로 변경
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    setPasswordValid(regex.test(e.target.value));
  };

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleUsernameCheck = () => {
    // 아이디 중복 확인 핸들러
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      setUsernameCheckMessage(null);
      alert("이미 사용중인 아이디입니다."); // 알림창 추가
    } else {
      setUsernameChecked(true);
      setSignupError(null); // 중복되지 않는 경우에는 signupError를 null로 설정
      alert("가입 가능한 아이디입니다."); // 알림창 추가
    }
  };

  const handleSignUp = () => {
    // 아이디, 비밀번호, 비밀번호 확인 필드가 모두 채워져 있는지 확인
    if (!username || !password || !confirmPassword) {
      alert("회원가입 할 아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 아이디 중복 확인이 되었는지 확인
    if (!usernameChecked) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
      alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }

    // 아이디 중복 확인, 비밀번호 일치 확인이 모두 통과한 경우에만 회원가입 진행
    const newUser = { username, password };
    dispatch({ type: "SIGN_UP", payload: newUser });
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles.signUptitle}>회원가입</h2>
      </header>
      <div className={styles.InputWrapper}>
        <label>
          <div className={styles.signupList}>아이디</div>
          <div className={styles.idBox}>
            <input
              type="text"
              placeholder="영문, 숫자 4자 이상"
              value={username}
              onChange={handleUsername}
              className={loginStyles.input}
            />
            <button onClick={handleUsernameCheck} className={styles.idChk}>
              중복 확인
            </button>
          </div>
          {!usernameValid && username.length > 0 && (
            <div className={styles.errorMessageWrap}>
              올바른 아이디를 입력해주세요.
            </div>
          )}
          {usernameCheckMessage && (
            <div className={styles.successMessageWrap}>
              {usernameCheckMessage}
            </div>
          )}
        </label>
        <br />
        <label>
          <div className={styles.signupList}>비밀번호</div>
          <input
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8~20자"
            value={password}
            onChange={handlePassword}
            className={loginStyles.input}
          />
          {!passwordValid && password.length > 0 && (
            <div className={styles.errorMessageWrap}>
              올바른 비밀번호를 입력해주세요.
            </div>
          )}
        </label>
        <br />
        <label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="비밀번호 확인"
            onChange={handleConfirmPassword}
            className={loginStyles.input}
            style={{ marginTop: 22 }}
          />
          {!passwordMatch && (
            <div className={styles.errorMessageWrap}>
              비밀번호와 일치하지 않습니다.
            </div>
          )}
        </label>
      </div>

      <br />
      <div className={styles.signupBtnWrapper}>
        <button onClick={handleSignUp} className={styles.signupBtn}>
          가입
        </button>
        <button onClick={handleCancel} className={styles.signupBtn}>
          취소
        </button>
      </div>
      {signupError && <div className={styles.signUpErrMsg}>{signupError}</div>}
    </div>
  );
};

export default SignUp;
