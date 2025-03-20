import { Box, styled, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import { sendMessage } from "../../utils/action";
import { useFormStatus } from "react-dom";
import { User } from "../../utils/Type";
import { grey } from "@mui/material/colors";

export const Textarea = styled(TextareaAutosize)(
	({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'sans-serif' ;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 10px 10px 0;
  color: ${grey[50]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};

  &:hover {
    border-color: ${grey[200]};
  }

  &:focus {
    outline: 0;
    border-color: ${grey[500]};
    box-shadow: 0 0 0 3px ${
			theme.palette.mode === "dark" ? grey[600] : grey[200]
		};
  }

  &:focus-visible {
    outline: 0;
  }
`
);

//ログインした場合のメッセージ入力欄
const MessageInput = ({ user }: { user: User }) => {
	const [text, setText] = useState<string>("");
	const status = useFormStatus();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
			e.preventDefault();
			sendMessage(user, text);
			setText("");
		}
	};

	return (
		<Box>
			<form>
				<Textarea
					placeholder={
						user
							? "ご意見やコメントどうぞ！(Ctrl/Command+Enterキーで送信)"
							: "🔏ログインしてからコメントしよう！"
					}
					minRows={3}
					maxRows={5}
					value={text}
					onKeyDown={handleKeyDown}
					disabled={status.pending || user === null}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setText(e.target.value)
					}
					sx={{
						width: "500px",
						backgroundColor: "#111111",
						opacity: 0.6,
						borderRadius: 3,
						height: "70px"
					}}
				/>
			</form>
		</Box>
	);
};

export default MessageInput;
