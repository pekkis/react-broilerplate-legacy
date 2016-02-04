import express from 'express';
import webpack from 'webpack';
import path from 'path';

const ENV = process.env.NODE_ENV;

export function createServer(config, webpackConfig, callback) {

    const compiler = webpack(webpackConfig);
    const { port } = config;

    const app = express();

    let devMiddleware;

    if (ENV === 'development') {

        devMiddleware = require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        });

        app.use(devMiddleware);
        app.use(require('webpack-hot-middleware')(compiler));

    }

    callback(app);

    if (ENV === 'development') {

        app.get('*', function(req, res) {
            const index = devMiddleware.fileSystem.readFileSync(
                path.join(webpackConfig.output.path, 'index.html')
            );
            res.end(index);
        });

    }


    app.listen(port, 'localhost', function(err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Listening at http://localhost:' + port);
    });

    return app;
}

