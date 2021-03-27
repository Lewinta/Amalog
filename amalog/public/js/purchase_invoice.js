frappe.ui.form.on("Purchase Invoice", {
    refresh(frm) {
        frm.trigger("set_defaults");
    },
    set_defaults(frm) {
        if (frm.is_new() && !frm.doc.cost_center)
            frappe.db.get_value(
                "Company",
                frm.doc.company,
                "cost_center", ({ cost_center }) => {
                    if (cost_center)
                        frm.set_value("cost_center", cost_center)
                }
            )


    }
})