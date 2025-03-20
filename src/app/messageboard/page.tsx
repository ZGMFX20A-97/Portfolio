"use client";
import { Box } from "@mui/material";
import { useAppSelector } from "../../../utils/hooks";
import MessageInput from "../../../components/messageboard/MessageInput";
import LoginButton from "../../../components/messageboard/LoginButton";
import UserIcon from "../../../components/messageboard/UserIcon";
import TypingEffect from "../../../components/universal/typingEffect";
import Loading from "../../../components/universal/Loading";
import PageTitle from "../../../components/universal/PageTitle";
import { Suspense, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { login, logout } from "../../../utils/userSlice";
import { useAppDispatch } from "../../../utils/hooks";
import MessagePreviewBlock from "../../../components/messageboard/MessagePreviewBlock";
//メッセージボードページ

const MessagePage: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (loginUser) => {
			if (loginUser) {
				dispatch(
					login({
						uid: loginUser.uid,
						photo: loginUser.photoURL,
						email: loginUser.email,
						displayName: loginUser.displayName
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	const user = useAppSelector((state) => state.user);

	return (
		<Box
			mt="50px"
			mb="100px"
		>
			<Box>
				<PageTitle>Message Board</PageTitle>
				<TypingEffect
					delay={700}
					sx={{ fontFamily: "Source Code Pro", fontSize: "20px" }}
				>
					Feel free to say something!
				</TypingEffect>
			</Box>
			<Box sx={{ display: "flex", mt: "50px", gap: 2 }}>
				<MessageInput user={user} />{" "}
				{/* ユーザーが存在する場合はメッセージ送信用Componentを表示、存在しない場合は入力禁止のComponentを表示 */}
				{user ? <UserIcon user={user} /> : <LoginButton />}
			</Box>
			<Suspense fallback={<Loading />}>
				<MessagePreviewBlock user={user} />
			</Suspense>
		</Box>
	);
};

export default MessagePage;
