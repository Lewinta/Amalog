frappe.ui.form.on("Sales Invoice", {
    refresh(frm) {
        frm.trigger("set_defaults");
        frm.trigger("set_custom_buttons");
    },
    set_defaults(frm) {
        if(frm.is_new() && !frm.doc.cost_center)
            frappe.db.get_value(
                "Company",
                frm.doc.company,
                "cost_center", ({cost_center}) => {
                    if(cost_center)
                    frm.set_value("cost_center", cost_center)
                }
            )
    },
    set_custom_buttons(frm) {
        if (frm.is_new())
            return
        frm.add_custom_button(__("Resumen de Reembolsos"), function() {
            frappe.route_options = {sales_invoice: frm.docname }
            frappe.set_re_route("query-report", "Resumen de Reembolsos")
        }, __("View"))
    }
})