// THIS KEY WORD IN NORMAL FUNCTION

function name () {
    console.log(this)
}
name()                                  /* <ref *1> Object [global] {
                                          global: [Circular *1],
                                          clearInterval: [Function: clearInterval],
                                          clearTimeout: [Function: clearTimeout],
                                          setInterval: [Function: setInterval],
                                          setTimeout: [Function: setTimeout] {
                                        [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                          },
                                          queueMicrotask: [Function: queueMicrotask],
                                          performance: Performance {
                                            nodeTiming: PerformanceNodeTiming {
                                              name: 'node',
                                              entryType: 'node',
                                              startTime: 0,
                                              duration: 139.0281000137329,
                                              nodeStart: 1.2281000018119812,
                                              v8Start: 4.185000002384186,
                                              bootstrapComplete: 50.4375,
                                              environment: 25.59689998626709,
                                              loopStart: -1,
                                              loopExit: -1,
                                              idleTime: 0       
                                            },
                                            timeOrigin: 1650700130267.701
                                          },
                                          clearImmediate: [Function: clearImmediate],
                                          setImmediate: [Function: setImmediate] {
                                            [Symbol(nodejs.util.promisify.custom)]: [Getter]
                                          }
                                        }