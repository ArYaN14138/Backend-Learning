const app = require("./src/app");
const connectDB = require("./src/db/db");

const startServer = async () => {
  try {
    await connectDB(); // 🔥 WAIT here
    app.listen(3000, () => {
      console.log("🚀 running perfectly on the port 3000");
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
  }
};

startServer(); 