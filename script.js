$(document).ready(function () {
  const qrInput = $("#qrInput");
  const generateBtn = $("#generateBtn");
  const qrCodeDiv = $("#qrCode");
  const downloadBtn = $("#downloadBtn");

  generateBtn.on("click", function () {
    const inputText = qrInput.val().trim();

    // Check if input is not empty
    if (inputText === "") {
      alert("Please enter some text to generate QR code");
      return;
    }

    // Clear previous QR code
    qrCodeDiv.empty();

    // Generate new QR code with improved settings
    qrCodeDiv.qrcode({
      text: inputText,
      width: 256,
      height: 256,
      correctLevel: 0, // L=0, M=1, Q=2, H=3 (Error Correction Level)
      render: "canvas", // Use canvas rendering for better quality
      background: "#ffffff",
      foreground: "#000000",
      quiet: 4, // Quiet zone around QR code
    });

    // Show the QR code container
    qrCodeDiv.show();

    // Show the download button
    downloadBtn.show();
  });

  // Download QR code as an image
  downloadBtn.on("click", function () {
    const canvas = qrCodeDiv.find("canvas")[0];
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  });

  // Optional: Hide QR code when input is cleared
  qrInput.on("input", function () {
    if ($(this).val().trim() === "") {
      qrCodeDiv.hide();
      downloadBtn.hide(); // Hide the download button as well
    }
  });
});
