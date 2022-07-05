import { atom } from "recoil";

const DarkAtom = atom({
	key: "darkMode", // unique ID (with respect to other atoms/selectors)
	default: false, // default value (aka initial value)
});

export default DarkAtom;
