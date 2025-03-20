import { Avatar, Box, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useState } from "react";
import { User } from "../../utils/Type";

//ログイン後ユーザーのGoogleアカウントのIcon

const UserIcon = ({ user }: { user: User }) => {
	//多重ログアウトによるエラーを防ぐためにログアウト処理中のloading状態を定義
	const [loading, setLoading] = useState<boolean>(false);

	//ログアウト処理に関する関数
	async function handleLogout() {
		if (loading) return;
		setLoading(true);
		try {
			//firebaseSDKのログアウトAPI
			await signOut(auth);
			alert("ログアウトしました！");
		} catch (error) {
			console.error("ログアウト中にエラーが発生しました:", error);
		}
	}

	return (
		<Box sx={{ height: "70px" }}>
			<Avatar
				onClick={handleLogout}
				src={user?.photo}
				sx={{ height: "45px", width: "45px", "&:hover": { cursor: "pointer" } }}
			/>
			<Typography sx={{ fontSize: "10px", opacity: 0.8 }}>
				Tap your icon to logout.
			</Typography>{" "}
			{/* Iconをクリックしたらログアウトできる仕様 */}
		</Box>
	);
};

export default UserIcon;
