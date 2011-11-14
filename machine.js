/**
 * Neander simulator - A simple simulator for the Neander hypothetical computer in javascript
 * 
 * Copyright (C) 2011  Dalmir da Silva <dalmirdasilva@gmail.com>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
/**
 * Machine class
 */
function Machine(cpu) {
    
    this.clockFrequency = 10;
    
    this.cpu = cpu;

    this._interval;

    this.powerOn = function() {
        var tcy = 1000 / this.clockFrequency;
        this._interval = setInterval(function() {
            this.cpu.clockTick();
        }, tcy);
    }

    this.powerOff = function() {
        clearInterval(this._interval);
        this.reset();
        this.awake();
    }

    this.setClockFrequency = function(clockFrequency) {
        this.clockFrequency = clockFrequency;
    }
    
    this.getClockFrequency = function() {
        return this.clockFrequency;
    }
}
