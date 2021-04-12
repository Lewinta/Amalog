frappe.ui.form.on("Payment Entry", {
    mode_of_payment(frm) {
        frm.trigger("set_received_amt");
    },
    paid_to(frm){
        frm.trigger("set_received_amt");
    },
    paid_amount(frm){
        frm.trigger("set_received_amt");
    },
    set_received_amt(frm) {
        const { paid_amount, target_exchange_rate} = frm.doc;
        setTimeout(() => {
            if (frm.doc.paid_to_account_currency != "DOP")
                frm.set_value("received_amount", paid_amount / target_exchange_rate)
        }, 300)
    }

})