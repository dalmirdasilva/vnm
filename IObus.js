var IObus = {};

IObus.port = [0, 0, 0, 0];

IObus.read = function(port) {
    return IObus.port[port];
}

IObus.write = function(port, data) {
    IObus.port[port] = data;
}
