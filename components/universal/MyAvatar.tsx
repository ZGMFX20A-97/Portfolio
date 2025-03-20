import { Avatar } from "@mui/material";
import avatar from "../../public/Avatar.jpg";

//アバター（モモンガ）

const MyAvatar: React.FC = () => {
	return (
		<Avatar
			src={avatar.src}
			sx={{
				width: 80,
				height: 80,
				backgroundColor: "#01EB50",
				opacity: 0.5,
				transition: "all 0.4s ease-in-out",
				"&:hover": {
					opacity: 0.9,
					cursor: "pointer" //ホバーしたら明るくなる
				}
			}}
		/>
	);
};

export default MyAvatar;
