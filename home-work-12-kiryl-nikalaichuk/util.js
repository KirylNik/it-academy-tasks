(global => {
    'use strict';

    let AppUtil = {};

    global.AppUtil = AppUtil;

    AppUtil.debounce = (payloadFunction, delayMs, callback, onError) => {
        let timerId;

        return (...arg) => {
            const params = arg;
            
            if (timerId) {
                clearTimeout(timerId);
            }

            this.applyPayloadFunction = () => {
                let result;

                 try {
                    result = payloadFunction.apply(null, params);

                    callback && callback(result);
                } catch (err) {
                    if (onError) {
                        onError(err);
                    } else {
                        console.error('Error in AppUtil.debounce:', err);
                    }
                }
            }

            timerId = setTimeout(this.applyPayloadFunction, delayMs);
        };
    };

    AppUtil.throttle = (payloadFunction, delayMs, callback, onError) => {
        let intervalId,
            lastParamsApplied,
            params;

        return (...arg) => {
            params = arg;
            lastParamsApplied = false;

            this.applyPayloadFunction = () => {
                let result;

                try {
                    result = payloadFunction.apply(null, params);
                    lastParamsApplied = true;
                    params = undefined;

                    callback && callback(result);
                } catch (err) {
                    if (onError) {
                        onError(err);
                    } else {
                        console.error('Error in AppUtil.throttle:', err);
                    }
                }
            }

            if (intervalId === undefined) {
                this.applyPayloadFunction();

                intervalId = setInterval(() => {
                    if (!lastParamsApplied) {
                        this.applyPayloadFunction();
                    } else {
                        clearInterval(intervalId);
                        intervalId = undefined;
                    }

                }, delayMs);
            }
        }
    };


})(typeof module !== 'undefined' ? module.exports : window);
