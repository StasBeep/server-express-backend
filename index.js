import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");

import { dataApiTodo } from "./src/api/_dataApiTodo.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

dataApiTodo(app);

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});