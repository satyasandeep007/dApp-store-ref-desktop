import transakSDK from "@transak/transak-sdk";

const initializeTransak = (params) => {
  const {
    apiKey,
    environment,
    defaultCryptoCurrency,
    walletAddress,
    fiatCurrency,
    partnerOrderId,
    email,
  } = params;

  console.log("launching transak");
  let transak = new transakSDK({
    widgetHeight: "750px",
    widgetWidth: "450px",
    fiatCurrency, // If you want to limit fiat selection eg 'GBP'
    apiKey, // Your API Key
    environment, // STAGING/PRODUCTION
    defaultCryptoCurrency,
    email,
    walletAddress,
    partnerOrderId,
    disableWalletAddressForm: true,
    // Need to add transakone params and other needed params
  });

  return transak;
};

export const openTransak = ({ email, address }) => {
  const transakParams = {
    apiKey: "3758451a-36b9-4f92-a8a5-192bdf9d76de",
    environment: "STAGING",
    defaultCryptoCurrency: "APOLDAI",
    walletAddress: address,
    fiatCurrency: "EUR",
    network: "polygon",
    email: email || "sandeep@transak.com",
  };
  console.log(transakParams, "transakParams");

  const transakWidget = initializeTransak(transakParams);
  console.log(transakWidget, "transakWidget");

  if (transakWidget) {
    transakWidget.init();

    // This will trigger when the user marks payment is made.
    transakWidget.on(
      transakWidget.EVENTS.TRANSAK_ORDER_SUCCESSFUL,
      async (orderData: any) => {
        console.log(orderData, "orderData");

        transakWidget.close();
      }
    );
  }
};
