import { Grid2 } from "@mui/material";
import React from "react";
import MessageCards from "./MessageCard";
import { User } from "../../utils/Type";
import useTakeMessages from "../../utils/useTakeMessages";

const MessagePreviewBlock = ({ user }: { user: User }) => {
	const { data: messages } = useTakeMessages();

	return (
		<Grid2
			container
			size={12}
			sx={{ display: "flex", flexDirection: "column", mt: "50px", rowGap: 5 }}
		>
			{messages.map((message) => (
				<MessageCards
					key={message.id}
					message={message}
					user={user}
				/>
			))}
		</Grid2>
	);
};

export default MessagePreviewBlock;
