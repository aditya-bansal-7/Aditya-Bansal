import { GoVerified } from "react-icons/go";
import { SiGithub, SiLinkedin, SiTelegram, SiLeetcode } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/aditya-bansal-7",
			text: "@aditya-bansal-7",
		},
		{
			title: "Telegram",
			Icon: SiTelegram,
			href: "https://t.me/bnsl_boy",
			text: "@bnsl_boy",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/aditya-bansal-581b2a267/",
			text: "@aditya-bansal",
		},
		{
			title: "LeetCode",
			Icon: SiLeetcode,
			href: "https://leetcode.com/aditya-bansal-7/",
			text: "@aditya-bansal-7",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/124298494?v=4"
					alt="Aditya Bansal"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Aditya Bansal</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 19 years ago.</p>
				</div>
			</div>
			<p>
			Hi there! This is Aditya Bansal . 
			Currently i am doing B.Tech in computer science from Galgotias University. 
			My experience in Telegram bot development .
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
