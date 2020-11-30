// 0. Get clientKey
getClientKey().then(clientKey => {
    getPaymentMethods().then(paymentMethodsResponse => {
        // 1. Create an instance of AdyenCheckout
        const checkout = new AdyenCheckout({
            environment: 'test',
            clientKey: test_H5T4RJ2U5ZCALOYK46JK7T6IK4RW655F, // Mandatory. clientKey from Customer Area
            paymentMethodsResponse,
            removePaymentMethods: ['paysafecard', 'c_cash']
        });

        // 2. Create and mount the Component
        const dropin = checkout
            .create('dropin', {
                // Events
                onSelect: activeComponent => {
                    updateStateContainer(activeComponent.data); // Demo purposes only
                },
                onChange: state => {
                    updateStateContainer(state); // Demo purposes only
                },
                onSubmit: (state, component) => {
                    // state.data;
                    // state.isValid;
                    makePayment(state.data);
                }
            })
            .mount('#dropin-container');
    });
});
