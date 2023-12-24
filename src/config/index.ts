import "dotenv/config";

export default {
  braintree: {
    merchantId: process.env.BRAINTREE_MERCHANT_ID || "",
    privateId: process.env.BRAINTREE_PRIVATE_ID || "",
    publicID: process.env.BRAINTREE_PUBLIC_ID || "",
  },
};
