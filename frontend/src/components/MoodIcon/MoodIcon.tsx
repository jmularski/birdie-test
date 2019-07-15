import * as React from "react";
import { FiSmile, FiMeh, FiFrown } from "react-icons/fi";

interface Props {
  mood: string;
  size?: number;
}

export default function MoodIcon(props: Props) {
  const { mood, size = 12 } = props;

  switch (mood) {
    case "happy":
      return <FiSmile size={size} />;
    case "okay":
      return <FiMeh size={size} />;
    default:
      return <FiFrown size={size} />;
  }
}
