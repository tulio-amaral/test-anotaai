import app from "./app";
import '../src/database';

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));