if (os.getenv("LOCAL_LUA_DEBUGGER_VSCODE") === "1") {
  require("lldebugger").start();
}

love.draw = () => {
  love.graphics.print("Hello World from TypeScript", 10, 10);
};
