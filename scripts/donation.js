const API_publicKey = "FLWPUBK-ee4f50e2181a7717274f1ef058927eae-X";

function payWithRave() {
    const email = document.getElementById('email').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const amounts = document.getElementsByName('amount');
    let amount_value;
    for(var i = 0; i < amounts.length; i++){
        if(amounts[i].checked){
            amount_value = amounts[i].value;
        }
    }

    const amount = amount_value || Number(document.getElementById('amount').value);
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: email,
        customer_firstname: firstname,
        customer_lastname: lastname,
        amount: amount,
        customer_phone: phone,
        currency: "NGN",
        country: "NG",
        txref: "rave-123456",
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect txRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
