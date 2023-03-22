# Reproduction

1. `npm install`
2. `npm run preview`
3. go to `http://localhost:3000/ssr`

Will throw:

```text
[mf:err] GET /ssr: ReferenceError: Element is not defined
    at Ui (/tmp/astro-test/wow/dist/_worker.js:60:23785)
    at tn (/tmp/astro-test/wow/dist/_worker.js:60:23813)
    at Object.fn (/tmp/astro-test/wow/dist/_worker.js:60:24004)
    at Bi (/tmp/astro-test/wow/dist/_worker.js:60:19150)
    at Te (/tmp/astro-test/wow/dist/_worker.js:60:18936)
    at Z (/tmp/astro-test/wow/dist/_worker.js:60:17075)
    at qi (/tmp/astro-test/wow/dist/_worker.js:60:23998)
    at Wi (/tmp/astro-test/wow/dist/_worker.js:60:25730)
    at an (/tmp/astro-test/wow/dist/_worker.js:60:26836)
    at ra (/tmp/astro-test/wow/dist/_worker.js:71:164)
```
