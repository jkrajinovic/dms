export function AppMode(mode) {
    this.state = mode;
}

AppMode.prototype.panic = function(){
    this.state = AppMode.MODE_PANIC;
}

AppMode.MODE_NORMAL = "normal";
AppMode.MODE_PANIC = "panic";
AppMode.MODE_RECOVERED_FROM_PANIC = "recovered-from-panic";