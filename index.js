function Translate() {
  const inputText = $("#input-text").val();
  const inputLang = $("#inp_lang").val();
  const outputLang = $("#out_lang").val();
  const outputElement = $("#output_values");

  if (!inputText || !inputLang || !outputLang) {
    alert("Please make sure to select both input and output languages.");
    return;
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLang}&tl=${outputLang}&dt=t&q=${encodeURI(inputText)}`;

  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      const translation = data[0][0][0];
      outputElement.text(translation);
    },
    error: function (error) {
      console.error("Translation error:", error);
      alert("Translation error. Please check the console for details.");
    },
  });
}
