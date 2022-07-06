- Ref
  - [ArangoDBのCollectionにNodeJSでアクセスする](https://zenn.dev/rururu3/articles/524f15fc2c03f6)

- Usage

```bash
$ time node index.js
{
  _key: '191',
  _id: 'users/191',
  _rev: '_d4H_UHa--D',
  id: 105,
  name: 'Alexander',
  age: 32,
  active: true,
  gender: 'm'
}

real    0m0.226s
user    0m0.107s
sys     0m0.043s

$ time yarn kick index.js
yarn run v1.22.17
warning package.json: No license field
$ node -r esm index.js
{
  _key: '191',
  _id: 'users/191',
  _rev: '_d4H_UHa--D',
  id: 105,
  name: 'Alexander',
  age: 32,
  active: true,
  gender: 'm'
}
Done in 0.59s.

real    0m0.898s
user    0m0.689s
sys     0m0.138s
```