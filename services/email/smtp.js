export const sendEmail = (firstName, lastName, message) => {
  return new Promise((resolve, reject) => {
    Email.send({
      SecureToken: "e98226bd-909d-44ad-a8c4-7b98ec167591",
      To: "pro@arnaud-adon.fr",
      From: "assy.adon@gmail.com",
      Subject: `Message du site - ${firstName} ${lastName}`,
      Body: `<html><h2>${firstName} ${lastName} vous a envoyé un message</h2><strong>${message}</strong><br></br><em>Message provenent de arnaud-adon.fr</em></html>`,
    })
      .then((message) => {
        if (message !== "OK") {
          console.log(message);
          reject(message);
        }
        resolve(message);
      })
      .catch((error) => reject(error));
  });
};
