# Mongoose Strangeness

To reproduce the problem, run

    $ make watch

then make a small change to one of the files. For example, add some
whitespace to the end of test.spec.js and save it. This happens:

```
OverwriteModelError: Cannot overwrite `Example` model once compiled.
  at Mongoose.model (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/lib/index.js:272:13)
  at Context.<anonymous> (/Users/joni/Scratch/javascript/mongoose-breakage/test.spec.js:23:28)
  at Test.Runnable.run (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runnable.js:196:15)
  at Runner.runTest (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:343:10)
  at Runner.runTests.next (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:389:12)
  at next (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:269:14)
  at Runner.hooks (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:278:7)
  at next (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:226:23)
  at Runner.hook (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runner.js:241:7)
  at done (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runnable.js:187:5)
  at Runnable.run.duration (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mocha/lib/runnable.js:199:9)
  at NativeConnection.<anonymous> (/Users/joni/Scratch/javascript/mongoose-breakage/test.spec.js:11:7)
  at NativeConnection.g (events.js:192:14)
  at NativeConnection.EventEmitter.emit (events.js:93:17)
  at open (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/lib/connection.js:431:10)
  at NativeConnection.Connection.onOpen (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/lib/connection.js:439:5)
  at Connection._open (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/lib/connection.js:399:10)
  at NativeConnection.doOpen (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:47:5)
  at Db.open (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/db.js:245:14)
  at Server.connect.connectCallback (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/server.js:277:7)
  at g (events.js:192:14)
  at EventEmitter.emit (events.js:126:20)
  at Db._callHandler (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/db.js:1485:25)
  at Server.connect.connectionPool.on.server._serverState (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/server.js:477:30)
  at MongoReply.parseBody (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/responses/mongo_reply.js:127:5)
  at Server.connect.connectionPool.on.server._serverState (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/server.js:434:22)
  at EventEmitter.emit (events.js:96:17)
  at _connect (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/connection_pool.js:140:13)
  at EventEmitter.emit (events.js:99:17)
  at Socket.exports.Connection.createDataHandler (/Users/joni/Scratch/javascript/mongoose-breakage/node_modules/mongoose/node_modules/mongodb/lib/mongodb/connection/connection.js:321:22)
  at Socket.EventEmitter.emit (events.js:96:17)
  at TCP.onread (net.js:397:14)
```
