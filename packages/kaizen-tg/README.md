# kaizen

        _/                       _/
       _/  _/       _/_/_/             _/_/_/_/       _/_/       _/_/_/
      _/_/       _/    _/      _/         _/       _/_/_/_/     _/    _/
     _/  _/     _/    _/      _/       _/         _/           _/    _/
    _/    _/     _/_/_/      _/     _/_/_/_/       _/_/_/     _/    _/


## What is this?

- This is a theme generator for kaizen

## Usage

1. `cd web/themes/custom`
2. `npx @skilld/kaizen-tg` and follow instructions. Or alternative installation using Docker `docker run -it --rm -u $(id -u):$(id -g) -v "$PWD":/app -w /app node:lts-alpine npx @skilld/kaizen-tg`
3. `cd [theme_name]`
4. `yarn && yarn build` or `make install && make build` if you want to use docker instead of local