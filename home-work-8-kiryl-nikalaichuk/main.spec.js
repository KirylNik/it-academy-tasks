describe('AppUtil.debounce tests', function () {

        it('AppUtil.debounce tests1', function () {
            var test;

            setVarTest = () => {
                test = '123';
            };

            var result = AppUtil.debounce(setVarTest, 5000);
            result();
            expect(test).toEqual('123');
        });
});