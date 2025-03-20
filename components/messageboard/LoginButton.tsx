import { Box, IconButton, Typography } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/firebase";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

//ログインボタン

const LoginButton: React.FC = () => {
	//多重ログインリクエストによるエラーを防ぐためにLoading状態を設定
	const [loading, setLoading] = useState<boolean>(false);

	const handleLogin = async () => {
		//loadingがTrueの場合、処理プロセス中のためReturn
		if (loading) return;
		//でなければloadingをTrueにし、ログイン処理に入る
		setLoading(true);
		try {
			//firebaseSDKのログインAPI
			await signInWithPopup(auth, provider);
			alert("ログインに成功しました!");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error.code === "auth/cancelled-popup-request") {
				alert(
					"短時間で複数回のリクエストを検知しました，前のリクエストを取り消しました。"
				);
			}
			if (error.code === "auth/popup-closed-by-user") {
				alert("ログイン操作はユーザーにより取り消されました。");
			} else {
				alert(`ログインに失敗しました: ${error.message}`);
			}
		} finally {
			//ログイン成功有無に限らずloadingをfalseにする
			setLoading(false);
		}
	};

	return (
		<Box sx={{ height: "70px" }}>
			<IconButton onClick={handleLogin}>
				{loading ? (
					<Typography sx={{ height: "30px", color: "white" }}>
						🔄 ログイン中...
					</Typography>
				) : (
					<LoginIcon sx={{ color: "white", height: "35px", width: "35px" }} />
				)}
			</IconButton>
			<Typography sx={{ fontSize: "10px", opacity: 0.8 }}>
				Tap icon to login.
			</Typography>
		</Box>
	);
};

export default LoginButton;
