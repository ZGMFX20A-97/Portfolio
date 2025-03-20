import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Message, User } from "../../utils/Type";
import ClearIcon from "@mui/icons-material/Clear";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

//メッセージを展示するためのカード

const MessageCards = ({ message, user }: { message: Message; user: User }) => {
	//メッセージを削除する関数
	const handleDelete = async () => {
		try {
			//FireStoreのドキュメントを削除する
			await deleteDoc(doc(db, "Messages", message.id));
			alert("削除に成功しました!");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			alert(`削除に失敗しました:${error.message}`);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				maxWidth: "500px",
				height: "auto",
				backgroundColor: "#111111",
				borderRadius: 4,
				padding: 2,
				gap: 2
			}}
		>
			<Avatar
				src={message.userPhoto}
				sx={{ width: "45px", height: "45px" }}
			/>
			<Box>
				<Typography
					variant="body1"
					sx={{ minWidth: 0 }}
				>
					{message.displayName}
				</Typography>
				<Typography
					variant="body2"
					sx={{ minWidth: 0 }}
				>
					{message.timestamp?.toDate().toLocaleString()}
				</Typography>
			</Box>
			{/* 送信時にMessageにセットされたUserIDと現在ログインしているUserIDと比較して、自分の送信したMessageのみバツボタンを表示して削除できるようにする */}
			{user?.uid === message.uid ? (
				<IconButton
					onClick={handleDelete}
					sx={{ marginLeft: "auto" }}
				>
					<ClearIcon sx={{ color: "white" }} />
				</IconButton>
			) : (
				<></>
			)}
			<Typography
				sx={{
					alignSelf: "flex-end",
					marginRight: "auto",
					minWidth: "100%",
					whiteSpace: "normal",
					wordWrap: "break-word"
				}}
			>
				{message.content}
			</Typography>
			<Typography sx={{ marginLeft: "auto", opacity: 0.2, fontSize: 12 }}>
				Powered by FireStore
			</Typography>
		</Box>
	);
};

export default MessageCards;
