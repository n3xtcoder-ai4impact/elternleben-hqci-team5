module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: 'Hello fron chat API.',
  };
};
