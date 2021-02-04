# Remix Starter for Architect (AWS CloudFormation)

Welcome to Remix!

This is a starter repo for using [Remix](https://remix.run) with [Architect](http://arc.codes) (wrapper around AWS CloudFormation).

## Development

The root of this project is an Architect project that follows Architect's project conventions. the Remix portion is just one endpoint found at `src/http/any-catchall`.

When developing your app, you'll need two terminal tabs, one to run Architect's sandbox, and the other to run the Remix development asset server. In production, however, the Remix asset server won't be used because your assets will be built and shipped with the server.

### From the root of this project

Architect recommends installing their CLI globally:

```sh
$ npm install -g @architect/architect
```

Now all you need to do from the root of this project is start the Architect sandbox:

```sh
$ arc sandbox
```

### From the Remix http handler directory

Now open another terminal tab and change directory into the Remix http handler.

```bash
cd src/http/any-catchall
```

Rename `.npmrc.example` to `.npmrc` and insert the license key you get from [logging in to your dashboard at remix.run](https://remix.run).

> Note: if this is a public repo, you'll probably want to move the line with
> your key into `~/.npmrc` to keep it private.

Next, install all dependencies using `npm`:

```sh
npm install
```

Your `@remix-run/*` dependencies will come from the Remix package registry.

Once everything is installed, start the app in development mode with the following command:

```sh
$ npm start
```

The dev server automatically rebuilds as your source files change. To see your changes, refresh the browser.

> Note: Hot module reloading is coming soon, which will allow you to see your
> changes without refreshing.

Now you should be able to visit http://localhost:3333. (Note that `:3334` is not your server, it's the Remix development asset server).

## Deploying

From the Remix http handler, build the app for production:

```sh
$ cd src/http/any-catchall
$ npm run build
```

And then from the root of the project, deploy with `arc`.

```sh
$ cd ../../..
$ arc deploy
```

That's it!

## Documentation

Detailed documentation for Remix [is available at remix.run](https://remix.run/dashboard/docs).