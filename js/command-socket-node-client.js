"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const core_1=require("@command-socket/core"),node_websocket_1=require("./node-websocket");class CommandSocketNodeClient extends core_1.CommandSocket{constructor(e,o=new core_1.CommandRegistry,t={}){super(new node_websocket_1.NodeWebSocket(e),o,t)}static create(e,o=new core_1.CommandRegistry){return new Promise(t=>{let n=new CommandSocketNodeClient(e,o);n.getEvents().OPEN.subscribe(()=>t(n))})}}exports.CommandSocketNodeClient=CommandSocketNodeClient;
//# sourceMappingURL=command-socket-node-client.js.map
