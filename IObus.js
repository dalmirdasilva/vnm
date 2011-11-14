var IObus = {};

IObus.PORTA = 0xfa;
IObus.PORTB = 0xfb;
IObus.PORTC = 0xfc;
IObus.PORTD = 0xfd;

IObus.ports = new Array(IObus.PORTA, IObus.PORTB, IObus.PORTC, IObus.PORTD);

IObus.instance = new function(cpu) {

    this.cpu = cpu;

    this.write = function(port, data) {
        var address = port;
        if(IObus.ports.indexOf(port) < 0) {
            throw "IObus exception: Writing in a invalid port address."
        }
        this.cpu.writeMemory(address, data);
    }
    
    this.read = function(port) {
        var address = port;
        if(IObus.ports.indexOf(port) < 0) {
            throw "IObus exception: Reading in a invalid port address."
        }
        return this.cpu.readMemory(address);
    }
};

IObus.getInstanece = function(cpu) {
    return IObus.instance(cpu);
}
