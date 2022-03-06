const basePath = process.env.NODE_ENV === 'production' ? '/solar-system' : '';

module.exports = {
    basePath,
    assetPrefix: `${basePath}/`
};
