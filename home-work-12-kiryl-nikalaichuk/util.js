(global => {
    'use strict';

    let AppUtil = {};

    global.AppUtil = AppUtil;

    AppUtil.debounce = (payloadFunction, delayMs, callback, onError) => {
        let timerId,
            params;

        const applyPayloadFunction = () => {
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

        return (...arg) => {
            params = arg;
            
            if (timerId) {
                clearTimeout(timerId);
            }

            timerId = setTimeout(applyPayloadFunction, delayMs);
        };
    };

    AppUtil.throttle = (payloadFunction, delayMs, callback, onError) => {
        let intervalId,
            lastParamsApplied,
            params;

        const applyPayloadFunction = () => {
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

        return (...arg) => {
            params = arg;
            lastParamsApplied = false;

            if (intervalId === undefined) {
                applyPayloadFunction();

                intervalId = setInterval(() => {
                    if (!lastParamsApplied) {
                        applyPayloadFunction();
                    } else {
                        clearInterval(intervalId);
                        intervalId = undefined;
                    }

                }, delayMs);
            }
        }
    };


})(typeof module !== 'undefined' ? module.exports : window);
