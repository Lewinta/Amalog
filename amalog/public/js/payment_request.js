frappe.ui.form.on("Payment Request", {
    refresh(frm) {
        frm.remove_custom_button(__("Resend Payment Email"));
        if(frm.is_new())
            frm.set_value("grand_total", 0)
    },
    validate(frm) {
        if (frm.doc.grand_total == 0.0){
            validated = false;
            frappe.throw(__("El Monto del reembolso debe ser mayor que cero."))
        }
        
    }
})