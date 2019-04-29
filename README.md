# rc-component-x

React components foundation in TypeScript. [Docs Here](https://pwcong.github.io/rc-component-x/index.html)

### 0x00. init primary npm registry server

```shell
> docker pull verdaccio/verdaccio
> docker run --name verdaccio_service -p 4873:4873 -d verdaccio/verdaccio
```

### 0x01. set npm configuration

```shell
> npm set registry http://127.0.0.1:4873/
> npm adduser
```

### 0x02. ready

```
> yarn

hava fun!

```
