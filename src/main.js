import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
	require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/reviews";
import "./scripts/contact";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/form";
import scrollTo from './scripts/scrollTo';
import mobileMenu from './scripts/mobileMenu';

scrollTo();
mobileMenu();
