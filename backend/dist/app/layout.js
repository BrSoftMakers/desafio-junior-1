"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "SoftPet",
    description: "Softmakers me contrata!",
};
function RootLayout({ children, }) {
    return (<html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>);
}
exports.default = RootLayout;
//# sourceMappingURL=layout.js.map