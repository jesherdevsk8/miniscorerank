import { IoCheckmarkSharp, IoCloseSharp, IoRemoveSharp } from "react-icons/io5";

const LastFiveParticipations = ({ last_five_participations }) => {
  return (
    last_five_participations.map((participation, index) => {
      switch (participation) {
        case "victory":
          return (
            <span
              key={index}
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-500 mr-1"
            >
              <IoCheckmarkSharp className="text-white" />
            </span>
          );
        case "defeat":
          return (
            <span
              key={index}
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500 mr-1"
            >
              <IoCloseSharp className="text-white" />
            </span>
          );
        case "draw":
          return (
            <span
              key={index}
              className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-400 mr-1"
            >
              <IoRemoveSharp className="text-white" />
            </span>
          );
        default:
          return null;
      }
    })
  );
};

export default LastFiveParticipations;
