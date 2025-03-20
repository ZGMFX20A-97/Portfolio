import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, IconButton } from "@mui/material";
import wantedlyIcon from "../../public/wantedly.png";
import { sendEmail } from "../../utils/action";

//SNS展示カード

const SNSIconBar: React.FC = () => {
	return (
		<Box sx={{ display: "flex", gap: 2 }}>
			<IconButton
				component="a"
				href="https://github.com/ZGMFX20A-97"
				target="_blank"
			>
				<GitHubIcon
					sx={{
						width: 30,
						height: 30,
						color: "white"
					}}
				/>
			</IconButton>
			<IconButton
				component="a"
				href="https://github.com/ZGMFX20A-97"
				target="_blank"
				onClick={sendEmail}
			>
				<MailOutlineIcon
					sx={{
						width: 30,
						height: 30,
						color: "white"
					}}
				/>
			</IconButton>
			<IconButton
				component="a"
				href="https://www.wantedly.com/id/CatinPajamas"
				target="_blank"
			>
				<Box
					component="img"
					src={wantedlyIcon.src}
					sx={{
						width: 30,
						height: 30
					}}
				/>
			</IconButton>
		</Box>
	);
};

export default SNSIconBar;
