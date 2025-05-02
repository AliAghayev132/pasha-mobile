module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.tsx', '.ts', '.js', '.json'],
                    alias: {
                        "@components": "./components",
                        "@screens": "./screens",
                        "@navigations": "./navigations",
                        "@hooks": "./hooks",
                        "@redux": "./redux",
                        "@services": "./services",
                        "@utils": "./utils",
                        "@types": "./types",
                        "@constants": "./constants",
                        "@assets": "./assets",
                        "@contexts": "./contexts"
                    }
                }
            ]
        ]
    };
};