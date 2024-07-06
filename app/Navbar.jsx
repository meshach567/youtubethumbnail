
import { Link } from "next/link";
import Stack from '@mui/material/Stack';


import { logo } from "../utils/constants";
import SearchBar from "../components/SearchBar";
import Image from "next/image";

function Navbar () {
return <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link href="/" style={{ display: "flex", alignItems: "center" }}>
      <Image src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
};

export default Navbar;
