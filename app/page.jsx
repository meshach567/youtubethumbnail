import { Box } from "@mui/material";
import Navbar from "./Navbar";
import SearchFeed from "../components/SearchFeed";
import ChannelDetails from "../components/ChannelDetails";
import VideoDetail from "../ui/VideoDetail";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Feed />
      <VideoDetail />
      <ChannelDetails />
      <SearchFeed />
    </Box>
  );
}
