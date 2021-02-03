// Type definitions for jwa 2.0
// Project: https://github.com/auth0/node-jwa
// Definitions by: Joel Lobo <https://github.com/joellobo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

   declare module 'jwa' {
    function jwa(algorithm: string): {
        sign: string,
        verify: string
    };
    export = jwa;
   }
