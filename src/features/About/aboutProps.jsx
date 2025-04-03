import {  FaCalendar, FaChessKing, FaChessPawn,} from "react-icons/fa";
import { MdTimer } from "react-icons/md";



export const FeatureList = [
  {
    id: 1,
    icon: <FaChessKing   color="#2da5ff" size={30} />,
    heading: "Playing Venue",
    text: " Ecobank Building ,Ozumba Mbadiwe, Victoria Island, Lagos Nigeria",
  },
  {
    id: 2,
    icon: <FaCalendar color="#2da5ff" size={30} />,
    heading: "Date",
    text: "24th - 28th May 2024",
  },
  {
    id: 3,
    icon: <FaChessPawn color="#2da5ff" size={30} />,
    heading: "Age Categories",
    text: "This tournament is open to all primary schools (players, both boys and girls, who are at least 12 years old), secondary schools (players who are no older than 18 years old), and tertiary institutions in Nigeria.",
  },
  {
    id: 4,
    icon: <MdTimer color="#2da5ff" size={30} />,
    heading: " Number of Rounds Rapids",
    text: " FIDE Team Rapid Swiss system will be used with 7 rounds for the Rapid  Event. ",
  },
  {
   
    id: 5,
    icon: <MdTimer color="#2da5ff" size={30} />,
    heading: " Number of Rounds Blitz",
    text: "FIDE Team Blitz Swiss system will be used with 9 rounds for the Blitz Event.",
  },
 
];
