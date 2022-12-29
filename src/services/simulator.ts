// import { v4 as uuidv4 } from "uuid";
import callAPI from "../pages/api/call";
import { SimulatorTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
console.log(`ROOT_API: ${process.env.NEXT_PUBLIC_API}`);
const API_VERSION = "api/v1";

const urlInquiry = process.env.NEXT_PUBLIC_IPG_INQUIRY_URL;

export async function setSimulator(data: SimulatorTypes) {
  // START Process Inquiry
  console.log("dataSimulator", data);
  const date = new Date();
  const orderRefId =
    date.getFullYear().toString() +
    date.getMonth().toString() +
    date.getDate().toString() +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString();
  const requestData = {
    amount: data.total,
    currency: "IDR",
    referenceUrl: process.env.NEXT_PUBLIC_FRONTEND + "/simulator/" + orderRefId,
    order: {
      id: orderRefId,
      disablePromo: true,
      afterDiscount: data.total,
      items: [
        {
          name: data.material,
          quantity: data.quantity,
          amount: data.total,
        },
      ],
    },
    customer: {
      name: "Fyan E. Widyantoro",
      email: "fyanestu@gmail.com",
      phoneNumber: "082114017471",
      country: "ID",
      postalCode: "12345",
    },
    paymentSource: data.paymentSource,
    paymentSourceMethod: "authcapture",
    token: "",
  };

  console.log("urlInquiry", urlInquiry);
  console.log("requestData", requestData);
  const responseData = await callAPI({
    url: urlInquiry,
    method: "POST",
    data: requestData,
  });
  console.log("responseData", responseData);

  // START Save to DB
  const url = `${ROOT_API}/${API_VERSION}/simulator`;
  console.log("url", url);

  const payload = {
    // reqId: uuidv4(),
    reqId: "",
    apiKey: process.env.NEXT_PUBLIC_IPG_API_KEY,
    orderRefId,
    currency: "IDR",
    paymentSource: data.paymentSource,
    paymentSourceMethod: "authcapture",
    amount: data.total,
    trxToken: responseData?.data?.token,
    selectionsUrl: responseData?.data?.urls?.selections,
    checkoutUrl: responseData?.data?.urls?.checkout,
    statusHttp: responseData?.statusHttp,
    requestData,
    responseData,
  };
  console.log("payload", payload);

  return await callAPI({
    url,
    method: "POST",
    data: payload,
  });
}
