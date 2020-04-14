const Url = "/email/send";

export async function sendEmail(options) {
  try {
    const response = await fetch("/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });
    return !!response && response.status === 200;
  } catch (ex) {
    return false;
  }
}
