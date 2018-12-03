# Full stack web application skeleton

[![Maintainability](https://api.codeclimate.com/v1/badges/f291fc6ee1ae90ea86b4/maintainability)](https://codeclimate.com/github/oh-my-c0de/oh-my-fullstack/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f291fc6ee1ae90ea86b4/test_coverage)](https://codeclimate.com/github/oh-my-c0de/oh-my-fullstack/test_coverage)

## Getting started

1. Clone and install dependencies:

```bash
$ git clone https://github.com/oh-my-c0de/oh-my-fullstack.git ./my-fullstack && cd my-fullstack && yarn
```

2. Run application in development mode:

```bash
$ yarn start
```

4. Visit [`localhost:3000`](http://localhost:3000)

**That's it!** :sunglasses:

## Scripts

* `$ yarn start` - Start application in development mode.

* `$ yarn prod:start` - Start application with `PM2`.

* `$ yarn prod:stop` - Stop application with `PM2`.

* `$ yarn prod:restart` - Restart application with `PM2`.

* `$ yarn build` - Make production build.

* `$ yarn lint` - Check code linting.

## Local Environment Configuration

To override configuration variables for local environment create `.env` file in project root with needed variables. Example:
```
NODE_ENV=development
PORT=3000
```
To find used variables check `config.js` and `server/config.js`.


## License
[Beerware](LICENSE)
