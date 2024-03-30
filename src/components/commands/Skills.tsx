import ProgressBar from "../ProgressBar";
import {
	SiPython,
	SiThealgorithms,
	SiReact,
	SiTailwindcss,
	SiTelegram,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiTelegram,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Telegram Bots",
		},
		{
			Icon: SiPython,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Python",
		},
		{
			Icon: SiTailwindcss,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "TailWind-CSS",
		},
		{
			Icon: SiReact,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "React.js",
		},
		{
			Icon: SiThealgorithms,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "DSA",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
