const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello, world!';
        }
    },
    {
        path: '/test',
        method: 'GET',
        handler: (request, h) => {
            const response = h.response({
                status: 'success',
                message: 'testing',
            });
            response.code(200);
            return response;
        }
    },
    {
        path: '/convert-binary',
        method: 'POST',
        handler: (request, h) => {

            const { data } = request.payload;
            let resultBinary = '';

            if (typeof data !== 'number' && !Number.isInteger(data)) {
                const response = h.response({
                    status: 'fail',
                    message: 'Input harus angka dan bilangan bulat!',
                });
                response.code(400);
                return response;
            }

            if (data === 0) {
                resultBinary = '0';
            }

            else {
                while(data > 0) {
                    resultBinary = (data % 2) + resultBinary;
                    data = Math.floor(data / 2);
                }
            }

            const response = h.response({
                status: 'success',
                result: resultBinary,
            });
            response.code(200);
            return response;
        }
    },
];

module.exports = routes;