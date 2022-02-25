import movieeApi, { getImage, imageSize, mediaType, timeWindow } from 'api-config/moiveeApi';
import Button from 'components/button/Button';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './login.scss';

function Login() {
	// =============== state ====================
	// show password
	const [isShowPassword, setIsShowPassword] = useState(false);
	const passwordRef = useRef();

	const [bgImageSrc, setBgImageSrc] = useState('');

	// username
	const [username, setUsername] = useState('');
	// password
	const [password, setPassword] = useState('');

	// ============== useEffect ===================
	//get image background
	useEffect(() => {
		const getBackgroundImageSrc = async () => {
			let response = await movieeApi.getTrending(mediaType.all, timeWindow[0].slug);
			let path = response.results[0].backdrop_path || response.results[0].poster_path;
			setBgImageSrc(path);
		};

		getBackgroundImageSrc();
	}, []);

	const handleClickShowPassword = () => {
		if (!isShowPassword) {
			// state hien tai dang an => hien
			passwordRef.current.type = 'text';
		} else {
			passwordRef.current.type = 'password';
		}
		setIsShowPassword(!isShowPassword);
	};

	// login
	const handleSubmitLoginForm = async (e) => {
		e.preventDefault();
		// let response = await movieeApi.user.login(username, password);
		// console.log(response);
	};

	return (
		<div
			style={{
				backgroundImage: `url(${getImage(imageSize.original, bgImageSrc)})`,
			}}
			className="login"
		>
			<div className="login__form">
				<h2 className="login__form__title">Đăng nhập</h2>
				<form onSubmit={handleSubmitLoginForm} className="login__form__content">
					<div className="form__group">
						<label htmlFor="username">Tên đăng nhập:</label>
						<div className="form__input">
							<input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								autoComplete="off"
								type="text"
								id="username"
								placeholder="Tên đăng nhập"
							/>
							<i className="bx bxl-gmail"></i>
						</div>
					</div>
					<div className="form__group">
						<label htmlFor="password">Mật khẩu:</label>
						<div className="form__input">
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								ref={passwordRef}
								autoComplete="off"
								type="password"
								name="password"
								id="password"
								placeholder="Mật khẩu"
							/>
							<div className="pointer">
								{!isShowPassword ? (
									<i onClick={handleClickShowPassword} className="bx bxs-shield"></i>
								) : (
									<i onClick={handleClickShowPassword} className="bx bxs-low-vision"></i>
								)}
							</div>
						</div>
					</div>
					<div className="form__submit">
						<Button type="submit">Đăng nhập</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
