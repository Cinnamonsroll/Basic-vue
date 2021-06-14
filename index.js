let concurrently = require("concurrently");
concurrently(
    [
        "cd frontend && npm run serve",
        "cd backend && node .",
    ],
);
