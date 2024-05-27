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

            if (typeof data !== 'number' || !Number.isInteger(data)) {
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
                let num = data;
                while(num > 0) {
                    resultBinary = (num % 2) + resultBinary;
                    num = Math.floor(num / 2);
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
    {
        path: '/fibonacci',
        method: 'POST',
        handler: (request, h) => {

            const { n } = request.payload;

            let num = n;
            let num1 = 0, num2 = 1;

            function add_fibonacci (i) {
                if (i == 1) {
                    return 0;
                }
                else if (i == 2) {
                    return 1;
                }
                else {
                    while(i != 2){
                        total = num1 + num2;
                        num1 = num2;
                        num2 = total;
                        i--;
                    }
                    return total;
                }
            }

            resultFibo = add_fibonacci(num);

            const response = h.response({
                status: 'success',
                result: resultFibo,
            });
            response.code(200);
            return response;
        }
    },
];

module.exports = routes;